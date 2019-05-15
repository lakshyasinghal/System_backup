window.onload = init;


function init(){
	buttons.init();
	getMyLocation();
}

function getMyLocation(){
	getObjects.getGeolocationObject().getMyLocation();
}

/* 
	The buttons object contains all the button related events which will be initialized on calling the init function 
	which makes use of the eventObjects array.
	The eventObjecta array contains all the events in form of objects containing the id of buttons, name of the event , 
	callback function.
*/
var buttons = {
	eventObjects: [{id:"watchPosition", event:"click", fun: getTrackerObject().trackPosition} , {id:"clearWatchPosition",event:"click", fun: getTrackerObject().stopTracking}];

	init: function(){
		var self = getObjects.getButtonsObject();

		var objects = self.eventObjects;
		var id , func , event;

		for(var i=0; i<objects.length; i++){
			id = objects[i].id;
			event = objects[i].event;
			func = objects[i].func;
			document.getElementById(id).addEventListener(event , func);
		}
	}
};


//Geolocation object
var geolocation = {
	//brief description of all the errors that can be thrown by the geolocation object while finding the location
	errorTypes: ["Unknown error" , "Permission denied by user" , "Position is not available" , "Request timed out"],

	/* parent function in the object
	   gets called by successor function when the location is tracked successfully
	*/
	getMyLocation: function(){
		var self = getObjects.getGeolocationObject();
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(self.successor , self.failure);
		}
		else{
			alert("oops, geolocation API not supported on this system");
		}
	},

	successor: function(obj){
		var self = getObjects.getGeolocationObject();
		self.handleLocationObject(obj)
	},

	failure: function(obj){
		var self = getObjects.getGeolocationObject();
		self.handleErrorObject(obj);
	},

	handleLocationObject: function(locationObject){
		var self = getObjects.getGeolocationObject();

		var latitude = locationObject.coords.latitude;
		var longitude = locationObject.coords.longitude;

		self.displayPosition(latitude , longitude);
		getObjects.getGoogleMapsObject().showMap(locationObject.coords);
	},

	handleErrorObject: function(error){
		var self = getObjects.getGeolocationObject();

		var errorMessage;
		if(error.code == 0 || error.code == 2){
			errorMessage = self.errorTypes[error.code] + " " + error.message;
		}
		else{
			errorMessage = self.errorTypes[error.code];
		}
		
		self.displayErrorMessage(errorMessage);
	},

	displayPosition: function(lat , long){
		var locationElement = getObjects.getDisplayLocationDiv();

		locationElement.innerHTML = "Your position is ---- LATITUDE : " + lat + " , LONGITUDE : " + long;
	},

	displayErrorMessage: function(errorMessage){
		var displayElement = getObjects.getDisplayLocationDiv();

		displayElement.innerHTML = errorMessage;
	}
};






//Google maps object
var googleMaps = {
	map: null,
	title: "Your location",

	mapOptions: {
		zoom: 10,
		center: null,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	},

	setCenterInMapOptions: function(coords){
		var self = getObjects.getGoogleMapsObject();

		self.mapOptions.center = self.getGoogleLatAndLong(coords);
	},

	getGoogleLatAndLong: function(coords){
		return new google.maps.LatLng(coords.latitude , coords.longitude);
	},

	showMap: function(coords){
		var self = getObjects.getGoogleMapsObject();

		self.setCenterInMapOptions(coords);

		var mapDiv = getObjects.getDisplayMapDiv();
		self.map = new google.maps.Map(mapDiv , self.mapOptions);

		self.addMarker(self.map , self.getGoogleLatAndLong(coords) , self.title , self.getContentForMarker(coords));
	},

	getContentForMarker: function(coords){
		return "You are here: " + coords.latitude + ", " + coords.longitude;
	},

	addMarker: function(map , latlong , title , content){
		var markerOptions = {
			position: latlong,
			map: map,
			title: title,
			clickable: true
		};

		var marker = new google.maps.Marker(markerOptions);

		var infoWindowOptions = {
			content: content,
			position: latlong
		};

		var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

		google.maps.event.addListener(marker , "click" , function(){
			infoWindow.open(map);
		})
	}	
};




//Position tracker object
var tracker = {
	timeInterval: 3,
	intervalId: null,

	trackPosition: function(){
		var self = window.getObjects.getTrackerObject();
		var getMyLocationHandler = window.getMyLocation;
		var intervalHandler = window.getObjects.getIntervalHandlerObject();
		
		self.intervalId = intervalHandler.setInterval(getMyLocationHandler , self.timeInterval);
	},

	stopTracking: function(){
		var self = window.getObjects.getTrackerObject();
		var intervalHandler = window.getObjects.getIntervalHandlerObject();

		if(self.intervalId != null){
			intervalHandler.clearInterval(self.intervalId);
		}
	}
}


//Interval handler object
var intervalHandler = {
	setInterval: function(handler , timeInterval){
		var id = setInterval(handler , timeInterval * 1000);
		return id;
	},

	removeInterval: function(id){
		clearInterval(id);
	}
}



//Objects container
var getObjects = {
	getGeolocationObject: function(){
		return window.geolocation;
	},

	getDisplayLocationDiv: function(){
		return document.getElementById("location");
	},

	getDisplayMapDiv: function(){
		return document.getElementById("map");
	},

	getGoogleMapsObject: function(){
		return window.googleMaps;
	},

	getIntervalHandlerObject: function(){
		return window.intervalHandler;
	},

	getTrackerObject: function(){
		return window.tracker;
	},

	getButtonsObject: function(){
		return window.buttons;
	}
};

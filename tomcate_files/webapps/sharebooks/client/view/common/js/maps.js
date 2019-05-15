window.onload = getMyLocation;

function getMyLocation(){
	getObjects.getGeolocationObject().getMyLocation();
}

var geolocation = {
	errorTypes: ["Unknown error" , "Permission denied by user" , "Position is not available" , "Request timed out"],

	getMyLocation: function(){
		var self = getObjects.getGeolocationObject();
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(self.handleLocationObject , self.handleErrorObject);
		}
		else{
			alert("oops, geolocation API not supported on this system");
		}
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
			content: content
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
	}
};

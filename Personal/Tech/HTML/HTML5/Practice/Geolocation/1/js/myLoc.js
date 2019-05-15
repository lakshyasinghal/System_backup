window.onload = getMyLocation;

function getMyLocation(){
	getObjects.getGeolocationObject().getMyLocation();
}

var geolocation = {

	getMyLocation: function(){
		var self = getObjects.getGeolocationObject();
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(self.handleLocationObject);
		}
		else{
			alert("oops, geolocation API not supported on this system");
		}
	},

	handleLocationObject: function(locationObject){
		var latitude = locationObject.coords.latitude;
		var longitude = locationObject.coords.longitude;

		var self = getObjects.getGeolocationObject();
		self.displayPosition(latitude , longitude);
	},

	displayPosition: function(lat , long){
		var locationElement = getObjects.getDisplayLocationDiv();

		locationElement.innerHTML = "Your position is ---- LATITUDE : " + lat + " , LONGITUDE : " + long;
	}
}


var getObjects = {
	getGeolocationObject: function(){
		return window.geolocation;
	},

	getDisplayLocationDiv: function(){
		return document.getElementById("location");
	}
}

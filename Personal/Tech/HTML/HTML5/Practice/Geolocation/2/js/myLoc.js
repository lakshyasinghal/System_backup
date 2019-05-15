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
}


var getObjects = {
	getGeolocationObject: function(){
		return window.geolocation;
	},

	getDisplayLocationDiv: function(){
		return document.getElementById("location");
	}
}

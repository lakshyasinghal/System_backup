var responseTypes = {
	TEXT : "text",
	JSON : "json",
	HTML : "html"
}


var validationMessages = {
	EMPTY_FIELDS : "Please enter values in all the fields."
}


var messageColors = {
	ERROR : "red",
	WARNING : "#e2ab30",
	SUCCESS : "green"
}





function postRequest(url , data , successHandler , failureHandler){
	try{
		var http = new XMLHttpRequest();

		var params = getParamString(data);

		//true value will make the request asynchronous
		http.open("POST", url, true);

		//Send the proper header information along with the request
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		http.onreadystatechange = function() {//Call a function when the state changes.
		    if(http.readyState == 4 && http.status == 200) {
		        //alert(http.responseText);
		        successHandler(http.responseText);
		    }
		}

		http.send(params);
	}
	catch(err){
		console.log("Error in post request ----- " + err.message);
	}

}



function getRequest(url , data , successHandler , failureHandler){
	try{
		var http = new XMLHttpRequest();

		var paramString = getParamString(data);
		
		if(paramString != ""){
			var url = url + "?" + paramString;
		}

		//true value will make the request asynchronous
		http.open("GET", url, true);

		//Send the proper header information along with the request
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		http.onreadystatechange = function() {//Call a function when the state changes.
		    if(http.readyState == 4 && http.status == 200) {
		        //alert(http.responseText);
		        successHandler(http.responseText);
		    }
		}

		http.send();
	}
	catch(err){
		console.log("Error in get request ----- " + err.message);
	}
}






function getParamString(paramsObject){
	var paramString = "";
	var i = 0;

	if(paramsObject != null){
		for(var prop in paramsObject){
			if(i != 0){
				paramString += "&";
			}
			paramString += prop + "=" + paramsObject[prop];
			i++;
		}
	}

	return paramString;
}



//for getting data object for the post request
function getDataObject(parameterNames , parameterIds){
	var data = {};

	for(var i=0 ; i<parameterNames.length ; i++){
		data[parameterNames[i]] = document.getElementById(parameterIds[i]).value;
	}

	return data;
}



//displaying message whenever the response is received
//messageContainerId is the id of the element which will contain the message
function displayMessage(messageContainerId , message , messageColor){
	var messageContainer = document.getElementById(messageContainerId);
	messageContainer.innerText = message;
	messageContainer.style.color = messageColor;
}




function removeMessages(messageContainerIds){
	try{
		var size = messageContainerIds.length;
		for(var i=0 ; i<size ; i++){
			document.getElementById(messageContainerIds[i]).innerText = "";
		}
	}
	catch(err){
		console.log("Error occurred in removeMessages function in common.js --- " + err.message);
	}
}


function showErrorMessage(message){
	$("#errorMessage").text(message);
}




/* Cookies handler */

var cookieHandler = {
	readCookie : function(cookieName){
		try{
			var name = cookieName + "=";
			var cookiesArray = document.cookie.split(';');
			var currentCookie;

			for(var i=0 ; i<cookiesArray.length ; i++){
				currentCookie = cookiesArray[i];
				var tokens = currentCookie.split('=');
				if(tokens[0].trim() == cookieName){
					return tokens[1].trim();
				}
			}

			return null;
		}
		catch(err){
			console.log("Error in readCookie in cookiesHandler --- " + err.message);
		}
	},

	createCookie : function(cookieName , cookieValue , days , path){
		try{
			var expires = "";
			if(days != undefined){
				var date = new Date();
				date.setTime(date.getTime() + (days*24*60*60*1000));
				expires = date.toGMTString();
			}
			else{
				expires = "";
			}

			document.cookie = cookieName + "=" + cookieValue + "; expires=" + expires + "; path=/" + path;
		}
		catch(err){
			console.log("Error in createCookie in cookiesHandler --- " + err.message);
		}
	},

	eraseCookie : function(cookieName){
		try{
			var self = cookieHandler;
			cookieHandler.createCookie(cookieName , "" , -1);
		}
		catch(err){
			console.log("Error in eraseCookie in cookiesHandler --- " + err.message);
		}
	}
};













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


var requestSuccessStatusType = {
	SUCCESS_TRUE : 1,
	SUCCESS_FALSE : 2,
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
		$logger.err("removeMessages" , err.message);
	}
}


function showErrorMessage(message){
	$("#errorMessage").text(message);
}




/* Cookies handler */






// var $templateManager = {
// 	getBooksHtml : function(arr){
// 		try{
// 			var bookImagesFolderPath = $global.getBookImagesFolderPath();
// 			var htmlStr = "";
// 			var bookHtml = "";
// 			var book;

// 			for(var i=0 ; i<arr.length ; i++){
// 				bookHtml = "";
// 				book = arr[i];
// 				bookHtml = "<div class=\"book\">\n";
// 				bookHtml += "<div class=\"bookId hidden\">" + book.id + "</div>";
// 				bookHtml += "<img src=\"" + bookImagesFolderPath + "/" + book.image + "\" class=\"bookImage\" width=\"100\" height=\"120\">\n";
// 				bookHtml += "<div class=\"bookName\">" + book.name + "</div>\n";
// 				bookHtml += "<div class=\"bookAuthorName\">" + book.authorName + "</div>\n";
// 				bookHtml += "</div>\n";
// 				htmlStr += bookHtml;
// 			}

// 			return htmlStr;
// 		}
// 		catch(err){
// 			$logger.err("Error in createBooksHtml : " , err.message);
// 		}
// 	}
// }




var $popupManager = (function(){
	return {
		showAlertPopup : function(message){
			window.alert(message);
		}
	}
})();



var loaderManager = (function(){
	return {
		showLoader : function(type , value){
			switch(type){
				case "id" : 
					$("#" + value).show();
					break;
				case "class" :
					$("." + value).show();
					break;
				default :
					break;
			}
		},

		hideLoader : function(type , value){
			switch(type){
				case "id" : 
					$("#" + value).hide();
					break;
				case "class" :
					$("." + value).hide();
					break;
				default :
					break;
			}
		}
	}
})();




var $messageManager = {
	displayStatusMessage : function(statusCode , type , id){
		var message = statusMessages[statusCodes[statusCode]];
		if(type == requestSuccessStatusType.SUCCESS_TRUE){
			alert(message);
		}
		else if(type == requestSuccessStatusType.SUCCESS_FALSE){
			alert(message);
		}
	},

	displayRequestFailureMessage : function(message){
		alert(message);
	}
}




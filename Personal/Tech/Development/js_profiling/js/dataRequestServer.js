var responseBuilder = {

	//this function will take an array of result entities and will return a complete json response for success
	buildSuccessResponse: function(result , statusCode){
		var json = {};
		json.success = true;
		if(!statusCode){
			json.statusCode = 1;
		}
		else{
			json.statusCode = statusCode;
		}
		
		if(result.constructor === Array){
			json.results = result;
		}
		else{
			json.results = [result];
		}

		return JSON.stringify(json);
	},

	//this function will take an array of result entities and will return a complete json response for failure
	buildFailureResponse: function(statusCode){
		var json = {};
		json.success = false;
		if(statusCode){
			json.statusCode = statusCode;
		}
		else{
			json.statusCode = null;
		}
		
		json.results = [];

		return JSON.stringify(json);
	}
};










//-------------------------------------------------------------------------------

var dummyRequestServer = {

	signIn : function(data){
		var user;
		var response;
		var requiredUser;
		var users = dummyData.users;

		var username = data.username;
		var password = data.password;

		for(var i=0 ; i<users.length ; i++){
			user = users[i];
			if(user.username == username && user.password == password){
				requiredUser = user;
				break;
			}
		}

		if(requiredUser){
			response = responseBuilder.buildSuccessResponse(requiredUser , 11);
		}
		else{
			response = responseBuilder.buildFailureResponse(10);
		}

		return response;
	},

	signUp : function(data){
		var newUser = data[0];
		var user;
		var response;
		var users = dummyData.users;

		for(var i=0 ; i<users.length ; i++){
			user == users[i];
			if(user.username == newUser.username){
				response = responseBuilder.buildFailureResponse(5);
			}
		}

		if(!response){
			response = responseBuilder.buildSuccessResponse([] , 1)
		}

		users.push(user);
		return response;
	},

	addBook: function(data){
		var newBook = data[0];
		var book;
		var response;
		var books = dummyData.books;

		for(var i=0 ; i<books.length ; i++){
			book == books[i];
			if(book.name == newBook.name && book.authorName == newBook.authorName && book.category == newBook.category && book.subcategory == newBook.subcategory){
				response = responseBuilder.buildFailureResponse(27);
			}
		}

		if(!response){
			response = responseBuilder.buildSuccessResponse([] , 13)
		}

		books.push(book);
		return response;
	},

	getAllBooks: function(){
		var books = dummyData.books;

		response = responseBuilder.buildSuccessResponse(books , 28);
		return response;
	},

	getBooksBySearchString : function(params){
		try{
			var searchString = params.searchString;

			
		}
		catch(err){
			alert("Error");
		}
	},

	getRandomBooks: function(){
		var tempBooks = [];
		var response;
		var books = dummyData.books;

		for(var i=0 ; i<20 ; i++){
			tempBooks[i] = books[i];
		}

		response = responseBuilder.buildSuccessResponse(tempBooks , 14);
		return response;
	},

	getBookRequests: function getBookRequests(data){
		var result = [];
		var bookRequest;
		var response;
		var bookRequests = dummyData.bookRequests;

		var userId = data.userId;

		for(var i=0; i<bookRequests.length; i++){
			bookRequest = bookRequests[i];
			if(bookRequest.requesterId == userId){
				result.push(bookRequest);
			}
		}

		if(result.length){
			response = responseBuilder.buildSuccessResponse(result , 25);
		}
		else{
			response = responseBuilder.buildFailureResponse(26);
		}

		return response;
	},

	getNotifications: function(data){
		var result = [];
		var notification;
		var response;
		var notifications = dummyData.notifications;

		var userId = data.userId;

		for(var i=0; i<notifications.length; i++){
			notification = notifications[i];
			if(notification.targetId == userId){
				result.push(notification);
			}
		}

		if(result.length){
			response = responseBuilder.buildSuccessResponse(result);
		}
		else{
			response = responseBuilder.buildFailureResponse();
		}

		return response;
	},

	getSimilarBooks: function(data){
		var name = data.bookName;
		var books = dummyData.books;
		var result = [];

		for(var i=0,l=books.length ; i<l ; i++){
			if(books[i].name == name){
				result.push(books[i]);
			}
		}

		if(result.length){
			response = responseBuilder.buildSuccessResponse(result , 22);
		}
		else{
			response = responseBuilder.buildFailureResponse(23);
		}

		return response;
	},

	getUserById: function(data){
		var userId = data.id;
		var users = dummyData.users;
		var result = [];

		for(var i=0,l=users.length ; i<l ; i++){
			if(users[i].id == userId){
				result.push(users[i]);
				break;
			}
		} 

		if(result.length){
			response = responseBuilder.buildSuccessResponse(result , 31);
		}
		else{
			response = responseBuilder.buildFailureResponse(32);
		}

		return response;
	},

	addBookRequest: function(data){
		var option = Math.floor(Math.random() * 2);

		if(option == 0){
			response = responseBuilder.buildSuccessResponse({} , 33);
		}
		else{
			response = responseBuilder.buildFailureResponse(34);
		}

		return response;
	},

	sendOTP: function(data){
		var option = Math.floor(Math.random() * 2);

		if(option == 0){
			response = responseBuilder.buildSuccessResponse({} , 35);
		}
		else{
			response = responseBuilder.buildFailureResponse(36);
		}

		return response;
	},

	verifyOTP: function(){
		var option = Math.floor(Math.random() * 2);

		if(option == 0){
			response = responseBuilder.buildSuccessResponse({} , 37);
		}
		else{
			response = responseBuilder.buildFailureResponse(38);
		}

		return response;
	},

	resetPassword: function(){
		var option = Math.floor(Math.random() * 2);

		if(option == 0){
			response = responseBuilder.buildSuccessResponse({} , 39);
		}
		else{
			response = responseBuilder.buildFailureResponse(40);
		}

		return response;
	},

	getSubcategories: function(){
		var subcategories = dummyData.subcategories;

		response = responseBuilder.buildSuccessResponse(subcategories , 39);
		return response;
	}

};












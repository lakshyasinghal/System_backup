var $global = (function(){
	var config = {
		bookImagesFolderPath: "/sharebooks/client/view1/resources/images/books",
		imagesFolderPath : "/sharebooks/client/view1/resources/images"
	}

	function accessGlobal(){
		return {
				bookIFP: function(){
					return config.bookImagesFolderPath;
				},
				imagesFP : function(){
					return config.imagesFolderPath;
				}
		}
	}

	return accessGlobal();
})();




$pages = (function(){
	var IN = "in";
	var LOG_IN = "login.html";
	var HOME = "home.html";
	var RESULTS = "results.html";
	var CHECKOUT = "checkout.html";
	var CONFIRMATION = "confirmation.html";
	var FEEDBACK = "feedback.html";
	var PROFILE = "profile.html";
	var COMPLAINTS = "complaints.html";
	var HISTORY = "history.html";
	var ABOUT = "about.html";
	var RESET_PASSWORD = "reset.html";
	var PREFERENCES = "preferences.html";


	function Pages(){
		this.signIn = function(){
			window.location.href = IN;
		};

		this.logIn = function(){
			window.location.href = LOG_IN;
		}

		this.home = function(){
			window.location.href = HOME;
		};

		this.results = function(){
			window.location.href = RESULTS;
		};

		this.checkout = function(){
			window.location.href = CHECKOUT;
		};

		this.confirmation = function(){
			window.location.href = CONFIRMATION;
		};

		this.feedback = function(){
			window.location.href = FEEDBACK;
		};

		this.profile = function(){
			window.location.href = PROFILE;
		};

		this.complaints = function(){
			window.location.href = COMPLAINTS;
		};

		this.history = function(){
			window.location.href = HISTORY;
		};

		this.about = function(){
			window.location.href = ABOUT;
		};

		this.resetPassword = function(){
			window.location.href = RESET_PASSWORD;
		};

		this.preferences = function(){
			window.location.href = PREFERENCES;
		};
	}

	return new Pages();
})();


//page urls
$pageURL = (function(){
	var IN = "in";
	var LOG_IN = "login.html";
	var HOME = "home.html";
	var RESULTS = "results.html";
	var CHECKOUT = "checkout.html";
	var CONFIRMATION = "confirmation.html";
	var FEEDBACK = "feedback.html";
	var PROFILE = "profile.html";
	var COMPLAINTS = "complaints.html";
	var HISTORY = "history.html";
	var ABOUT = "about.html";
	var RESET_PASSWORD = "reset.html";
	var PREFERENCES = "preferences.html";

	return {
		in : function(){
			return IN;
		},
		signIn : function(){
			return LOG_IN;
		},
		home : function(){
			return HOME;
		},
		results : function(){
			return RESULTS;
		},
		checkout : function(){
			return CHECKOUT;
		},
		confirmation : function(){
			return CONFIRMATION;
		},
		feedback : function(){
			return FEEDBACK;
		},
		profile : function(){
			return PROFILE;
		},
		complaints : function(){
			return COMPLAINTS;
		},
		history : function(){
			return HISTORY;
		},
		about : function(){
			return ABOUT;
		},
		resetPassword : function(){
			return RESET_PASSWORD;
		},
		preferences : function(){
			return PREFERENCES;
		}
	}
})();



$sm = (function(){
	//configuring status codes
	statusCodes = {
		"1" : "ADD_USER_SUCCESSFUL",
		"2" : "GET_USER_SUCCESSFUL",
		"3" : "USER_UPDATE_SUCCESSFUL",
		"4" : "USER_UPDATE_FAILED",
		"5" : "USERNAME_ALREADY_EXISTS",
		"6" : "USERINFO_INCOMPLETE",
		"7" : "LOGOUT_SUCCESSFUL",
		"8" : "SESSION_ALREADY_EXPIRED",
		"9" : "SESSION_TIMEOUT",
		"10" : "LOGIN_FAILED",
		"11" : "LOGIN_SUCCESSFUL",
		"12" : "ADD_BOOK_FAILED",
		"13" : "ADD_BOOK_SUCCESSFUL",
		"14" : "GET_BOOKS_SUCCESSFUL",
		"15" : "GET_BOOKS_FAILED",
		"16" : "GET_BOOKS_BY_CATEGORY_SUCCESSFUL",
		"17" : "GET_BOOKS_BY_CATEGORY_FAILED",
		"18" : "GET_BOOKS_BY_SEARCH_SUCCESSFUL",
		"19" : "GET_BOOKS_BY_SEARCH_FAILED",
		"20" : "INCORRECT_REQUEST",
		"21" : "SESSION_DOES_NOT_EXIST",
		"22" : "GET_SIMILAR_BOOKS_SUCCESSFUL",
		"23" : "GET_SIMILAR_BOOKS_FAILED",
		"24" : "ADD_BOOK_REQUEST_SUCCESSFUL",
		"25" : "ADD_BOOK_REQUEST_FAILED",
		"26" : "GET_BOOK_REQUESTS_SUCCESSFUL",
		"27" : "GET_BOOK_REQUESTS_FAILED",
		"28" : "BOOK_ALREADY_EXISTS",
		"29" : "GET_ALL_BOOKS_SUCCESSFUL",
		"30" : "GET_ALL_BOOKS_FAILED",
		"31" : "GET_USER_BY_ID_SUCCESSFUL",
		"32" : "GET_USER_BY_ID_FAILED",
		"33" : "BOOK_REQUEST_SUCCESSFUL",
		"34" : "BOOK_REQUEST_FAILED",
		"35" : "SEND_OTP_SUCCESSFUL",
		"36" : "SEND_OTP_FAILED",
		"37" : "OTP_VERIFICATION_SUCCESSFUL",
		"38" : "OTP_VERIFICATION_FAILED",
		"39" : "GET_SUBCATEGORIES_SUCCESSFUL",
		"40" : "GET_SUBCATEGORIES_FAILED"
	};

	statusMessages = {
		ADD_USER_SUCCESSFUL : "Registered successfully",                                               
		GET_USER_SUCCESSFUL : "User retrieved successfully",                                           
		USER_UPDATE_SUCCESSFUL : "User updated successfully",                                             
		USER_UPDATE_FAILED : "User update failed",                                                  
		USERNAME_ALREADY_EXISTS : "Username already exists. Please choose a different username",           
		USERINFO_INCOMPLETE : "Please enter all the details for the user",                             
		LOGOUT_SUCCESSFUL : "You have been logged out",                                              
		SESSION_ALREADY_EXPIRED : "Your session is already expired",                                       
		SESSION_TIMEOUT : "Your session has timed out",                                            
		LOGIN_FAILED : "Login failed. Please check login credentials",                         
		LOGIN_SUCCESSFUL : "Logged in successfully",                                                
		ADD_BOOK_FAILED : "Book could not be added. Some error occurred",                          
		ADD_BOOK_SUCCESSFUL : "Book has been added successfully to the account",                      
		GET_BOOKS_SUCCESSFUL : "Books retrieved successfully",                                         
		GET_BOOKS_FAILED : "Books could not be fetched. Some error occurred",                       
		GET_BOOKS_BY_CATEGORY_SUCCESSFUL : "Books fetched successfully by category",                                
		GET_BOOKS_BY_CATEGORY_FAILED : "Books request by category failed",                                      
		GET_BOOKS_BY_SEARCH_SUCCESSFUL : "Books request by search string successful",                             
		GET_BOOKS_BY_SEARCH_FAILED : "Books request by search string failed",                                 
		INCORRECT_REQUEST : "Something is wrong with the request. Please check",                     
		SESSION_DOES_NOT_EXIST : "Session doesn't exist",                                                 
		GET_SIMILAR_BOOKS_SUCCESSFUL : "Get similar books to the selected book successfully",
		GET_SIMILAR_BOOKS_FAILED : "No similar books found to the book you requested for",					
		ADD_BOOK_REQUEST_SUCCESSFUL : "Your book request has been saved successfully",     					
		ADD_BOOK_REQUEST_FAILED : "Your book request couldn't be added.",
		GET_BOOK_REQUESTS_SUCCESSFUL : "Book requests retrieved successfully.",
		GET_BOOK_REQUESTS_FAILED : "Book requests could not be fetched.",
		BOOK_ALREADY_EXISTS : "The books you are trying to add already exists.",
		GET_ALL_BOOKS_SUCCESSFUL : "All books fetched successfully.",
		GET_ALL_BOOKS_FAILED : "Get all books request failed.",
		GET_USER_BY_ID_SUCCESSFUL : "User fetched by id successfully",
		GET_USER_BY_ID_FAILED : "User couldn't be fetched for the given id",
		BOOK_REQUEST_SUCCESSFUL : "Your book request has been processed successfully",
		BOOK_REQUEST_FAILED : "Your book request could not be request. Please try after sometime.",
		SEND_OTP_SUCCESSFUL : "OTP has been sent successfully.",
		SEND_OTP_FAILED : "OTP couldn't be sent.",
		OTP_VERIFICATION_SUCCESSFUL : "OTP verified successfully",
		OTP_VERIFICATION_FAILED : "OTP verification failed",
		GET_SUBCATEGORIES_SUCCESSFUL : "Subcategories retrieved succesfully",
		GET_SUBCATEGORIES_FAILED : "Get subcategories request failed"
	};



	return {
		message: function(code){
			return statusMessages[statusCodes[code]];
		}
	}

});



$config = {
	$global: $global,
	$pages: $pages,
	$sm: $sm
}



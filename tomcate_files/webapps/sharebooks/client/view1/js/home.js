var categoriesObject = {
	"Science" : ["Physics" , "Chemistry" , "Maths" , "Biology"],
	"Computer Science" : ["Java" , "Javascript" , "C" , "C++" , "Data Structures & Algorithms" , "HTML" , "Android"],
	"Social Studies" : ["History" , "Geography" , "Economics"],
	"Commerce" : ["Accounts" , "Economics" , "Maths"],
	"Literature" : ["Fiction" , "Romance" , "Thrillers" , "Horror"]
};


$(document).ready(function(){
	init();
});


var init = function(){
	try{
		$booksHandler.init();
		$profileHandler.init();
		$browsingHandler.init();
		$notificationHandler.init();
		$windowHandler.init();
	}
	catch(err){
		$logger.err("init" , err.message);
	}
};


var $windowHandler = (function(){
	var self = $windowHandler;

	function WindowHandler(){
		this.init = function(){
			try{
				self = $windowHandler;
				window.addEventListener("click" , self.closeAllOpenPanels);
			}
			catch(err){
				$logger.err("init" , err.message);
			}
		};

		this.closeAllOpenPanels = function(e){
			try{
				//browsingHandler.closeAll();
				$profileHandler.closeAll();
				$notificationHandler.closeAll();
			}
			catch(err){
				$logger.err("closeAllOpenPanels" , err.message);
			}
		};
	}

	return new WindowHandler();
})();



var $profileHandler = (function(){
	var profileListHidden = true;
	var self = null;

	function ProfileHandler(){
		this.init = function(){
			try{
				self = $profileHandler;
				var profileImage = $("#profileImage")[0];
				profileImage.addEventListener("click" , self.toggleProfileList);

				$("#profileTab").click(self.viewProfile);
				$("#historyTab").click(self.viewHistory);
				$("#signOutTab").click(self.signOut);
				$("#feedbackTab").click(self.feedback);
				$("#complaintsTab").click(self.complaint);
			}
			catch(err){
				$logger.err("init" , err.message);
			}
		};

		this.toggleProfileList = function(e){
			try{
				e.preventDefault();
				e.stopPropagation();
				//windowHandler.closeAllOpenPanels();
				if(profileListHidden){
					profileListHidden = false;
					$("#profileList").show();
				}
				else{
					profileListHidden = true;
					$("#profileList").hide();
				}
			}
			catch(err){
				$logger.err("toggleProfileList" , err.message);
			}
		};

		this.viewProfile = function(){
			try{
				$pages.profile();
			}
			catch(err){
				$logger.err("viewProfile" , err.message);
			}
		};

		this.viewHistory = function(){
			try{
				$pages.history();
			}
			catch(err){
				$logger.err("viewHistory" , err.message);
			}
		};


		this.signOut = function(){
			try{
				$httpService.signOut();
			}
			catch(err){
				$logger.err("signOut" , err.message);
			}
		};

		this.feedback = function(){
			try{
				$pages.feedback();
			}
			catch(err){
				$logger.err("feedback" , err.message);
			}
		};

		this.complaint = function(){
			try{
				$pages.complaints();
			}
			catch(err){
				$logger.err("complaint" , err.message);
			}
		};

		this.closeAll = function(){
			try{
				if(!profileListHidden){
					self.toggleProfileList();
				}
			}
			catch(err){
				$logger.err("closeAll" , err.message);
			}
		};
	}

	return new ProfileHandler();
})();



var $notificationHandler = (function(){
	var notificationBoxId = "notificationBox";
	var notifications = [];
	var self = null;

	function NotificationHandler(){
		this.init = function(){
			try{
				self = $notificationHandler;
				var notificationImage = $("#notificationImage")[0];
				notificationImage.addEventListener("click" , self.showNotifications);
			}
			catch(err){
				$logger.err("init" , err.message);
			}
		};

		this.highlight = function(){
			try{
				//notificationCount
				var ntfCnt = notifications.length;
				if(ntfCnt == 0){
					$("#totalCount").hide();
				}
				else{
					$("#totalCount").text(ntfCnt);
					$("#totalCount").show();	
				}
			}
			catch(err){
				$logger.err("highlight" , err.message);
			}
		};

		this.showNotifications = function(e){
			try{
				e.preventDefault();
				e.stopPropagation();
				if($("#notificationBox").css("display") == "block"){
					$("#notificationBox").fadeToggle("fast");
					return;
				}
				//windowHandler.closeAllOpenPanels();
				$("#notificationBox").fadeToggle("fast");
			}
			catch(err){
				$logger.err("showNotifications" , err.message);
			}
		};

		this.getNotifications = function(){
			try{
				function success(response){
					if(response.success){
						notifications = response.data;
					}
					else{
						
					}
				}

				$httpService.getNotifications(params , success , failure);
			}
			catch(err){
				$logger.err("getNotifications" , err.message);
			}
		};

		this.closeAll = function(){
			try{
				$("#notificationBox").hide();
			}
			catch(err){
				$logger.err("closeAll" , err.message);
			}
		};
	}

	return new NotificationHandler();
})();



var $browsingHandler = (function(){
	var self = null;

	function BrowsingHandler(){

		this.init = function(){
			try{
				self = $browsingHandler;

				//$("#browseLink").click(self.showCategoriesPanel);
				$(".category").click(function(e){
					self.showSubCategoriesPanel(e);
				});

				$(".subcategory").click(function(e){
					e.preventDefault();
					e.stopPropagation();
					var elem = e.target;
					var subcategory = $(elem).text().trim();
					var category = $(elem).parents(".category")[0].getElementsByTagName("span")[0].innerText.trim();
					$booksHandler.getBooksByCategory(category , subcategory);
				});
			}
			catch(err){
				$logger.err("init" , err.message);
			}
		};


		this.showCategoriesPanel = function(e){
			try{
				e.preventDefault();
				e.stopPropagation();

				if($("#categoriesContainer").css("display") == "block"){
					$(".category").css("top" , "0px");
					$("#categoriesContainer").slideUp();
					return;
				}

				$windowHandler.closeAllOpenPanels();
				$("#categoriesContainer").slideDown("medium");
			}
			catch(err){
				$logger.err("showCategoriesPanel" , err.message);
			}
		};

		this.showSubCategoriesPanel = function(e){
			try{
				e.preventDefault();
				e.stopPropagation();

				var categoryElem = e.target;
				if(categoryElem.nodeName === "SPAN"){
					categoryElem = categoryElem.parentElement;
				}
				var subcategoryPanel = categoryElem.getElementsByClassName("subcategoriesContainer")[0];

				if($(subcategoryPanel).css("display") == "block"){
					$(subcategoryPanel).slideUp("medium" , function(){
						$(categoryElem).animate({top : "0px"});
					});
					return;
				}
				
				$(".subcategoriesContainer").hide();
				$(".category").css("top" , "0px");

				$(categoryElem).animate({top : "10px"} , function(){
					//$(subcategoryPanel).css("top" , "100%");
					var elems = subcategoryPanel.getElementsByClassName("subcategory");
					for(var i=0,len = elems.length ; i<len ; i++){
						$(elems[i]).css("top" , "0px");
					} 

					$(subcategoryPanel).slideDown("medium");
				});
				//$(subcategoryPanel).slideDown("medium");
			}
			catch(err){
				$logger.err("showSubCategoriesPanel" , err.message);
			}
		};

		this.closeAll = function(){
			try{
				$(".subcategoriesContainer").hide();
				$(".category").css("top" , "0px");
				$("#categoriesContainer").hide();
			}
			catch(err){
				$logger.err("closeAll" , err.message);
			}
		};
	}

	return new BrowsingHandler();
})();



var $booksHandler = (function(){
	var self = null;
	var books = [];
	var selectedBooks = [];
	var sortingRequired = false;
	var requiredSearchLength = 5;
	var moreSpecificSearchMessage = "Please be more specific in your search.\nPlease provide atleast 5 characters.";

	function BooksHandler(){

		this.init = function(){
			try{
				self = $booksHandler;
				self.getAllBooks();
				self.initEvents();
			}
			catch(err){
				$logger.err("init" , err.message);
			}
		};

		this.initEvents = function(){
			try{
				$(".book").click(self.selectBook);
			}
			catch(err){
				$logger.err("initEvents" , err.message);
			}
		};


		this.selectBook = function(e){
			try{
				var element = e.target;
				e.stopPropagation();

				while(element.className != "book"){
					element = element.parentElement;
				}
				
				var bookId = element.getElementsByClassName("bookId")[0].innerText.trim();

				var book = self.getBookById(bookId);

				if(window.sessionStorage){
					if(book == null){
						sessionStorage.setItem("selectedBook" , null);
					}
					else{
						sessionStorage.setItem("selectedBook" , JSON.stringify(book));
					}
					//sessionStorage.setItem("books" , JSON.stringify(self.books));
				}

				$pages.results();
			}
			catch(err){
				$logger.err("selectBook" , err.message);
			}
		};


		this.getBookById = function(id){
			try{
				var books = selectedBooks;
				for(var i=0 ; i<books.length ; i++){
					if(books[i].id == id){
						return books[i];
					}
				}
				return null;
			}
			catch(err){
				$logger.err("getBookById" , err.message);
			}
		};


		this.getAllBooks = function(){
			try{

				function success(response){
					try{
						var data = JSON.parse(response);
						if(data.success){
							var books = data.results;

							if(sortingRequired){
								books.sort(function(book1 , book2){
									if(book1.name < book2.name){
										return -1;
									}
									else if(book1.name > book2.name){
										return 1;
									}
									else
										return 0;
								});
							}

							books = books;
							selectedBooks = books;
							self.displayBooks();
						}
						else{
							alert("Error in success in getAllBooks");
							// if(data.statusCode == statusCodes.SESSION_DOES_NOT_EXIST){
							// 	location.reload();
							// }
						}
					}
					catch(err){
						$logger.err("Error in success in getAllBooks -- " , err.message);
					}
				}


				function failure(response){

				}

				$httpService.getAllBooks(null , success , failure);
			}
			catch(err){
				$logger.err("getAllBooks" , err.message);
			}
		};

		this.getBooksByCategory = function(category , subcategory){
			try{
				//self.selectedBooks = [];
				showPageLoader = true;

				var params = {};

				params["category"] = category;
				if(subcategory != undefined){
					params["subcategory"] = subcategory;
				}

				function success(response){
					var data = JSON.parse(response);
					if(data.success){
						selectedBooks = data.results;
					}
					else{
						if(data.statusCode == statusCodes.SESSION_DOES_NOT_EXIST){
							location.reload();
						}
						//displayMessage($scope.messageContainerId , messages[data.statusCode - 1] , messageColors.WARNING);
					}
				}

				function failure(response){
					showPageLoader = false;
					$logger.err("Get books response --- " + response);
				}
				
				$httpService.filterByCategory(params , success , failure);
			}
			catch(err){
				$logger.err("getBooksByCategory" , err.message);
			}
		};


		//improvement required in this method
		//searching can be done using binary search
		this.getBooksBySearchString = function(e){
			try{
				var key = e.key;

				if(key != "Enter"){
					return;
				}
				var elem = event.target;
				var searchString = elem.value.trim();
				//return if search string length is less than required length to prevent useless searches
				if(searchString.length < requiredSearchLength){
					$popupManager.showAlertPopup(moreSpecificSearchMessage);
					return;
				}
				$loaderManager.showLoader("id" , "pageLoader");
				var params = {};
				params["searchString"] = searchString;

				function success(response){
					$loaderManager.hideLoader("id" , "pageLoader");
					var data = JSON.parse(response);
					if(data.success){
						var books = data.results;
						selectedBooks = books;
						self.displayBooks();
					}
					else{
						$messageManager.displayStatusMessage(data.statusCode , 2 , null);
					}
				}
				
				function failure(){
					alert("Request failed");
				}

				$httpService.getBooksBySearchString(params , success , failure);
			}
			catch(err){
				$logger.err("getBooksBySearchString" , err.message);
			}
		};

		this.displayBooks = function(){
			try{
				var bookTemplate = $templates.bookTemplate();
				var books = selectedBooks;
				var html = "";
				$("#booksContainer").html("");
				for(var i=0; i<books.length; i++){
					html +=  $templateManager.getHtmlFromTemplate(bookTemplate , books[i]);
				}
				$("#booksContainer").html(html);
			}
			catch(err){
				$logger.error("displayBooks" , err.message);
			}
		};
	}

	return new BooksHandler();
})();







var $bookPopupHandler = (function(){
	var paramNames = ["id" , "userId" , "name" , "authorName" , "category" , "subcategory" , "pages" , "image" , "available" , "buy" , "buyAmount" , "rent" , "rentAmount"];
	var selectedCategory = "Science";
	var selectedSubCategory = "";
	var categories = ["Science" , "Computer Science" , "Social Studies" , "Commerce" , "Literature"];
	var subcategories = {
		"Science" : ["Physics" , "Chemistry" , "Maths" , "Biology"],
		"Computer Science" : ["Java" , "Javascript" , "C" , "C++" , "Data Structures & Algorithms" , "HTML" , "Android"],
		"Social Studies" : ["History" , "Geography" , "Economics"],
		"Commerce" : ["Accounts" , "Economics" , "Maths"],
		"Literature" : ["Fiction" , "Romance" , "Thrillers" , "Horror"]
	};
	var addBookSuccessMessage = "";
	var addBookErrorMessage = "";
	var buyChecked = false;
    var rentChecked = false;
	var messageContainer = "addBookMessageContainer";
	var self = null;


	function BookPopupHandler(){
		this.init = function(){
			try{
				var self = $bookPopupHandler;
				//$scope.startCategoryDropdown();
				$("#category").click(function(){
					var display = $("#categoriesList")[0].style.display;
					if(display == "block"){
						$("#categoriesList").slideUp("fast");
					}
					else{
						$("#categoriesList").slideDown("fast");
					}
				});

				$("#subcategory").click(function(){
					var display = $("#subcategoriesList")[0].style.display;
					if(display == "block"){
						$("#subcategoriesList").slideUp("fast");
					}
					else{
						$("#subcategoriesList").slideDown("fast");
					}
				});

				$("#addBookButton").click(self.addBook);
			}
			catch(err){
				$logger.err("init" , err.message);
			}
		};

		this.toggleBuyChecked = function(){
			try{
				if(buyChecked){
					buyChecked = false;
				}
				else{
					buyChecked = true;
				}
			}
			catch(err){
				$logger.err("toggleBuyChecked" , err.message);
			}
		};


		this.toggleRentChecked = function(){
			try{
				if(rentChecked){
					rentChecked = false;
				}
				else{
					rentChecked = true;
				}
			}
			catch(err){
				$logger.err("toggleRentChecked" , err.message);
			}
		};


		this.selectCategory = function(){
			try{
				var elem = event.target;
				var category = ($(elem).text()).trim();
				selectedCategory = category;

				$("#category").val(category);

				$("#categoriesList").hide();
			}
			catch(err){
				$logger.err("selectCategory" , err.message);
			}
		};


		this.selectSubCategory = function(){
			try{
				var elem = event.target;
				var subcategory = ($(elem).text()).trim();
				selectedSubCategory = subcategory;
				$("#subcategory").val(subcategory);
				$("#subcategoriesList").hide();
			}
			catch(err){
				$logger.err("selectSubCategory" , err.message);
			}
		};

		// $scope.startCategoryDropdown = function(){

		// 	var categoryInput = $("#category")[0];

		// 	$("#categoryDropdown ul li").click(function(event){
		// 		var selectedValue = event.target.innerText;
		// 		categoryInput.value = selectedValue;
		// 	});		
		// };

		this.addBook = function(){
			try{
				var params = self.collectParameters();

				function success(response){
					data = JSON.parse(response);
					if(data.success){
						//$scope.addBookSuccessMessage = messages[data.statusCode - 1];
						$messageManager.displayStatusMessage(data.statusCode , 1 , null);
					}
					else{
						$messageManager.displayStatusMessage(data.statusCode , 2 , null);
					}
				}

				function failure(response){
					alert("Request failure");
				}

				$httpService.addBook(params , success , failure);
			}
			catch(err){
				$logger.err("addBook" , err.message);
			}
		};

		this.validateFields = function(){

		};

		this.collectParameters = function(){
			try{
				var paramName;
				var params = {};
				params.id = -1;
				params.userId = user.id;
				$logger.log("User id : " + params.userId);

				//starting with 1 because we don't need id and userId
				for(var i=2 ; i<params.length ; i++){
					paramName = paramNames[i];
					if(paramName == "buy" || paramName == "rent"){
						params[paramName] = ($("#" + paramName)[0].checked) ? 1 : 0;
						continue;
					}
					params[paramName] = $("#" + paramName).val();
				}
				//paramsObject.image = "";
				return paramsObject;
			}
			catch(err){
				$logger.err("collectParameters" , err.message);
			}
		};
	}

	return new BookPopupHandler();
})();


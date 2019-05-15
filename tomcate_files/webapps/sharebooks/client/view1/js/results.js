window.onload = function(){
	optionsHandler.init();
	resultsHandler.init();
};


var calculateAge = function(birthday){
	try{
		var age = undefined;
		var tokens = birthday.split('/');

		var year = tokens[2];

		var currentDate = new Date();
		var currentYear = currentDate.getFullYear();

		return currentYear - year;
	}
	catch(err){
		$logger.err("calculateAge" , err.message);
	}
};



var optionsHandler = (function(){
	var showLessResultsFlag = true;
	var showMoreResultsFlag = false;

	var obj = new Object();
	obj.init = function(){
		try{

		}
		catch(err){
			
		}
	}

	obj.showLessResults = function(){
		try{
			showMoreResultsFlag = false;
			showLessResultsFlag = true;

			resultsHandler.showLessResults();
		}
		catch(err){
			$logger.err("showLessResults" , err.message);
		}
	};

	obj.showMoreResults = function(){
		try{
			showMoreResultsFlag = true;
			showLessResultsFlag = false;

			resultsHandler.showMoreResults();
		}
		catch(err){
			$logger.err("showMoreResults" , err.message);
		}
	};

	obj.home = function(){
		try{
			$pages.home();
		}
		catch(err){
			$logger.err("home" , err.message);
		}
	};


	return obj;
})();








var resultsHandler = (function(){

	var selectedBook = null;
	var similarBooks = [];
	var selectedResult = null;
	var similarResults = [];
	var results = [];
	var getSimilarBooksRequestCompleted = false;


	var obj = new Object();

	obj.init = function(){
		try{
			var self = obj;
			self.initEvents();
			self.getSelectedBook();
		}
		catch(err){
			$logger.err("init" , err.message);
		}
	};

	obj.initEvents = function(){
		try{
			$("#backButton").click(function(){
				$pages.home();
			});
		}
		catch(err){
			$logger.err("initEvents" , err.message);
		}
	};

	obj.startEvents = function(){
		try{
			//this function will provide numbers to reults to identify them
			(function(){
				var counter = 0;
				 $(".result").each(function(){
				 	$(this).attr("num" , ++counter);
				 });
			})();


			$(".buy").click(function(e){
				//alert("Buy book");
				var target = e.target;
				while(target.className.indexOf("result") < 0){
					target = target.parentElement;
				}
				var num = $(target).attr("num");
				var selectedResult = results[num - 1]; 
				sessionStorage.setItem("selectedResult" , JSON.stringify(selectedResult));
				sessionStorage.setItem("option" , "2");
				$pages.checkout();
			});

			$(".rent").click(function(e){
				//alert("Rent book");
				var target = e.target;
				while(target.className.indexOf("result") < 0){
					target = target.parentElement;
				}
				var num = $(target).attr("num");
				var selectedResult = results[num - 1]; 
				sessionStorage.setItem("selectedResult" , JSON.stringify(selectedResult));
				sessionStorage.setItem("option" , "1");
				$pages.checkout();
			});

			$(".viewLocBtn").click(function(){
				alert("Maps will be added soon.");
			});
		}
		catch(err){
			$logger.err("startEvents" , err.message);
		}
	};

	obj.getSelectedBook = function(){
		try{
			var self = obj;
			if(window.sessionStorage){
				//self.books = JSON.parse(sessionStorage.books);
				selectedBook = JSON.parse(sessionStorage.selectedBook);
			}
			else{
				$logger.warning("session object not available in init in resultsHandler");
				return;
			}

			self.getSimilarBooks();
			results = [];
			results.push(selectedResult);
			self.displayResults();
		}
		catch(err){
			$logger.err("getSelectedBook" , err.message);
		}
	};

	obj.getSimilarResults = function(){
		try{
			var self = resultsHandler;

			//getting the similar results for selected book
			//the similar books will also containe the selected book
			for(var i=0; i < similarBooks.length; i++){
				//function for getting result and pushing it into otherResults array
				(function(){
					var book = similarBooks[i];
					var result = {book: book , user: null};
					var userId = book.userId;
					var user = {};

					var params = {"id" : userId};

					function success(response){
						data = JSON.parse(response);
						if(data.success){
							user = data.results[0];

							result.user = user;
							similarResults.push(result);

							if(userId == selectedBook.userId){
								selectedResult = result;
								results.push(selectedResult);
							}
						}
						else{
							$logger.log("\nget user request failed\n");
						}
					}

					function failure(response){
						alert("GetSimilarResults request failed");
					}

					$httpService.getUserById(params , success , failure);
				})();
			}
		}
		catch(err){
			$logger.err("getSimilarResults" , err.message);
		}
	};

	obj.showMoreResults = function(){
		try{
			var self = obj;
			results = similarResults;
			self.displayResults();
		}
		catch(err){
			$logger.err("showMoreResults" , err.message);
		}
	};

	obj.showLessResults = function(){
		try{
			var self = obj;
			results = [];
			results.push(selectedResult);
			self.displayResults();
		}
		catch(err){
			$logger.err("showLessResults" , err.message);
		}
	};


	obj.getSimilarBooks = function(){
		try{
			var self = obj;
			var bookName = selectedBook.name;
			var params = {"bookName" : bookName};

			function success(response){
				var data = JSON.parse(response);
				if(data.success){
					similarBooks = data.results;
					self.getSimilarResults();
				}
				else{
					$logger.log("data could not be fetched for getSimilarBooks request");
				}
			}

			function failure(response){
				alert("Request failure");
			}
	
			$httpService.getSimilarBooks(params , success , failure);

			return ;
		}
		catch(err){
			$logger.err("Error in getSimilarBooks in resultsHandler - " , err.message);
		}
	};

	obj.displayResults = function(){
		try{
			var self = obj;
			var displayHtml = "";
			var temp;
			var resultTemplate = $templates.resultTemplate();

			for(var i=0 ; i<results.length ; i++){
				//temp = resultTemplateHandler.getResultTemplate(results[i]);
				temp = $templateManager.getHtmlFromTemplate(resultTemplate , results[i]);
				displayHtml += temp;
			}

			$("#resultsContainer").html("");
			$("#resultsContainer").html(displayHtml);

			self.startEvents();
		}
		catch(err){
			$logger.err("Error in displayResults - " , err.message);
		}
	};

	obj.checkout = function(option , result){
		try{
			var self = resultsHandler;

			sessionStorage.setItem("option" , option);
			sessionStorage.setItem("result" , JSON.stringify(result));
			$pages.checkout();
		}
		catch(err){
			$logger.err("Error in checkout - " , err.message);
		}
	};

	return obj;
})();
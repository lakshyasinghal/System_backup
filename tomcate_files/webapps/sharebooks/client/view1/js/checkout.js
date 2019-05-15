window.onload = function(){
	try{
		$checkoutHandler.init();
	}
	catch(err){
		$logger.log("onload" , err.message);
	}
};


var $checkoutHandler = (function(){
	var options = {
		"1" : "Rent",
		"2" : "Buy"
	};

	var optionDescriptions = {
		"1" : "GET BOOK ON RENT",
		"2" : "BUY BOOK"
	};
	var bookImage = undefined;
	var minDays = 7;
	var minDaysMessage = "Days cannot be less than " + minDays;
	var option = undefined;
	var optionDescr = optionDescriptions["0"];
	var book = null;
	var contact = null;
	var daysCount = 7;
	var optionDescription = undefined;
	var buyAmount = undefined;
	var rentAmount = undefined;
	var totalRentAmount = undefined;
	var rent = undefined;
	var buy = undefined;
	
	var daysMessage = "";

	return (function(){
		return {
			init : function(){
				try{
					this.initState();
					this.initEvents();
					this.initView();
				}
				catch(err){
					$logger.log("init" , err.message);
				}
			},

			initState : function(){
				try{
					if(window.sessionStorage){
						var result = JSON.parse(sessionStorage["selectedResult"]);
						book = result.book;
						contact = result.user;
						option = sessionStorage["option"];
					}
					else{
						var browser = "";
						$logger.log(err.message);
						$mailLogger.log($logMessages.sessionStorageNA() + "\nBrowser : " + browser);
					}

					rent = book["rent"];
					buyAmount = book["buyAmount"];
					rentAmount = book["rentAmount"];
					totalRentAmount = rentAmount * daysCount;
					bookImage = book["image"];
				}
				catch(err){
					$logger.log("initState" , err.message);
				}
			},

			initEvents : function(self){
				try{
					$("#backButton").click(this.goToResultsPage);
					$("#homeButton").click(this.goHome);
					$("#increaseDays").click(this.increaseDays);
					$("#decreaseDays").click(this.decreaseDays);
					$("#proceedButton").click(this.bookRequest);
				}
				catch(err){
					$logger.log("initEvents" , err.message);
				}
			},

			initView : function(){
				try{
					$("#bookImage").attr("src" , $global.imagesFP() + "/" + bookImage);
					$("#rentAmount").text(rentAmount);
					$("#daysCount").text(daysCount);
					$("#totalRentAmount").text(totalRentAmount);
					$("#buyAmount").text(buyAmount);
					if(option == 1){
						$("#rentDetailsContainer").show();
						$("#optionDescriptionContainer").text(optionDescriptions["1"]);
					}
					else{
						$("#buyDetailsContainer").show();
						$("#optionDescriptionContainer").text(optionDescriptions["2"]);
					}
				}
				catch(err){
					$logger.log("initView" , err.message);
				}
			},

			goToResultsPage : function(){
				try{
					$pages.results();
				}
				catch(err){
					$logger.log("goToResultsPage" , err.message);
				}
			},

			goHome : function(self){
				try{
					$pages.home();
				}
				catch(err){
					$logger.log("goHome" , err.message);
				}
			},

			increaseDays : function(){
				try{
					var self = $checkoutHandler;
					self.cleanUp();
					daysCount++;
					totalRentAmount += rentAmount;
					$("#daysCount").text(daysCount);
					$("#totalRentAmount").text(totalRentAmount);
				}
				catch(err){
					$logger.log("increaseDays" , err.message);
				}
			},

			decreaseDays : function(){
				try{
					var self = $checkoutHandler;
					self.cleanUp();
					if(daysCount == minDays){
						$("#daysMessage").text(minDaysMessage);
						return;
					}
					daysCount--;
					totalRentAmount -= rentAmount;
					$("#daysCount").text(daysCount);
					$("#totalRentAmount").text(totalRentAmount);
				}
				catch(err){
					$logger.log("decreaseDays" , err.message);
				}
			},

			bookRequest : function(){
				try{
					var self = $checkoutHandler;
					self.cleanUp();

					var params = self.getBookRequestParams();
					//var paramString = getParamString(params);

					function success(response){
						var data = JSON.parse(response);
						$pages.confirmation();
					}

					function failure(response){
						alert("Request failure");
					}

					$httpService.addBookRequest(params , success , failure);
				}
				catch(err){
					$logger.log("bookRequest" , err.message);
				}
			},

			getBookRequestParams : function(){
				try{
					var self = $checkoutHandler;
					var params = {};
					//params.id = -1;

					if(option == 1){
						params.requestType = 1;
					}
					else{
						params.requestType = 2;
					}

					//params.requestStatus = 1;
					params.requesterId = (JSON.parse($cookie.get("currUser")))["id"];
					params.bookId = $scope.book.id;
					params.targetId = $scope.contact.id;
					params.estimatedDays = $scope.daysCount;

					return params;
				}
				catch(err){
					$logger.log("getBookRequestParams" , err.message);
				}
			},

			cleanUp : function(){
				try{
					var self = $checkoutHandler;
					$("#daysMessage").text("");
				}
				catch(err){
					$logger.log("cleanUp" , err.message);
				}
			},

			updateView : function(){
				try{
					var self = $checkoutHandler;
				}
				catch(err){
					$logger.log("updateView" , err.message);
				}
			}
		}
	})();
})();
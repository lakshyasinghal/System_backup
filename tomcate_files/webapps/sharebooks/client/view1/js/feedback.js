$(document).ready(function(){
	$feedbackHandler.init();
});	



$feedbackHandler = (function(){
	var self = null;
	var rating = -1;
	var comments = "";

	function FeedbackHandler(){

		this.init = function(){
			try{
				self = $feedbackHandler;

				$(".ratingBox").click(function(e){
					self.selectRating(e);
				});

				$("#submitBtn").click(function(){
					self.submit();
				});
			}
			catch(err){
				$logger.err("init" , err.message);
			}
		};

		this.selectRating = function(e){
			try{
				if(rating != -1){
					$(".ratingBox").eq(rating).removeClass("selectedRating");
				}
				var $element = $(e.target);
				if(!$element.hasClass("ratingBox")){
					$element = $element.parent();
				}

				$element.addClass("selectedRating");
				rating = $element.text();
			}
			catch(err){
				$logger.err("selectRating" , err.message);
			}
		};

		this.getComments = function(){
			try{
				comments = $("#commentBox").val();
			}
			catch(err){
				$logger.err("getComments" , err.message);
			}
		};

		this.validateSubmitRequest = function(){
			try{
				if(rating == -1){
					//popup
					alert("Please select a rating first");
					return false;
				}

				return true;
			}
			catch(err){
				$logger.err("validateSubmitRequest" , err.message);
			}
		}

		this.submit = function(){
			try{
				if(!self.validateSubmitRequest()){
					return;
				}
				var params = {};
				params["rating"] = rating;
				params["comments"] = comments;

				function success(){
					//popup
					alert("Feedback submitted successfully");
				}

				$httpService.saveFeedback(params , success);
			}
			catch(err){
				$logger.err("submit" , err.message);
			}
		};
	}

	return new FeedbackHandler();
})();
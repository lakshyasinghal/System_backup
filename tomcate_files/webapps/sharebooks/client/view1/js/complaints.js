$(document).ready(function(){
	$complaintsHandler.init();
});


$complaintsHandler = (function(){
	var self = null;
	var complaint = "";

	function ComplaintsHandler(){
		this.init = function(){
			try{
				self = $complaintsHandler;
				$("#submitBtn").click(function(){
					self.submit();
				});
			}
			catch(err){
				$logger.err("init" , err.message);
			}
		};

		this.getComplaint = function(){
			try{
				complaint = $("#complaintBox").val();
			}
			catch(err){
				$logger.err("getComplaint" , err.message);
			}
		};

		this.validateSubmitRequest = function(){
			try{
				if(complaint === ""){
					//popup
					alert("Enter your complaint first");
					return false;
				}

				return true;
			}
			catch(err){
				$logger.err("validateSubmitRequest" , err.message);
			}
		};

		this.submit = function(){
			try{
				self.getComplaint();
				if(!self.validateSubmitRequest()){
					return;
				}

				var params = {};
				params["complaint"] = complaint;

				$httpService.saveComplaint(params , function(){
					//popup
					alert("Complaints saved successfully");
				});
			}
			catch(err){
				$logger.err("submit" , err.message);
			}
		};
	}

	return new ComplaintsHandler();
})();
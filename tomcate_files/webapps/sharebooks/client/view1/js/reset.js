$(document).ready(function(){
	try{
		$resetPasswordService.init();
	}
	catch(err){
		$logger.err("ready" , err.message);
	}
});


$resetPasswordService = (function(){
	var self;
	var otpPanelVisible = false;
	var passwordPanelVisible = true;
	var emailId = "";
	var otp = "";
	var timer = "00:00";
	var timeLeft = 0;
	var message1 = "Please enter an email id first.";
	var message2 = "An OTP has been sent to your email id.";
	var message3 = "Passwords do not match";
	var password;
	var timerIntervalId;
	var newPassword;

	function ResetPasswordService(){
		this.init = function(){
			try{
				self = this;
				$("#otpBtn").click(this.sendOTP);
				$("#verifyBtn").click(this.verifyOTP);
				$("#submitBtn").click(this.submit);
			}
			catch(err){
				$logger.err("init" , err.message);
			}
		};

		this.sendOTP = function(){
			try{
				var params = {};
				emailId = $("#emailInput").val();

				(function(){
					$("#messageText").text("");
					$("#otpBtn").blur();
				})();
				

				if(emailId == ""){
					$("#messageText").text(message1);
					return;
				}

				params["emailId"] = emailId;

				function success(response){
					var data = JSON.parse(response);
					if(data.success){
						$("#otpPanel").show();
						self.startTimer();
					}
					else{
						//$logger.reqErr();
					}
				}
				$httpService.sendOTP(params , success);
			}
			catch(err){
				$logger.err("sendOTP" , err.message);
			}
		};

		this.startTimer = function(){
			try{
				timeLeft = 240;

				timerIntervalId = setInterval(function(){
					timeLeft -= 1;
					var mins = new String(Math.floor(timeLeft/60));
					mins = "0" + mins;
					var secs = new String(timeLeft%60);
					if(secs.length == 1){
						secs = "0" + secs;
					}
					timer = mins + ":" + secs;
					$("#timer").text(timer);
					if(timeLeft == 0){
						self.stopTimer();
						return;
					}
				} , 1000);
			}
			catch(err){
				$logger.err("startTimer" , err.message);
			}
		};

		this.stopTimer = function(){
			try{
				clearInterval(timerIntervalId);
			}
			catch(err){
				$logger.err("stopTimer" , err.message);
			}
		};

		this.verifyOTP = function(){
			try{
				var params = {};
				otp = $("#otpInput").val();

				(function(){
					$("#verifyBtn").blur();
				})();

				if(otp == ""){
					//$("#messageText").text(message1);
					return;
				}

				params["otp"] = otp;

				function success(){
					var data = JSON.parse(response);
					if(data.success){
						self.stopTimer();
						$("#passwordPanel").show();
						//self.startTimer();
					}
					else{
						//$logger.reqErr();
					}
				}
				$httpService.verifyOTP(params , success);
			}
			catch(err){
				$logger.err("verifyOTP" , err.message);
			}
		};

		this.submit = function(){
			try{
				$("#submitBtn").blur();
				var passMatch = self.validatePassword();
				if(passMatch == -1){
					return;
				}

				var params = {};
				params["password"] = newPassword;
				params["emailId"] = emailId;
				$httpService.saveNewPassword(params , success);
			}
			catch(err){
				$logger.err("submit" , err.message);
			}
		};

		this.validatePassword = function(){
			try{
				var pwd1 = $("#passwordInput").val();
				var pwd2 = $("#confirmPasswordInput").val();
				$("#pwdMessage").text("");
				$("#pwdMessage").hide();

				if(pwd1 != pwd2){
					$("#pwdMessage").text(message3);
					$("#pwdMessage").show();
					return -1;
				}
				else{
					newPassword = $("#passwordInput").val();
				}

				return 1;
			}
			catch(err){
				$logger.err("validatePassword" , err.message);
			}
		};

	} 

	return new ResetPasswordService();
})();
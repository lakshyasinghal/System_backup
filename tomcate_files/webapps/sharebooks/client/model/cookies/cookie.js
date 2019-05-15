$cookie = (function(){

	function CookiesHandler(){

		this.get = function(cookieName){
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
				$logger.log("Error in get in cookiesHandler - " + err.message);
			}
		};

		this.set = function(cookieName , cookieValue , days , path){
			try{
				if(!days){
					days = 0;
				}
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
				$logger.log("Error in set in cookiesHandler - " + err.message);
			}
		};

		this.delete = function(cookieName){
			try{
				
			}
			catch(err){
				$logger.log("Error in delete in cookiesHandler - " + err.message);
			}
		};
	}

	return new CookiesHandler();
})();

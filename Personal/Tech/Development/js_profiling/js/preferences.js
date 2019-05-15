$(document).ready(function(){
	$preferencesHandler.init();
});



$preferencesHandler = (function(){

	function PreferencesHandler(){
		var preferences = [];
		var minPreferencesNum = 5;
		var selectedPreferencesNum = 0;
		var self = null; 
		var blinkCount = 0;
		var blinkNum = 4;

		this.init = function(){
			try{
				self = this;
				self.getPreferences();
				self.displayPreferences();

				//putting num attr for each preference
				(function(){
					var counter = 1;
					$(".preference").each(function(){
						$(this).attr("num" , counter++);
					});
				})();

				$(".preference img").hide();
				$(".preference").click(self.selectPreference);
				$("#submitBtn").click(function(e){
					$(e.target).blur();
					self.submit();
				});
			}
			catch(err){
				$logger.err("init" , err.message);
			}
		};

		this.getPreferences = function(){
			try{
				function success(response){
					var data = JSON.parse(response);
					var subcategories = data.results;

					for(var i=0,l=subcategories.length ; i<l ; i++){
						var pref = new Object();
						pref["name"] = subcategories[i];
						pref["selected"] = 0;
						preferences.push(pref);
					}
				}
				$httpService.getSubcategories(null , success);
			}
			catch(err){
				$logger.err("getPreferences" , err.message);
			}
		};

		this.displayPreferences = function(){
			try{
				var preferenceTemplate = $templates.preferenceTemplate();
				var html = "";

				$("#preferencePanel").html("");

				for(var i=0,l=preferences.length ; i < l ; i++){
					html +=  $templateManager.getHtmlFromTemplate(preferenceTemplate , preferences[i]);
				}

				$("#preferencePanel").html(html);
			}
			catch(err){
				$logger.err("displayPreferences" , err.message);
			}
		};

		this.selectPreference = function(e){
			try{
				var num = $(e.target).attr("num") - 1;
				var preference = preferences[num];

				if(preference.selected){
					preference.selected = 0;
					selectedPreferencesNum--;
					$("#prefCount").text(selectedPreferencesNum);
					$(".preference img").eq(num).fadeOut(250);
				}
				else{
					preference.selected = 1;
					selectedPreferencesNum++;
					$("#prefCount").text(selectedPreferencesNum);		
					$(".preference img").eq(num).fadeIn(250);
				}
			}
			catch(err){
				$logger.err("selectPreference" , err.message);
			}
		};

		this.blink = function(){
			try{
				if(blinkCount == blinkNum){
					return;
				}
				$("#text2").toggle("fade" , 1000 , function(){
					blinkCount++;
					self.blink();
				});
				
			}
			catch(err){
				$logger.err("blink" , err.message);
			}
		}

		this.validate = function(){
			try{
				if(selectedPreferencesNum >= minPreferencesNum){
					return true;
				}
				else{
					//highlighting the options error
					$("body").animate({scrollTop:0}, '500');
					blinkCount = 0;
					self.blink();
					return false;
				}
			}
			catch(err){
				$logger.err("validate" , err.message);
			}
		};

		this.submit = function(){
			try{
				if(!self.validate()){
					return;
				}

				var params = self.getParams;

				function success(){
					alert("Your preferences have been successfully saved");
				}

				$httpService.savePreferences(params , success);
			}
			catch(err){
				$logger.err("submit" , err.message);
			}
		};

		this.getParams = function(){
			try{
				var params = {};
				var prefNames = [];
				var pref;

				for (var i=0, l= preferences.length ; i < l; i++) {
					pref = preferences[i];
					if(pref.selected){
						prefNames.push(pref["name"]);
					}
				}

				params["preferences"] = prefNames.join();
				return params;
			}
			catch(err){
				$logger.err("getParams" , err.message);
			}
		};
	}

	return new PreferencesHandler();
})();
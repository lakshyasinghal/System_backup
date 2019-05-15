window.onload = function(){
	init();
}


function init(){

}




var windowHandler = {
	init : function(){
		try{
			var self = windowHandler;
			window.addEventListener("click" , self.closeAllOpenPanels);
			//var self = $scope.windowHandler;
			//$(window).click(self.closeAllOpenPanels);
		}
		catch(err){
			$logger.err("windowHandler" , err.message);
		}
	},

	closeAllOpenPanels : function(e){
		try{
			//browsingHandler.closeAll();
			profileHandler.closeAll();
			notificationHandler.closeAll();
		}
		catch(err){
			$logger.err("closeAllOpenPanels" , err.message);
		}
	}
};





var profileHandler = {
	username:"",
	password:"",
	name:"",
	address:"",
	
}
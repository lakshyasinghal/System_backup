window.onload = function(){
	$optionsHandler.init();
};




$optionsHandler = (function(){

	return {
		init : function(){
			try{
				$("#sureBtn").click(function(){
					$pages.feedback();
				});

				$("#laterBtn").click(function(){
					$("#laterModal").modal("show");
				});

				$("#homeBtn").click(function(){
					$pages.home();
				});

				$("#logoutBtn").click(function(){
					
				});
			}
			catch(err){
				$logger.err("init" , err.message);
			}
		}
	}
})();
var loggerSingleton = (function(){
	var instance = null;

	function Logger(){
		this.log = function(message){
			console.log(message);
		};

		this.err = function(functionName , message){
			console.log("Error occurred in " + functionName + "\nError : " + message);
		}
	}


	return {
		instance: function(){
			if(!instance){
				instance = new Logger();
			}
			return instance;
		}
	};
})();

var $logger = loggerSingleton.instance();

////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////

var debuggerSingleton = (function(){
	var instance;

	function Debugger(){
		this.debug = function(message){
			console.log(message);
		};
	}

	return {
		instance: function(){
			if(!instance){
				instance = new Debugger();
			}
			return instance;
		}
	};
})();

var $debugger = debuggerSingleton.instance();

////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////

var $mailLogger = (function(){

	function MailLogger(){
		this.log = function(message){

		};
	}

	return new MailLogger();
})();
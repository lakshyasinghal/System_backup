var objectCreationType = {
	1 : "AjaxResponseObject",
	2 : "InputForm"
};



function Factory(){
	this.create() = function(var obj , var creationType){
		if(creationtype == objectCreationType["1"]){
			this.createFromAjaxResponseObject(obj);
		}
		if(creationtype == objectCreationType["2"]){
			this.createFromInputForm();
		}
	}
	

	this.initDefaults = function(){
		this.id = -1;
		this.creationTime = new Date();
		this.lastModified = new Date();
	}

	//will create corresponding entity object using the properties and object received as argument
	this.createFromAjaxResponseObject = function(obj){
		var properties = this.properties;
		var len = properties.length;
		for(var i=0 ; i<len ; i++){
			this[properties[i]] = obj[properties[i]];
		}
	};

	//BookForm_id , BookForm_userId
	this.createFromInputForm = function(){
		this.initDefaults();
		var constructorName = this.constructorName;
		var formProperties = this.formProperties;
		var len = formProperties.length;
		var prop;
		for(var i=0 ; i<len ; i++){
			prop = formProperties[i];
			this[prop] = $("#" + constructorName + "Form" + "_" + prop);
		}
	};

	this.serialize = function(){
		var serializedStr = "{";
		var properties = this.properties;
		var len = properties.length;
		var prop;
		for(var i=0 ; i<len-1 ; i++){
			prop = properties[i];
			serializedStr += prop + ":" + this[prop] + " , ";
		}
		prop = properties[i];
		serializedStr += prop + ":" + this[prop];
		serializedStr += "}";
	};
}

var $factory = new Factory();

//////////////////////////////////////////////////////////////////







/////////////////////////////////////////////////////////////////

//BookFactory singleton
var bookFactorySingleton = (function(){
	var instance;

	function BookFactory(){
		
	}

	BookFactory.prototype = $factory;

	return {
		instance : function(){
			if(!instance){
				instance = new BookFactory();
			}
			return instance;
		}
	};
}	
})();

var $bookfactory = bookFactorySingleton.instance();
////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////

//UserFactory singleton
var userFactorySingleton = (function(){
	var instance;

	function UserFactory(){

	}

	UserFactory.prototype = $factory;

	return {
		instance : function(){
			if(!instance){
				instance = new UserFactory();
			}
			return instance;
		}
	};

})();

var $userFactory = userFactorySingleton.instance();
///////////////////////////////////////////////////////////////




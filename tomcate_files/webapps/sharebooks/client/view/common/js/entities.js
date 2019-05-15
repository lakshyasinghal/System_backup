function EntityPrototype(){
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

	this.validate = function(){
		var valid = true;
		var properties = this.properties;
		var len = properties.length;
		var prop;
		for(var i=0 ; i<len ; i++){
			prop = properties[i]; 
			if(this[prop] == null || this[prop] == "" || this[prop] == undefined){
				return false;
			}
		}
		return true;
	}
}

//////////////////////////////////////






//////////////////////////////////////

function Entity(){
	
}

Entity.prototype = new EntityPrototype();
Entity.prototype.constructor = Entity;

///////////////////////////////////////






///////////////////////////////////////

function Book(var obj , var creationtype){
	this.create(thing , creationType);
}

Book.prototype = new Entity();
Book.prototype.constructor = Book;
Book.prototype.constructorName = "Book";
Book.prototype.properties = [id , userId , name , authorName , category , subcategory , pages , image , available , buy , rent , buyAmount , rentAmount , creationTime , lastModificationTime];
Book.prototype.formProperties = [name , authorName , category , subcategory , pages , image , available , buy , rent , buyAmount , rentAmount];

///////////////////////////////////////






////////////////////////////////////////

function User(var obj , var creationtype){
	this.create(thing , creationType);
}

////////////////////////////////////////

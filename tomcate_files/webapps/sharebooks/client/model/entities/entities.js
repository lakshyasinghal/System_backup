
function EntityPrototype(){
	
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

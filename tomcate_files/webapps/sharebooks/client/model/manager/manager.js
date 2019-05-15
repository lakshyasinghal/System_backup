function BookManager(){

	this.addBook = function(var formId){
		//getting Book instance 
		var book = $bookFactory.createBookUsingForm(formId);
		//serialized book
		var serBook = book.serialize();
		
		$http.post();
	};

	this.getBooks = function(){

	};
}





function UserManager(){

	this.addUser = function(var formId){

	};



}
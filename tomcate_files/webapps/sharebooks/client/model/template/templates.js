var $templates = (function(){

	var bookTemplate = {
		type : "div",
		class : "book",
		innerHtml : [
			{
				type : "div",
				class : "bookId hidden",
				text : "",
				propName : "id"
			},
			{
				type : "img",
				class : "bookImage",
				width : "100",
				height : "120",
				propName : "image"
			},
			{
				type : "div",
				class : "bookName",
				text : "",
				propName : "name"
			},
			{
				type : "div",
				class : "bookAuthorName",
				text : "",
				propName : "authorName"
			}
		],
		text : ""
	};

	var preferenceTemplate = {
		type : "div",
		class : "preference",
		innerHtml : [
			{
				type : "img",
				class : "tick",
				width : "30",
				height : "30",
				val : "tick.png"
			},
			{
				type : "span",
				class : "prefText",
				text : "",
				propName : "name"
			}
		],
		text : ""
	};


	var resultTemplate = {
		type : "div",
		class : "result",
		innerHtml : [
			{
				type : "div",
				class : "bookInfo",
				innerHtml : [
					{
						type : "div",
						class : "container",
						innerHtml : [
							{
								type : "img",
								width : "130",
								height : "180",
								propName : "book.image"
							},
							{
								type : "div",
								class : "infoPanel",
								innerHtml : [
									{
										type : "div",
										class : "bookName",
										text : "NAME : ",
										propName : "book.name"
									},
									{
										type : "div",
										class : "authorName",
										text : "AUTHOR NAME : ",
										propName : "book.authorName"
									},
									{
										type : "div",
										class : "category",
										text : "CATEGORY : ",
										propName : "book.category"
									},
									{
										type : "div",
										class : "subcategory",
										text : "SUBCATEGORY : ",
										propName : "book.subcategory"
									},
									{
										type : "div",
										class : "pages",
										text : "PAGES : ",
										propName : "book.pages"
									},
									{
										type : "div",
										class : "available",
										text : "AVAILABLE : ",
										propName : "book.available",
										func : function(val){
											var arr = ["NO" , "YES"];
											return arr[val];
										}
									}
								],
								text : ""
							},
							{
								type : "div",
								class : "buttonPanel",
								innerHtml : [
									{
										type : "button",
										class : "btn btn-danger buy",
										text : "Buy"
									},
									{
										type : "button",
										class : "btn btn-danger rent",
										text : "Rent"
									}
								]
							}
						],
						text : ""
					}
				],
				text : ""
			},
			{
				type : "div",
				class : "userInfo",
				innerHtml : [
					{
						type : "div",
						class : "container",
						innerHtml : [
							{
								type : "div",
								class : "infoPanel",
								innerHtml : [
									{
										type : "div",
										class : "username",
										text : "Name : ",
										propName : "user.name"
									},
									{
										type : "div",
										class : "age",
										text : "AGE : ",
										propName : "user.birthday",
										func : function(val){
											return calculateAge(val);
										}
									},
									{
										type : "div",
										class : "address",
										text : "ADDRESS : ",
										propName : "user.address"
									},
									{
										type : "div",
										class : "city",
										text : "CITY : ",
										propName : "user.city"
									},
									{
										type : "div",
										class : "state",
										text : "STATE : ",
										propName : "user.state"
									},
									{
										type : "div",
										class : "pincode",
										text : "PINCODE : ",
										propName : "user.pincode"
									},
									{
										type : "div",
										class : "contactNo",
										text : "CONTACT NO. : ",
										propName : "user.contactNo"																				
									}
								],
								text : "",
							},
							{
								type : "div",
								class : "buttonPanel",
								innerHtml : [
									{
										type : "button",
										class : "btn btn-lg btn-success viewLocBtn",
										text : "View Location On Map"
									}
								],
								text : ""
							}
						],
						text : ""
					}
				],
				text : ""
			}
		],
		text : ""
	};


	return (function(){
		return {
			bookTemplate : function(){
				return bookTemplate;
			},
			preferenceTemplate : function(){
				return preferenceTemplate;
			},
			resultTemplate : function(){
				return resultTemplate;
			}
		}
	})();
})();












var $templateManager = (function(){

	var imagesFolderPath = $global.imagesFP();
	var manager = new Object();
	
	manager.getHtmlFromTemplate = function(template , obj){
		try{
			var self = manager;
			var innerText = "";

			var currHtml = "";
			var type = template.type;

			var innerHtml = "";
			var arr;
			if(template.innerHtml){
				arr = template.innerHtml;
			}
			else{
				arr = [];
			}
			if(arr.length > 0){
				for(var i=0,l=arr.length ; i<l ; i++){
					innerHtml += self.getHtmlFromTemplate(arr[i] , obj);
				}
			} 

			if(type != "img" && template.propName){
				innerText = template.text + self.getPropText(template.propName , obj , template.func);
			}
			else if(template.text){
				innerText = template.text;
			}

			innerText += innerHtml; 			

			switch(type){
				case "div" :
					currHtml += self.getHtmlForDiv(template , innerText , obj);
					break;
				case "span" :
					currHtml += self.getHtmlForSpan(template , innerText , obj);
					break;
				case "button" :
					currHtml += self.getHtmlForButton(template , innerText , obj);
					break;
				case "img" :
					currHtml += self.getHtmlForImage(template , obj);
					break;
				default :
					currHtml += "";
					break;
			}

			return currHtml;
		}
		catch(err){
			console.log("Error in getHtmlFromTemplate - " + err.message);
		}
	},

	manager.getHtmlForDiv = function(template , innerText , obj){
		try{
			var div = "";
			var classVal = template.class;
			var idVal = template.id;
			//var text = template.text;

			div += "<div ";
			if(classVal){
				div += "class=\"" + classVal + "\" ";
			}
			if(idVal){
				div += "id=\"" + idVal + "\"";
			}
			div += ">";

			div += innerText;
			div += "</div>";

			return div;
		}
		catch(err){
			console.log("Error in getHtmlForDiv - " + err.message);
		}
	};

	manager.getHtmlForSpan = function(template , innerText , obj){
		try{
			var span = "";
			var classVal = template.class;
			var idVal = template.id;
			//var text = template.text;

			span += "<span ";
			if(classVal){
				span += "class=\"" + classVal + "\" ";
			}
			if(idVal){
				span += "id=\"" + idVal + "\"";
			}
			span += ">";

			span += innerText;
			span += "</span>";

			return span;
		}
		catch(err){
			console.log("Error in getHtmlForSpan - " + err.message);
		}
	};

	manager.getHtmlForButton = function(template , innerText , obj){
		try{
			var button = "";
			var classVal = template.class;
			var idVal = template.id;
			//var text = template.text;

			button += "<button ";
			if(classVal){
				button += "class=\"" + classVal + "\" ";
			}
			if(idVal){
				button += "id=\"" + idVal + "\"";
			}
			button += ">";

			button += innerText;
			button += "</button>";

			return button;
		}
		catch(err){
			console.log("Error in getHtmlForButton - " + err.message);
		}
	};

	manager.getHtmlForImage = function(template , obj){
		try{
			var img = "";
			var classVal = template.class;
			var idVal = template.id;
			var val;

			if(template.val){
				val = template.val;
			}
			else{
				var tempObj = obj;
				var tokens = [];
				tokens = template.propName.split('.');
				for(var i=0,l=tokens.length ; i<l-1 ; i++){
					tempObj = tempObj[tokens[i]];
				}
				val = tempObj[tokens[i]];
			}

			var src = imagesFolderPath + "/" + val;
			var width = template.width;
			var height = template.height;

			img += "<img ";
			img += "src=\"" + src + "\" ";

			if(classVal){
				img += "class=\"" + classVal + "\" ";
			}
			if(idVal){
				img += "id=\"" + idVal + "\" ";
			}
			if(width){
				img += "width=\"" + width + "\" ";
			}
			if(height){
				img += "height=\"" + height + "\" ";
			}

			img += ">";

			return img;
		}
		catch(err){
			console.log("Error in getHtmlForImage - " + err.message);
		}
	};

	manager.getPropText = function(propName , obj , func){
		try{
			if(!propName){
				return "";
			}
			var tempObj = obj;
			var tokens = [];

			tokens = propName.split('.');
			for(var i=0,l=tokens.length ; i<l-1 ; i++){
				tempObj = tempObj[tokens[i]];
			}

			var val = tempObj[tokens[i]];

			if(func){
				return func(val);
			}
			else{
				return val;
			}
		}
		catch(err){
			console.log("Error in getPropText - " + err.message);
		}
	}

	return manager;

})();

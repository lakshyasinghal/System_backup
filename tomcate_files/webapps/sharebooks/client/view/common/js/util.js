String.prototype.append = function(){
	var len = arguments.length;
	var str = this;
}


function createElement(elemType , attributes , text){
	try{
		var elem = document.createElement(elemType);

		//adding attributes to the element
		if(attributes != null && attributes != undefined){
			for(var attr in attributes){
				elem.setAttribute(attr , attributes[attr]);
			}
		}

		if(text != undefined){
			elem.innerText = text;
		}

		return elem;
	}
	catch(err){
		console.log("Error in createElement in util.js ---- " + err.message);
	}
}




function appendChildren(parent , childArray){
	try{
		for(var i=0 ; i<childArray.length ; i++){
			parent.appendChild(childArray[i]);
		}
	}
	catch(err){
		console.log("Error in appendChildren in util.js ---- " + err.message);
	}
}
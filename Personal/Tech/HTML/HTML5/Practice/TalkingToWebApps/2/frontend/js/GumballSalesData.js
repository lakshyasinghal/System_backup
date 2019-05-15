
window.onload = function(){
	//alert("Got it");
	//getStudentInfoJson();
}


function updateSales(salesData){
	var saleObject;
	var rowString;
	var gumballSalesDataDiv = document.getElementById("gumballSalesData");

	clearSalesData();

	for(var i=0; i<salesData.length; i++){
		saleObject = salesData[i];
		rowString = getRowString();
		gumballSalesDataDiv.appendChild(getDiv(rowString));
	}

	function getRowString(){
		var name = saleObject.name;
		var gumballsSold = saleObject.sales;
		return name + " sold " + gumballsSold + " gumballs";
	}

	function clearSalesData(){
		gumballSalesDataDiv.innerHTML = "";
	}
}


function getDiv(data){
	var newDiv = document.createElement("div");
	newDiv.innerHTML = data;
	return newDiv;
}
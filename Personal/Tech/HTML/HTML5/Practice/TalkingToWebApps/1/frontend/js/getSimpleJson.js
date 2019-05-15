
window.onload = function(){
	//alert("Got it");
	getStudentInfoJson();
}


function getStudentInfoJson(){
	var url = "/talkingtowebapp/DataFiles/StudentInfo.txt";
	var request = new XMLHttpRequest();
	request.open("GET" , url);

	request.onload = function(){
		if(request.status == 200){
			//alert(request.responseText);
			successHandler(request.responseText);
		}
		else{
			failureHandler();
		}
	}

	request.send(null);
}


function successHandler(data){
	console.log("Reached inside success handler");
	//debugger;
	var studentDataDiv = document.getElementById("studentData");

	var parsedData = JSON.parse(data);
	//var parsedData = data;
	var student;
	var info;
	for(var i=0 ; i<parsedData.length ; i++){
		student = parsedData[i];
		info = student.name + "'s roll no is " + student.id;
		studentDataDiv.appendChild(getDiv(info));
	}
}

function getDiv(data){
	var newDiv = document.createElement("div");
	newDiv.innerHTML = data;
	return newDiv;
}


function failureHandler(){
	var div = document.getElementById("studentData");
	div.innerHTML = "";
	div.innerHTML = "Something is wrong";
}
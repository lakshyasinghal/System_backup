var fs = require("fs");
var data = fs.readFile('content.txt',function(err,data){
	if (err) return console.error(err);
   	console.log(data.toString());	
});

console.log("Program ended");

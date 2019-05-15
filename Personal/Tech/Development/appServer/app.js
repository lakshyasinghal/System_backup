const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.post("/api/login",function(req,res){
	console.log("Request received");
	console.log("Request url =>",req.headers.host);
	console.log("Headers =>",req.headers);
	console.log("Request body =>",req.body);
	console.log("Request query =>",req.query);
	//console.log("Request =>",req);

	res.status(200).json({message:"Hurray"});
	//res.json({message:"requet received successfully"});
});


app.get("/api/login",function(req,res){
	console.log("Request received");
	console.log("Request url =>",req.originalurl);
	console.log("Headers =>",req.headers);
	console.log("Request body =>",req.body);
	console.log("Request query =>",req.query);
	//console.log("Request =>",req);

	res.status(200).json({message:"Hurray"});
	//res.json({message:"requet received successfully"});
});

app.get("*",function(req,res){
	
});



app.listen(port , function(){
	console.log("Application started on port ",port);
})
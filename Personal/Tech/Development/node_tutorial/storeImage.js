var http = require("http");
const { parse } = require('querystring');


const FORM_URLENCODED = 'application/x-www-form-urlencoded';
const JSON_CONTENT = 'application/json';

http.createServer(function (request, response) {

	console.log("Request breakup ---> ");
	console.log("request method => ", request.method);
	console.log("request headers => ", request.headers);
	
	//console.log('request params => ', request.params);
	const content_type = request.headers['content-type'];

	var body = '';
	request.on('data' , chunk => {
		body += chunk.toString();
	});
	request.on('end' , () => {
		if(content_type == FORM_URLENCODED){
			console.log("Form data");
			console.log("request body => ", parse(body));
		}
		else if(content_type == JSON_CONTENT){
			console.log("Json data");
			console.log("request body => ", JSON.parse(body));
		}
	});

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as "Hello World"
   response.end('<h4>Request was analyzed successfully</h4>');
}).listen(8070);

// Console will print the message
console.log('Server running at http://127.0.0.1:8070/');
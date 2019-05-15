const express = require('express');
const multer = require('multer');
const path = require("path");

const upload = multer({
  dest: 'uploads/' // this saves your file into a directory called "uploads"
}); 

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// It's very crucial that the file name matches the name attribute in your html
app.post('/', upload.single('file-to-upload'), (req, res) => {
  res.redirect('/');
});

app.get('/photo',function(req,res){
	res.sendFile(path.join(__dirname + "/uploads/photo.jpeg"));
});

app.listen(3000);
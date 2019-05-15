var app       =     require("express")();
var http      =     require('http').Server(app);
var io        =     require("socket.io")(http);


app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
});

/*  This is auto initiated event when Client connects to Your Machien.  */

io.on('connection',function(socket){  
    console.log("A user is connected");
    socket.on('status added',function(status){
      add_status(status,function(res){
        if(res){
        	console.log("Emitting event.");
            io.emit('refresh feed',status);
        } else {
            io.emit('error');
        }
      });
    });
});

var add_status = function (status,callback) {
    callback(true);
}

http.listen(3000,function(){
    console.log("Listening on 3000");
});
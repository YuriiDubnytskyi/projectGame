        
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/indexdemo.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('up', function(msg){
    io.emit('up', msg);
  });

  socket.on('down', function(msg){
    io.emit('down', msg);
  });

  socket.on('left', function(msg){
    io.emit('left', msg);
  });

  socket.on('right', function(msg){
    io.emit('right', msg);
  });


});



http.listen(port, function(){
  console.log('listening on *:' + port);
});
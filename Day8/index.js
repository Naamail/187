var http = require('http');
var fs = require('fs');
var port = 3030;

http.createServer((req, res)=> {
    console.log("in create server");
    fs.readFile('index.html', function(err, data){
        console.log("in fs.readfile");
        res.write(data);
        return res.end();
    });
    //res.write('Hello server');
    
}).listen(port, console.log("server in running on port " + port));






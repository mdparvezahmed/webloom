const http = require("http");


const server = http.createServer((req, res)=>{
    res.writeHead(200,{'content-type': 'text/plain'});
    res.end("this is comming from web server")
});

server.listen(8000, ()=>{
    console.log("server listen post 8000");
});

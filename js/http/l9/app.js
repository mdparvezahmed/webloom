const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'});
    const filepath = __dirname+"/index.html";
    const dirpath = path.join(__dirname, "index.html");
    const htmlcontent = fs.readFileSync(dirpath);

    res.end(htmlcontent);
});


server.listen(3000);
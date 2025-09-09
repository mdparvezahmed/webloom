const http = require("http");

const server = http.createServer((req, res) => {
    // if (req.url === "/") {
    //     res.writeHead(200, { 'content-type': 'text/plain' });
    //     res.end("Home");
    // }
    // else if(req.url === "/api/user") {
    //     const user = {
    //         name: "sam",
    //         age: 15,
    //         email: "sam@sami.com"
    //     }
    //     const data = JSON.stringify(user);
    //     console.log(data);
    //     res.writeHead(200, { 'content-type': 'application/jason' });
    //     res.end(data);
    // }
    // else if(req.url==="/login"){
    //     res.writeHead(200, { 'content-type': 'text/plain' });
    //     res.end("login success");
    // }


    //handeling post method
    //get post delete put patch
    if (req.method === "POST" && req.url === "/submit") {
        let body = "";
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log(JSON.parse(body));
            res.writeHead(200, { 'content-type': 'application/json' });
            res.end(JSON.stringify({ success: true, message: "account Created" }))
        });
    }
    else {
        res.writeHead(404, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: "not found" }))
    }


});


server.listen(8000, () => {
    console.log("server listen at port 8000");
})
const res =  require("./response.json")
const http = require("http"); // we did not to install this dependencies
const e = require("express");

const server= http.createServer((request , response) => {
    console.log('server started');
    if(request.url==='/'){
    response.writeHead(200,{"Content-Type":"application/json"})
    response.write("<h1>Currency Database</h1>")
    response.end()
    }else if(request.url==="/currencies"){
        response.writeHead(200,{"Content-Type":"application/json"})
        response.write(JSON.stringify(res));
        response.end()
    }else{
        response.writeHead(404);
        
        response.end();
    }
})

server.listen(8082, ()=>{
    console.log("listening to 8082");
})


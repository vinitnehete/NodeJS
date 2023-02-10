
const http = require("http") // we did not to install this dependencies

const server= http.createServer((request , response) => {
    console.log('server started');
    if(request.url==='/home'){
    response.writeHead(200,{"Content-Type":"application/json"})
    response.write("Hello from server")
    response.end()
    }else{
        response.writeHead(200,{"Content-Type":"application/json"})
        response.write("Not Invalid Api")
        response.end()
    }
})

server.listen(8082, ()=>{
    console.log("listening to 8082");
})


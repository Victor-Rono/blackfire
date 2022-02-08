const http = require("http");

const port = 3000;

const server = http.createServer((req, res)=>{


    switch (req.url) {
        
        case "/":
        res.end("Welcome Home")           
        break;

        case "/about":
        for(let i = 0; i <= 1; i++){

          }  

        break;

        default:
            break;
    }

    res.end();
});

server.listen(port,()=>{
    console.log("listerning on port "+ port)
});
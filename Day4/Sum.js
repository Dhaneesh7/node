 const http = require('http');
const sum=require('./sum');
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        
    }

    
    let num1 = parseInt(req.url.slice(req.url.indexOf("=") + 1, req.url.indexOf("&")));
    let num2 = parseInt(req.url.slice(req.url.lastIndexOf("=") + 1));

    
    
    let result =sum.sum(10,20)

    
    res.write("sum :",result);
    res.end(`Result: ${result}`);
}).listen(4000);

   const http = require('http');
 
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        
    }

    else {
        let num1 = req.url.slice(req.url.indexOf("=") + 1,req.url.indexof("&")-1);
      let num2=req.url.slice(req.url.
        
        res.write(result);
        res.end(result);
    }
}).listen(4000);

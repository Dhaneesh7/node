 const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        
    }

    else {
        let num = req.url.slice(req.url.indexOf("=") + 1);
        let square = num * num;

        res.write(`Square of ${num} is ${square}`);
        res.end(`Square of ${num} is ${square}`);
    }
}).listen(4000);

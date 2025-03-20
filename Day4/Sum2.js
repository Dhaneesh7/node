 const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        
    }

   //  const urls= req.url.slice(1); 

     const numbers = req.url.slice(1).split("&"); 

    // Extract values using split("=")
    const num1 = parseInt(numbers[0].split("=")[1], 10);
    const num2 = parseInt(numbers[1].split("=")[1], 10); 

    const result = num1 + num2; 
    
    res.write("sum:", result);
    res.end(`Result: ${result}`);
}).listen(4000);

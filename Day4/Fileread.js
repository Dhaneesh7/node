const http = require("http");
const fs = require("fs");
let users = [ ]; 
filename="db/data.txt";
encoding="utf-8";
const server = http.createServer((req, res) => {


    if (req.url === "/favicon.ico") {

    }

    // **GET all users**
    if (req.url.includes("/getAllUsers")) {

const params = req.url.split("?")[1].split("&");
        const pageNumber = params[0].split("=")[1];
        const count = parseInt(params[1].split("=")[1]);
for(i=(pageNumber-1)*count;i<pagenumber*count;i++)
{
res.write(JSON.stringify({ Users[i]});
}
let files = fs.readFile(filename,encoding);
files.then{(data)=>{
console.log(data);
}

}.catch(err){
console.log("error:",err);
}. finally {}

res.end();
    }

    


    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Invalid request" }));
    }
});

// Start the server on port 4000
server.listen(4000)￼Enter

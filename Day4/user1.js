const http = require("http");

let users = []; // Array to store user names

const server = http.createServer((req, res) => {
    

    if (req.url === "/favicon.ico") {
        
    }

    // **GET all users**
    if (req.url.includes("get")) {
        res.write(users);
        res.end(JSON.stringify({ users }));
    }

    // **EDIT a user name**
    else if (req.url.includes("edit")) {
        const params = req.url.split("?")[1].split("&");
        const name = params[0].split("=")[1];
        const index = parseInt(params[1].split("=")[1], 10);

        if (index >= 0 && index < users.length) {
            users[index] = name;
            res.write("user updated);
            res.end(JSON.stringify({ message: "User updated", users }));
        } else {
            res.write("invalid index");
            res.end(JSON.stringify({ message: "Invalid index" }));
        }
    }

    // **INSERT a new user**
    else if (req.url.includes("insert")) {
        const params = req.url.split("?")[1].split("&");
        const name = params[0].split("=")[1];

        users.push(name);
        res.write("users added");
        res.end(JSON.stringify({ message: "User added", users }));
    }

    // **DELETE a user**
    else if (req.url.includes("delete")) {
        const index = parseInt(req.url.split("?")[1].split("=")[1], 10);

        if (index >= 0 && index < users.length) {
            users.splice(index, 1);
            res.writeHead("user deleted");
            res.end(JSON.stringify({ message: "User deleted", users }));
        } else {
            res.writeHead(400);
            res.end(JSON.stringify({ message: "Invalid index" }));
        }
    }

    // **Handle invalid routes**
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Invalid request" }));
    }
});

// Start the server on port 4000
server.listen(4000);

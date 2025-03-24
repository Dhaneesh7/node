const http = require("http");

let users = [
{

}
{

}
]; 

const server = http.createServer((req, res) => {


    if (req.url === "/favicon.ico") {

    }

    // **GET all users**
    if (req.url.includes("/getAllUsers")) {
for(i=0;i<users.length;i++){

        res.write(users[i]);
        res.end(JSON.stringify({ users }));
}
    }

    // **EDIT a user name**
    else if (req.url.includes("/updateUser")) {
        const params = req.url.split("?")[1].split("&");
        const name = params[0].split("=")[1];
        const age = params[1].split("=")[1];
         
        const place = params[2].split("=")[1];

        const oldname = params[3].split("=")[1];

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
    else if (req.url.includes("/insertUser")) {
        const params = req.url.split("?")[1].split("&");
        const name = params[0].split("=")[1];
const age = params[1].split("=")[1];

const place = params[2].split("=")[1];


        users.push({
name:name,
age:age,
place:place
}
);
        res.write("users added");
        res.end(JSON.stringify({ message: "User added", users }));
    }

    // **DELETE a user**
    else if (req.url.includes("/deleteUser")) {
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

else if(req.url.includes("/getTotalUsers")){

}

else if(req.url.includes("/getFirstUser")){

}

else if(req.url.includes("/getLastUser")){

}

else if(req.url.includes("/getUsersAt")){

}

else if(req.url.includes("/getUserByName")){

}
    // **Handle invalid routes**
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Invalid request" }));
    }
});

// Start the server on port 4000
server.listen(4000);
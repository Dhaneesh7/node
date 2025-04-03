const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

let students = [
    {
        id: 1,
        name: "sonu",
        age: 22,
        mark: 33,
        email: "sonu9@gmail.com"
    }
];

// Get all users
app.get("/getuser", (req, res) => {
    res.json(students);
});


app.post("/getuser", (req, res) => {
    const { name, age, mark, email } = req.body;

    
    if (!name || !age || !mark || !email) {
        return res.json({ message: "All fields (name, age, mark, email) are required." });
    }

    
    const emailTaken = students.some(student => student.email === email);
    if (emailTaken) {
        return res.json({ message: "Email already taken." });
    }

    
    let id = getNewUserId();

    const newUser = {
        id: id,
        name,
        age,
        mark,
        email
    };

    students.push(newUser);
    res.json({ message: "Student added:", newUser });
});


app.delete("/deleteuser", (req, res) => {
    const { id } = req.body;  

    let index = students.findIndex(student => student.id === id);
    if (index === -1) {
        return res.json({ message: "Student not found." });
    } else {
        students.splice(index, 1);
        return res.json({ message: "Student deleted." });
    }
});


app.delete("/deletealluser", (req, res) => {
    students = [];
    res.json({ message: "All users deleted." });
});


function getNewUserId() {
    let id = -1;
    if (students.length > 0) {
        id = students[students.length - 1].id + 1;
    } else {
        id = 1;
    }
    console.log("Newly generated ID is", id);
    return id;
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

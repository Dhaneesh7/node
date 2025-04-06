const express = require("express");
const {checkStudent}=require("./studentck");
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
const studentExists = checkStudent(name, email);
    if (studentExists) {
        return res.json({ message: "A student with this name or email already exists." });
    }

    const validation = validateStudent(name, age, mark, email);

    if (!validation.status) {
        return res.json({ message: validation.error });
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
app.get("/getuser/startsWith", (req, res) => {
    const letter = req.query.letter;
    if (!letter) {
        return res.json({ message: "Please provide a letter to search." });
    }
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().startsWith(letter.toLowerCase())
    );
    res.json(filteredStudents);
});
app.get("/getParticularStudent", (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.json({ message: "Name parameter is required." });
    }
    const student = students.find(student => student.name.toLowerCase() === name.toLowerCase());
    if (student) {
        res.json(student);
    } else {
        res.json({ message: "Student not found." });
    }
});
app.get("/getAllStudentNames", (req, res) => {
    const studentNames = students.map(student => student.name);
    res.json(studentNames);
});
app.get("/getAverageMarks", (req, res) => {
    const totalMarks = students.reduce((sum, student) => sum + student.mark, 0);
    const average = totalMarks / students.length;
    res.json({ averageMarks: average });
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

function validateStudent(name, age, mark, email) {
    
    if (!name || name.length < 3) {
        return { status: false, error: "Name should be at least 3 letters." };
    }

    
    if (typeof age !== "number" || age < 5 || age > 18) {
        return { status: false, error: "Age should be a number and between 5 to 18." };
    }

    
    if (typeof mark !== "number" || mark < 0 || mark > 50) {
        return { status: false, error: "Mark should be a number and between 0 to 50." };
    }

    

    return { status: true, error: "" };
}
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

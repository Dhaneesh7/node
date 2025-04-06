

let students = [
    {
        id: 1,
        name: "sonu",
        age: 22,
        mark: 33,
        email: "sonu9@gmail.com"
    }
];

function checkStudent(name, email) {
    return students.some(student => 
        student.name.toLowerCase() === name.toLowerCase() || student.email.toLowerCase() === email.toLowerCase()
    );
}

module.exports = { checkStudent };

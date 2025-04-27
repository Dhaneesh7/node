
let students = [];

exports.getAllStudents = (req, res) => {
  res.json(students);
};

exports.createStudent = (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).json(student);
};

exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  students[id] = { ...students[id], ...updateData };
  res.json(students[id]);
};

exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  students.splice(id, 1);
  res.json({ message: 'Student deleted' });
};

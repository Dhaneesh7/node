const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const url = "mongodb://localhost:27017/";
const dbName = "mydb";


function connectAndRun() {
  MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    const dbo = client.db(dbName);
    console.log("Connected to DB");

    

    
    function createStudentCollection() {
      dbo.createCollection("student", function (err, res) {
        if (err) throw err;
        console.log("Student collection created!");
        client.close();
      });
    }

    
    function insertOneStudent() {
      const student = { name: "John", age: 21, course: "Physics" };
      dbo.collection("student").insertOne(student, function (err, res) {
        if (err) throw err;
        console.log("1 student inserted");
        client.close();
      });
    }

    
    function insertManyStudents() {
     /* const students = [
        { name: "Alice", age: 22, course: "Chemistry" },
        { name: "Bob", age: 23, course: "Math" }
      ];
     */
students=req.body;
 dbo.collection("student").insertMany(students, function (err, res) {
        if (err) throw err;
       
res.json({ success: true, message: ` students inserted` });
 console.log(`${res.insertedCount} students inserted`);
        client.close();
      });
    }

   
    function findAllStudents() {
    let studentall=dbo.collection("student").find({}).toArray(function (err, result) {
        if (err) throw err;
/*res.json({
            success: true,
            payload: studentall,
            message: 'data fetch successful'
        });*/
        console.log("All students:", result);
        client.close();
      });
    }

    
    function findStudentsByCourse(courseName) {
      dbo.collection("student").find({ course: courseName }).toArray(function (err, result) {
        if (err) throw err;
        console.log(`Students in ${courseName}:`, result);
        client.close();
      });
    }

    
    function updateStudentByName(name) {
      const query = { name };
      const update = { $set: { age: 25 } };
      dbo.collection("student").updateOne(query, update, function (err, res) {
        if (err) throw err;
        console.log("1 student updated");
        client.close();
      });
    }

  
    function updateStudentById(id) {
      const query = { _id: ObjectId(id) };
      const update = { $set: { course: "Biology" } };
      dbo.collection("student").updateOne(query, update, function (err, res) {
        if (err) throw err;
        console.log("Student updated by ID");
        client.close();
      });
    }

    
    function deleteOneStudentByName(name) {
      const query = { name };
      dbo.collection("student").findOne(query, function (err, student) {
        if (err) throw err;
        if (student) {
          dbo.collection("student").deleteOne(query, function (err, res) {
            if (err) throw err;
            console.log("Deleted student:", student.name);
            client.close();
          });
        } else {
          console.log("Student not found");
          client.close();
        }
      });
    }

    
    function deleteStudentsByAge(age) {
      const query = { age };
      dbo.collection("student").find(query).toArray(function (err, students) {
        if (err) throw err;
        const names = students.map(s => s.name);
        dbo.collection("student").deleteMany(query, function (err, res) {
          if (err) throw err;
          console.log(`Deleted ${res.deletedCount} students:`, names);
          client.close();
        });
      });
    }

    

    // createStudentCollection();
    // insertOneStudent();
    // insertManyStudents();
    // findAllStudents();
    // findStudentsByCourse("Math");
    // updateStudentByName("John");
    // updateStudentById("2");
    // deleteOneStudentByName("Bob");
    // deleteStudentsByAge(22);

  });
}


connectAndRun();

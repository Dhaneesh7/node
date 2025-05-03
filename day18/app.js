const express = require('express');
const app = express();
const connectDB = require('./config/db'); // Mongoose connection
const teacherRoutes = require('./routes/teacherRoutes');
const path = require('path');


connectDB();

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));



app.use(express.json())
app.use('/teachers', teacherRoutes);


app.listen(3000, () => console.log("Server running on port 3000"));

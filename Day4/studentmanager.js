const express=require("express");
const app=express();
const port=3000;

let students=[
{
    name:sonu,
    age:22,
    mark:33,
    email:sonu9@gmail.com
}
];

app.get("/getuser",(req,res)=>{
  
    res.json(students)
});
app.post("/getuser",(req,res)=>{

const {name,age,mark,email} = req.body;
if(!name,!age,!mark,!email){
 res.json({ message: "fields are empty" });
}

const emailTaken = students.some(student => student.email === email);
if (emailTaken) {
     res.json({ message: "Email already taken." });
}


let id=getNewUserId()
let newUser={
id:id,
name,
age,
mark,
email
}

    users.push(newUser);
    res.json({message: "student added:",newUser})


})
app.delete("/deleteuser",(req,res)=>{
const id=req.body;
let index=users.Indexof(id);
if(index==-1){
users.splice(index,1);
res.json({message: "student deleted:"})
}
else{

res.json({message: "student doesn't found"})
}
    
})
app.delete("/deletealluser",(req,res)=>{
  users=[];

    res.json({message: "all users deleted:"})
});
function getNewUserId() {
  let id = -1;
  if(students.length>0) {
    id = students[students.length - 1].id + 1
  } else {
    id = 1;
  }
  console.log("newly generated ID is ", id);
  return id;
}
app.listen(4000)

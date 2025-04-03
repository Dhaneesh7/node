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
const newUser = req.body;
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
app.listen(4000)

const express=require("express");
const app=express();
const port=3000;

let users=[
{
    name:sonu,
    age:22,
    mark:33
}
];

app.get("/getuser",(req,res)=>{
  
    res.json(users)
});
app.post("/getuser",(req,res)=>{
const newUser = req.body;
    users.push(newUser);
    res.json({message: "user added:",newUser})
})
app.delete("/deleteuser",(req,res)=>{
const name=req.body;
let index=users.Indexof(name);
if(index==-1){
users.splice(index,1);
res.json({message: "user deleted:"})
}
    
})

app.listen(4000)

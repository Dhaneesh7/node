const express=require("express");
const app =express();
const port=3001;
app.get('/getProfile',(req,res)=>   {res.send({name:'dhaneesh'});
});
app.listen(port,()=>{
    console.log("run")
})

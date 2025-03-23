 const http = require('http');
const user=[];
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {

    }
else if (req.url.includes("get")){

 /*  //  const urls= req.url.slice(1); 
     const numbers = req.url.slice(1).split("&"); 

    // Extract values using split("=")
    const num1 = parseInt(numbers[0].split("=")[1], 10);
    const num2 = parseInt(numbers[1].split("=")[1], 10); 

    const result = num1 + num2; 
*/
    res.write("user:", user);
    res.end();}
else if(req.url.includes("edit")){
const name=req.url.split("&")[0].split("=")[1];
const in=req.url.split("&")[1].split("=")[1];
user.forEach((item,index)=>{
if(index==in){
item=name;

}

}
}
else if(req.url.includes("insert")){

const name=req.url.split("&")[0].split("=")[1];
const in=req.url.split("&")[1].split("=")[1];
user.forEach((item,index)=>{
if(index==in){
user=user+name;

}

}
}
else if(req.url.includes("delete")){
const in=req.url.split("&")[0].split("=")[1];
user.forEach((item,index)=>{
if(in==index)
{
item="";


}
else{}


}).listen(4000);
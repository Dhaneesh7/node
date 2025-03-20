const http=require('http');
http.createServer(req,res)=>{
if(req.url === '/favicon.ico'){
}
  else{
    var num=req.url.slice(req.url.indexof("=")+1,req.url.length-1)
    square=num*num;
    res.write("square of ",num,"is",square);
  }
}).listen('4000');

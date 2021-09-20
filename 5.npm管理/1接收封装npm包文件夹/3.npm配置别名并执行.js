//简单的http服务

require("http")
.createServer((req,res)=>{
    res.end("hello npm");
})
.listen(80);
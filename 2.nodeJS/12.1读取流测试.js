const fs = require("fs");
let rs = fs.createReadStream("1.NodeJS简介.doc");
rs.on("open",function(){
    console.log("1");
});
rs.on("data",(chunk)=>{
    console.log(chunk.toString());
})
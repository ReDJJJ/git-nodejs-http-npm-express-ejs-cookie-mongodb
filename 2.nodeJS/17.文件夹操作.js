//以往都是针对单个文件操作,以下来进行针对文件夹的操作
// 三个操作: 创建文件夹 读取文件夹 删除文件夹  
const fs = require('fs');


//创建文件夹  fs.mkdir(path,callback(err));
fs.mkdir("./17待删除的文件夹",err =>{
    if(err) throw err;
    console.log("mkdir方法创建文件夹成功");
});

//写入文件
fs.writeFileSync("./mkdir创建的文件夹/index.html","<html><html>",{flag:"a",mode:0o666});
//写入文件的第三个参数配置对象中的mode属性一定要用八进制0o;否则无法正常识别创建完文件后不可读不可写;

//读取文件夹
//读取文件夹读取的是该文件夹内文件列表信息;
//fs.readdir(path,callback(err,files)); 其中err为错误对象,files是存储文件列表的数组
//注意,readdir回调函数内有第二个参数files,并且readdir这个方法名全部小写
fs.readdir('./mkdir创建的文件夹',(err,files)=>{
    if(err) throw err;
    console.log(files);
});
fs.readdir('../nodeJS',(err,files)=>{
    if(err) throw err;
    console.log(files);
});

//删除文件夹
//fs.rmdir("path",[配置对象],callback(err));
fs.rmdir('./17待删除的文件夹',err=>{
    if(err) throw err;
    console.log("删除成功!");
});

//注意,在不设置rmdir的[配置对象]参数的时候,rmdir只能删除空文件夹,不能进行递归删除;
//需要设置[配置对象]中的recursive:true 才会进行递归删除
fs.mkdir("./文件夹",err=>{
    if(err) throw err;
});

fs.writeFileSync('./文件夹/index.txt',"");
// fs.rmdir("./文件夹",err=>{
//     if(err) throw err; //报错 directory not empty 文件夹不为空
// });
fs.rmdir("./文件夹",{recursive:true},err=>{
    if(err) throw err; //报错 directory not empty 文件夹不为空
    console.log("递归删除成功");
});






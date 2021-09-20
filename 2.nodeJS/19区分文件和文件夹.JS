//不可以用名字来区分文件和文件夹,因为可以给文件夹起名:index.html
//fs文件系统中有 stat方法,stat方法中的回调函数,第二个参数是stats对象,该对象集成了很多方法;
//其中.isDirectory .isFile 两个可以区分文件的分类;
//isDirectory和isFile无需参数,直接返回stat方法第一个参数中的文件的类型判断的布尔值;

//语法 fs.stat('path',(err,stats)=>{
//      
// })

const fs = require('fs');
fs.stat(__dirname+"/2.hello.js",(err,stats)=>{
    console.log(`是否为文件夹`+stats.isDirectory());
    console.log(`是否为文件`+stats.isFile());
});

//回调函数有两个参数的 目前有 查看文件夹和区分文件与文件夹两个操作
// 一个是(err,files) 一个是(err,stats); 且stats是一个对象,集合了许多的方法(isDirectory()和isFile());
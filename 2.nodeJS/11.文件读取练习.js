// 重点思路: 理解JSON格式的内容在js中流转的渠道  JSON串文件 => js字符串 => js对象

let Actions = require('fs');
Actions.readFile("C:\\Windows\\Boot\\BootDebuggerFiles.ini", { flag: "r" }, function (err, data) {
    if(err) console.log(err);
    //新关键字throw 抛出抛出会结束回调函数的执行 (此功能类似于return)
    console.log(`读取成功`);
    console.log(data);
    console.log(data.toString());
});

// 此处双\\ 是转义特殊字符\字符
let fs = require('fs');
let result = fs.readFileSync("C:/Windows/addins/FXSEXT.ecf",{flag:"r",mode:0o777});
console.log(result.toString());



// 需求 读取JSON文件,并将结果转换成JS中的对象
// 思路:利用读取API,将读取到的buffer对象tostring化变成JSON格式字符串,然后利用JSON.parse方法将json字符串解析成js中的对象
    let FS = require("fs");
    let jsonstr = FS.readFileSync("./11.JSON文件.json",{flag: "r"}); 
    //同步读取API,若出现错误则抛出错误   
    let obj = JSON.parse(jsonstr.toString());
    console.log(obj);

   
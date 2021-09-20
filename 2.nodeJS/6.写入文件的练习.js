// 写入文件练习
// 将js对象数据保存 D:/data.txt当中

let data = {
    id:4860,
    type:"a",
    age:100,
};

let datastr = JSON.stringify(data); //编程js格式的字符串

let obj = {
    flag:'a',
    mode:0o777, //给满权限
};

const fs = require('fs');
fs.writeFile('d:/data.json',datastr+"\n",obj,(err)=>{
    if(err){
        console.log("写入失败,原因为:"+err);
    }else{
        console.log("写入成功");
    }
});
//data对象直接作为写入内容()会报错。而老师的是写入[object Object]很明显是对象类型转换成基本数字类型了.
//利用数组对象重写的toString或者JSON库stringify和parse 
//将js对象转化为字符串再作为写入内容参数

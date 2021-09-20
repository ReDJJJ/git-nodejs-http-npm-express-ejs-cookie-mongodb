//移动文件和重命名
//移动文件和重命名逻辑 和 linux中mv命令逻辑大体一致
//语法
    //(文件系统对象).rename("旧URL","新URL",callback(只有一个参数err))

//单纯重命名  地址不变,只改变文件名
const fs = require('fs');
// fs.rename("./15.改名前.txt",'./15.改名后.txt',err=>{
//     if(err) throw err;
//     console.log("重命名成功");
// });

            //第二次抛出的问题:no such file or directiory(没有此文件)
            // PS C:\Users\AIR15 2021\Desktop\前后端交互阶段\nodeJS> node .\15.移动文件与重命名.js
            // C:\Users\AIR15 2021\Desktop\前后端交互阶段\nodeJS\15.移动文件与重命名.js:8
            //     if(err) throw err;
            //             ^

            // [Error: ENOENT: no such file or directory, rename 'C:\Users\AIR15 2021\Desktop\前后端交互阶段\nodeJS\15.改名前.txt' -> 'C:\Users\AIR15 2021\Desktop\前后端交互阶段\nodeJS\15.改名后.txt'] {
            //   errno: -4058,
            //   code: 'ENOENT',
            //   syscall: 'rename',
            //   path: 'C:\\Users\\AIR15 2021\\Desktop\\前后端交互阶段\\nodeJS\\15.改名前.txt',


//单纯移动  只改变地址,不改变名称
// fs.rename('./15.移动源文件.txt','./15.移动目的地/15.移动源文件.txt' ,err=>{
//     if(err) throw err;
//     console.log("移动成功");
// });

//移动且改名 
fs.rename('./15.移动源文件.txt','./15.移动目的地/AAA.txt',function(err){
    if(err) throw err;
    console.log("重命名且移动成功\n");
});

// 重命名rename api也有同步版本(舍弃了回调函数) renameSync("old URL","new URL");
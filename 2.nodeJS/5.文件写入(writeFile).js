//**  重点 文件系统 file system
//fs是Nodejs中的内置模块,可以对计算机中的文件进行增删查改等操作

//Nodejs中模块的引入  require函数
//语法 :  let/var/const 变量名 = require('模块名');

//对计算机文件进行操作,首先要引入fs文件系统模块 
const fs =  require('fs');

//文件写入fs.writeFile(file,data,[object],callback)
    // file:文件名或者文件路径
    // data:写入文件的内容 (格式必须是字符串或者buffer)
    // [objcect] 一个配置对象{}
            // options <Object> | <string>
            // encoding <string> | <null> 默认值: 'utf8'  (字符集选择)
            // mode <integer> 默认值: 0o666  (权限选择)
            // flag <string> 请参阅对文件系统 flags 的支持。 默认值: 'w'。 (writeFile函数默认值为w)
            // signal <AbortSignal> 允许中止正在进行的写入文件

    // callback:回调函数 (无论如何都会执行的函数)
//注意:和linux中cat一致,fs.writeFile若文件不存在,则会创建文件



fs.writeFile('./5.index.html','fs.writeFile的第二个参数\n',{flag:'a'},function(err){ 
    //err是一个错误对象,若写入时发生错误,错误信息就会存入err
    //若没有发生错误,err = null;
    if(err){
        console.log('写入失败');
        console.log('错误为'+err);
    }else{
        console.log('写入成功');
    }
});
//注意 每一次的writeFile写入都会抹掉原来的内容,再进行写入
//若想进行追加内容,就需要用到第三个参数[object];
//fs.writeFile的配置对象(第三个参数)
        // {
        //     flag = 'r' / 'w' / 'a'  read只读  wirte可写 append追加
        //     mode = 0o666(默认值) //类比linux的管理权限
        // }

//0o666 三位数 分别代表 所有者权限 所属组权限 其他人权限
//      个位为可执行 十位为可写 百位为可读 
// 6 = 110  可读可写不可执行 777为可读可写全可执行 

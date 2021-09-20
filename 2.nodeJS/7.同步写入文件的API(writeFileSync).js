const fs = require('fs');

//异步API (简单文件写入)
fs.writeFile('./5.index.html','异步API',{flag:'a'},function(err){
    if(err) console.log("写入失败");
    else console.log("写入成功");
});

//同步API 
fs.writeFileSync('./5.index.html','同步API writeFileSync',{flag:'a'});

// 同步和异步区别 同步api writeFileSync() 和 异步api writeFile() 
        //语法：
            //同步api的参数中没有回调函数,而异步函数中回调函数是异步代码

//  !!同步api和异步api的选择
    // 如果需要做服务,需要使用异步api(使用同步会发生阻塞)
    // 如果做文件相关的处理,可以使用同步api(简单写入,处理)

// 目前遇到一种回调函数很特殊: foreach 的回调函数, 此回调函数是同步代码
// 如何判断回到的执行是同步还是异步,回调中打印,回调后打印,看打印的顺序

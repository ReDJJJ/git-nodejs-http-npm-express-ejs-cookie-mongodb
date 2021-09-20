//文件的读取 

// 1 引入文件系统
    const fs = require("fs");
// 2 调用fs.readFile()方法读取文件(异步读取)
    fs.readFile("./10.css",{flag:'r'},function(err,data){
        //读取失败,错误信息会保存至err,读取的数据会保存给data形参(以buffer对象格式)
        if(err){
            console.log("读取失败,err为:"+err);
        }else{
            console.log("读取成功\n");
            console.log(data);
            console.log(data.toString());
        }
    });      
    //  console.log(data);  !!可以看到,读取的数据是二进制数据,需要.toString来转换成字符串
            // <Buffer 2a 7b 0d 0a 20 20 20 20 6d 61 72 67 69 
            // 6e 3a 20 30 3b 0d 0a 20 20 20 20 70 61 64 64 69 
            // 6e 67 3a 30 3b 0d 0a 7d 0d 0a 2e 62 6f 78 7b 0d 0a
            // 20 20 20 20 ... 65 more bytes>
            
            //  console.log(data.toString)
            //  *{
            //     margin: 0;
            //     padding:0;
            // }
            // .box{
            //     margin: 0;
            //     position: absolute;
            //     top: 0;
            //     left: 0;
            // }

//   调用readFileSync方法进行同步读取
    let result =  fs.readFileSync('./9.index.html',{flag:"r"});
    console.log(result);
    console.log(result.toString());

//   语法: readFile(文件名或URL,[配置对象],回调函数callback);
//   读取文件和写入文件参数的区别: 读取文件没有写入内容的参数传递,其余一致,同步和异步之间相差一个回调函数;
//   读取文件api的返回值是读取的结果,以buffer的形式呈现(二进制),需要buffer.toString()进行语义化


// 读取文件的常见错误:
    // 1没有找到目标文件(检查路径)::Error: ENOENT: no such file or directory

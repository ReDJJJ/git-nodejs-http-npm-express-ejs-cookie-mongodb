//流式读取文件
//fs文件系统 流式读取文件会将 文件以块的流的方式读取(64K);


//流式 读取文件
    // 1 引入文件模组 
    const FS = require("fs");
    // 2 创建流式读取流对象
    let rs = FS.createReadStream("10.css");
    // 3 绑定事件  chunk块,当读取完一块数据,该数据会传递给第一个参数chunk
        //绑定data事件,当读取完一块数据之后 会触发
    rs.on("data",(chunk)=>{
        console.log("1");
        console.log(chunk);
        console.log(chunk.length);
    });
        //绑定open事件,当读取流打开的时候触发
    rs.on("open",()=>{
        console.log("读取流打开了");
    });

    //读取流会在读取完毕之后自动关闭读取流,不像写入流
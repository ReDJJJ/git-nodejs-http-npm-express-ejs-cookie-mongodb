//流式读取文件并写入
//复制文件可拆分为读取文件内容,将读取到的文件内容写入新文件
// 此处文件比较大,因此读取使用流式读取

const fs  =  require('fs');
let rs = fs.createReadStream("./14.复制源文件.txt");
let ws = fs.createWriteStream("./14.复制目的文件.txt");
let ws2 = fs.createWriteStream("./14.复制目的文件2.txt");
rs.on('data',(chunk)=>{
    ws.write(chunk);  
});
//以上是每一次数据传输触发事件,然后每一个数据块传给第一个形参,然后利用ws.write(),将每个数据块写入新文件

//除了以上方法,fs还提供了一种
//pipe 管道
// rs.pipe(写入流对象)的方法, 将此读取流rs读取到的数据块,全部传输到ws写入数据流当中
rs.pipe(ws2);

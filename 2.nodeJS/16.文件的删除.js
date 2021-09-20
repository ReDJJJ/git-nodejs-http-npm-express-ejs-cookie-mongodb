//1.引入fs模块
const fs = require("fs");
//2 调用方法unlink 或者同步方法 unlinkSync
// 语法 fs.unlink(path,callback);
// 异步地删除文件或者符号链接。除了可能的异常,完成回调没有其他的参数;
fs.unlink('./16待删除文件',err =>{
    if(err) throw err;
    console.log("删除成功");
});


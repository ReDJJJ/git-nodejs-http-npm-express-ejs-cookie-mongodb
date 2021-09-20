function fn(){
    console.log("无package.json文件夹下被引入的模块，直接寻找index.JS JSON");
}

exports.fn = fn;
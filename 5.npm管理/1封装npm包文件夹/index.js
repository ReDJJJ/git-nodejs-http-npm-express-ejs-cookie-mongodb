//正常编写代码
function fn(M,N){
    return Math.floor(Math.random()*(N-M+1)+M);
}

function fn1(M,N){
    console.log("我是fn1");
}

let obj = {
    fn,
    fn1,
    //封装成对象向外暴露
};

//向外暴露
module.exports = obj;

//npm指向官网
//npm config set registry https://registry.npmjs.org/


//将需要打包的文件夹npm初始化

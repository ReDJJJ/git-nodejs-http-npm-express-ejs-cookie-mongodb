function fn1(A,B){
    console.log("fn1")
}

function fn2(x,y){
    console.log("fn2")
}

// 第二种暴露 exports
exports.FN1 =  fn1;
exports.FN2 =  fn2;
// 语法 exports.属性名 = 暴露内容
// export 会将所以暴露内容打包成一个对象 返回给 导入模块;
// 所以export.a = b *n   ~~~ modules.export(); 


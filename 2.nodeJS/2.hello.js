console.log("Hello NodeJS");

console.log(document);

//以前执行js文件都是依赖于浏览器
//利用nodeJS来执行js代码
//在js文件目录的命令行窗口中,执行 node js文件名 命令
//命令行窗口可以很多:vs的终端,gitbash和window自带的cmd等等


//nodejs 中的js代码不能使用DOM和BOM  等API 这些API都是浏览器自带
//js中的全局对象是 window
//而noedeJS中的全局对象是 global

//引入ejs
const ejs = require("ejs");
const fs = require("fs"); 

//调用方法

//第一个方法ejs.render 语法 ejs.render(str,data);  str:要编译的字符串 data:数据对象;
// render会data数据的对应数据替换str中定义的位置
// str语法 <%= 数据对象中所需数据的键名 %> 为str给数据对象预留的位置,找不到就报错
let str = fs.readFileSync("./1ejs初体验.html").toString(); //读取文件读取出来都是buffer类型,必要时需要转换成字符串;
let data = {msg1:"ABC", msg2:"EFG",title:"ejs初体验"};
const result =  ejs.render(str,data); console.log(result);

//注意,关键点来了,ejs.render只认识<%= %>这个语法,所以可以在普通html文件内写入<%= %>,render只会对有此标识的文本进行处理(从data数据对象中匹配取值替换); 至此,JS和html就再数据拼合的同时进行数据分离;

//ejs第一大功能:以数据对象的内容替换<%=数据对象键名 %>标识的内容
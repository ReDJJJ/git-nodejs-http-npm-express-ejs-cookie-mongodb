const ejs = require('ejs');
const fs = require('fs');
var str = '';
var data ={
    title:"数据遍历",
    songs:[
    '甜蜜蜜',
    "笨小孩",
    '常回家看看',
    '好运来'
]};

//上节介绍了ejs的第一种语法 <%=数据对象键名%>

//本节介绍ejs第二种语法 数据循环 
//需求 根据data生成一个列表
        //未学ejs之前: 利用for循环 拼接一个html格式字符串,相当于js代码中编写html,未分离
        //ejs 数据循环语法:
            // <% for(let i = 0; i <data.length; i++){ %>    
            //     <li><%= songs[i] %></li>
            // <% } %>
        //然后调用render(str,data)即可;
        //注意最后一个}的位置,是另外独自<%}%>,并且再render函数中,不用写data,里面的任意变量都是以data这个数据对象为基准,因此只需要写 i<songs.length 不用写data.songs.length
        //ejs里面的字符串会按照html语法解析并进行变量的替换;


var str = fs.readFileSync("./2ejs数据遍历.html").toString();
console.log(ejs.render(str,data));

// ejs.render两个参数 str一般是读取html文件内容(里面有ejs模板语法),第二个data是数据对象,并且ejs里面的文件以data为基准,填入变量的时候额外注意


// 可以看出 ejs.render后的html文件可以直接响应给浏览器,浏览器就会自动渲染了,并且html先被ejs预处理了,所以可以数据和结构的分离;
// <!DOCTYPE html>
// <html>

// <head>
//     <title>
//         数据遍历
//     </title>
//     <meta charset="utf-8">
// </head>

// <body>

//         <li>
//             甜蜜蜜
//         </li>

//         <li>
//             笨小孩
//         </li>

//         <li>
//             常回家看看
//         </li>

//         <li>
//             好运来
//         </li>

// </body>

// </html>
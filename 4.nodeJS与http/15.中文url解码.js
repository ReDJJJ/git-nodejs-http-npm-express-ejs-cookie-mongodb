const data = [
    {
        id: 1,
        name: '孙燕姿',
        song: '逆光'
    },
    {
        id: 2,
        name: '周杰伦',
        song: '不能说的密码'
    },
    {
        id: 3,
        name: '林俊杰',
        song: '不为谁而作的歌'
    },
    {
        id: 4,
        name: '五月天',
        song: '干杯'
    },
    {
        id: 5,
        name: '张艺兴',
        song: '莲'
    },
    {
        id: 6,
        name: '刘德华',
        song: '冰雨'
    },
    {
        id: 7,
        name: '张学友',
        song: '情人'
    },
    {
        id: 8,
        name: '陈奕迅',
        song: 'K歌之王'
    }
];

const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((request, response) => {
    let pathname = decodeURI(url.parse(request.url).pathname);
    if(pathname == "/songs"){
    let trStr = '';
    for (let i = 0; i < data.length; i++) {
        trStr += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].song}</td></tr>`
    }
    response.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>表格换行</title>
        <style></style>
    </head>
    <body>
        <table border="1" cellspacing="0" cellpadding="10" border-collapse="collapse" id="tb">
        <tr>
            <th>
                ID
            </th>
            <th>
                歌手
            </th>
            <th>
                歌曲
            </th>
        </tr>    
        ${trStr}
        </table>

        <script src="http://127.0.0.1/15.中文.js"></script>
    </body>
    </html>
    `);
    }else if(pathname == "/15.中文.js"){
        //响应隔行变色的js内容
        response.end(fs.readFileSync("./15.中文.js"));
    }else{
        response.end("404");
    }
}).listen(80, () => {
        console.log("服务启动");
})

    //url包含中文浏览器会对其进行编码在放入请求体的URL中
    //例如 15.中文.js ==> 15%E4%B8%AD%E6%96%87.js  
    // 请求行: GET /15%E4%B8%AD%E6%96%87.js HTTP/1.1
    //函数decodeURI(中文编码过的路径)  即可 将请求报文中编码过的包含中文的路径 解码
    // 使得pathname正常化,此时分流的判断条件就可以生效
    // 15.中文.js ==(浏览器自动把中文路径编码)==> 15%E4%B8%AD%E6%96%87.js   ==(decodeURI())==>  15.中文.js


    //进行梳理
    //本页面浏览器会发送两个请求
    // 一个是请求HTML 一个是请求外链式的js文件
    // 但是在默认情况下(不分流),任何请求都是返回了html文件!!!(为什么?)
    // 因为创建服务的第一个参数中,无论任何情况,都只有一个response.end(`拼接字符串`);当然会全部响应HTML了

    //而两个请求之间的区别有许多,最明显的就是他们url中路径不同,一个路径是/index.html的,一个是/js文件的;
    //所以根据请求行中url中pathname路径的不同,进行分别的response.end(),进行不同的响应;
    //让浏览器能接收到html也能接收到外链式js文件的响应; 
    //主要是没理解浏览器工作的历程!!!

    //中文url的情况:当url路径中出现中文,浏览器会进行编码,则服务器读取的时候就会出现误差,pathname属于else情况,就会响应外链式js代码404了;
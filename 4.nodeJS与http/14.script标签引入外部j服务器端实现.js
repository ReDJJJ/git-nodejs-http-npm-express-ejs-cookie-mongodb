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

// 十三的基础上 进行隔行换色
// 12的隔行换色是写在 html代码中的script标签嵌套的js代码;
// 而十三基础上嵌套js代码的话,不行,这又把js代码放在客户端上运行了;
//外链式是会触发客户端发请求的！！！ css js png 等等
const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
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

        <script src="/14gehanghuanse.js"></script>
    </body>
    </html>
    `);

    }else if(pathname == "/14gehanghuanse.js"){
        //响应隔行变色的js内容
        response.end(fs.readFileSync("./14gehanghuanse.js"));
    }else{
        response.end("404");
    }

    //外链式是会触发客户端发请求的！！！ css js png 等等
    //此处使用外链式的js,关键就是外链式中src这个属性怎么写,
    //直接写src="./14.隔行换色.js"肯定不行,因为客户端只收得到响应体,没有收到14.js这个文件;
    //写 src="http://127.0.0.1/14.js",而服务端不分流,不行,看响应体体 居然是返回了整个HTML页面而不是返回对应的外链式js文件14.js
    // *********************所以需要根据请求的pathname进行区分 **************************
    // if(pathname == "/songs"){ 
    //     //响应HTML表格
    //     }else if(pathname == "/14.隔行变色.js"){
    //         //响应隔行变色的js内容
    //     }else{
    //      response.end("404");
    // }

    //本页面客户端发送了两个请求:
    //GET /14gehanghuanse.js HTTP/1.1  和 GET /songs HTTP/1.1 
    // 可以看出他们url中的路径pathname不同
    // 如果不进行分流,则两次请求都会响应html页面,则无法达到变色效果,变色效果在外链式的js当中,却没有响应js代码给客户端

    //浏览器会发送两个请求:一个是请求HTML页面的,一个是遇到外链式JS发送请求申请js代码的;
    //然后在node的创建服务对象时候进行了分流(根据url中的pathanme),/song就申请HTML则返回html代码,而外链式的
}).listen(80, () => {
        console.log("服务启动");
})

    //url包含中文浏览器会对其进行编码在放入请求体的URL中
    //例如
    //函数decodeURI()
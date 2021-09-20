const data = [
    {
        id:1,
        name: '孙燕姿',
        song: '逆光'
    },
    {
        id:2,
        name: '周杰伦',
        song: '不能说的密码'
    },
    {
        id:3,
        name:'林俊杰',
        song: '不为谁而作的歌'
    },
    {
        id:4,
        name: '五月天',
        song:'干杯'
    },
    {
        id: 5,
        name: '张艺兴',
        song: '莲'
    },
    {
        id:6,
        name:'刘德华',
        song:'冰雨'
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

//实际开发中,网页数据是不断更新的:
// 例如商品页,页面的大体架构可能不变,但是商品信息是会改变的;
// 假若html页面完全写死,那么商品上新就很不方便,数据文件也要改,html页面也要改;
// 所以可以将网页的结构样式  和 网页的数据 进行分离 
// 这种是以前前后端未分离时,一种处理方式

// 个人思路: 独立的html,和独立node.js文件,在html文件中利用js代码动态创建tr ,将数组内数据怼进去;
            //理论可以:但是有个不好,就是响应体返回去后,动态创建tr的js部分都是由客户端浏览器执行的,会影响性能,
            //理想的应该是服务端处就拼接好了数据和结构的html页面,响应体返回,客户端直接渲染即可;
        

const http = require("http");
const fs = require("fs"); 
const url = require("url");

http.createServer((request,response)=>{
    // 实际思路:前后端未分离的时期,数据应该在服务端就拼接好,所以此处不需要独立的html文件;HTML文件在服务端的nodejs文件中就拼接好;
    // 注意:nodeJS中不支持dom操作;
    // 所以使用 ``字符串中配合${} 将数据嵌入
    // 由于数据比较多,可以进行预先的拼接,下面将数组进行tr 标签的拼接  
    //{id:1,name: '孙燕姿',song: '逆光'} => <tr><td>1</td><td>孙燕姿</td><td>微光</td></tr>

    //直接利用for循环对data这个数组进行遍历,将所有的tr行嵌入数据后全部打包在一起;
    let trStr = '';
    for (let i = 0; i < data.length; i++) {
        trStr += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].song}</td></tr>`
    }
    response.end( `
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
    </body>
    </html>
    `);

    //这样做看似拼接字符串繁琐,但是好处时当data修改时,HTML也会跟着修改,不用手动更新HTML;
    //前后端未分离时使用的方法 nodejs中将数据提前拼接在字符串当中,在浏览器端就把html网页拼接完毕以响应体返回

    //现在还没有能力在独立的html文件中进行数据表格的拼接;
})
.listen(80,()=>{
    console.log("服务启动");
})
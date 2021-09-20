//前面介绍了 fs.writeFile 和 fs.writeFileSync 异步写入api和同步写入api
// 下面使用写入流方法写入文件
        // 1 引入文件系统模组
        const fs = require('fs');
        // 2 使用fs.createWriteStream 创建写入流
        const ws = fs.createWriteStream('9.index.html');
        // 3 使用ws.write 执行写入
        ws.write("<html>我是html2</html>\n");
        ws.write("<script>window.onload=function(){}</script>\n");
                // 此处与默认的wiretFile系列API不同,写入流可以创建写入流之后,多次调用write()方法,会自动进行追加内容,而不想之前那样覆盖,还要再配置对象参数中{flag:"a"}才进行追加
        // 4  关闭写入流
        ws.close();
        
// 语法知识:
        //创建写入流 fs.createWriteStream(文件名或者URL,[object](配置对象))
        //写入流调用write方法写入文件,ws.write(写入内容); 
        //  写入内容参数 只有两个类型 字符串和buffer 否则会报错;
        //  而字符串类型可以包含css js html 等原生语句字符串, 会在相对应的文件当中解析语法
        //  !!!DOM和BOM操作依赖于浏览器,在nodeJS中无法解析这两种语句




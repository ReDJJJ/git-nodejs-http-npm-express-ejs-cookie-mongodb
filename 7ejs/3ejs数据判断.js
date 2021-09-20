//需求,数据判断,若data中vip值为1 ,不显示广告(data中的ad属性的值);

const ejs = require("ejs");
let str = "";
let data = {
    vip: 0,
    ad: "广告内容",
}
//ejs中数据判断语法和数据循环类似  <% if() { %> 处理内容(有可能包含变量替换) <%}%>  ejs语法很特别 <%=XX%>用于变量替换 <%{%><%}%>用于其他语法设置
// 注意 data必须是对象;


str = ` <h1>标题<h1>
        <% if(vip !== 1){%>
        <p><%=ad%></p>    
        <%}%>
`
console.log(ejs.render(str,data));
const http = require('http');
const fs = require('fs');

//创建服务
http.createServer( (request,response) => {
    //console.log('Request come',request.url)

    const html = fs.readFileSync('index.html','utf8')
    //设置请求头
    response.writeHead(200,{
       'Content-Type': 'text/html' ,
       
    })

    //发送请求
    response.end(html)
}).listen(8887)

console.log('server listening on 8887')
const http = require('http');

//创建请求服务
http.createServer((request,response) => {
    //console.log('request come',request.url)

    //设置请求头
    // response.writeHead(200,{
    //     'Content-Type': 'text/html' ,
    //     //'Access-Control-Allow-Origin': '*'
    //  })

    //发送请求
    response.end('123123')
}).listen('8888')

console.log('server listening on 8888')
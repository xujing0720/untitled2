// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('<h1>helldddo</h1>');
//     res.end('<p>Hello f</p>')
// }).listen(3000);     //事件监听3000端口
// console.log('open 2s ');
const http = require('http');

const hostname = '127.0.0.1';
const port =3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain;charset=utf-8');
res.end('helloworld11111!\n');
});

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});
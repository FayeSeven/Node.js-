/**
 * Created by 熙冰
 * 2018/3/2  20:34
 */
var http = require('http');
var url = require('url');
var server = http.createServer();

var urlStr = url.parse('http://www.baidu.com:8080/a/index.html?b=2#p=1');
console.log(urlStr);

server.on('request',function (req,res) {
    //console.log(req.url);

    var urlStr = url.parse(req.url);
    // console.log(urlStr);

    switch (urlStr.pathname){
        case '/':
            //首页
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>首页</h1>');
            break;
        case '/user':
            //个人中心
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>个人中心</h1>');
            break;
        default:
            //其它情况
            res.writeHead(404,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>404</h1>');
            break;
    }
});

server.listen(8080,'localhost');
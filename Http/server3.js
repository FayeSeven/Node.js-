/**
 * Created by 熙冰
 * 2018/3/2  20:53
 */
var http = require('http');
var url = require('url');
var fs=require('fs');
var querystring = require('querystring');
var server = http.createServer();
var HtmlDir = __dirname + '/html/';
server.on('request',function (req,res) {
//console.log(req.url);

    var urlStr = url.parse(req.url);
    // console.log(urlStr);

    switch (urlStr.pathname){
        case '/':
            //首页
            sendData(HtmlDir+'index.html',req,res);
            break;
        case '/user':
            //个人中心
            sendData(HtmlDir+'user.html',req,res);
            break;
        case '/login':
            //个人中心
            sendData(HtmlDir+'login.html',req,res);
            break;
        case '/login/check':
            //个人中心
            // console.log(req.method);
            // console.log(urlStr);
            //console.log(querystring.parse(urlStr.query)); //{ username: 'hello', password: '123' }  get方式提交的数据
            if(req.method.toUpperCase() == 'POST'){
                var str = '';
                req.on('data', function (chunk) {
                    str += chunk;
                });
                req.on('end', function () {  //等待从缓冲区读取出所有的数据
                    console.log(str);  //username=Cynthia&password=123
                    console.log(querystring.parse(str));  //{ username: 'Cynthia', password: '123' }  变成一个对象
                });
            }

            break;
        default:
            //其它情况
            sendData(HtmlDir+'err.html',req,res);
            break;
    }
});

function sendData(file,req,res) {
    fs.readFile(file,function (err,data) {
        if(err){
            res.writeHead(404,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>404</h1>');
        }else{
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end(data);
        }
    });
}

server.listen(8080,'localhost');
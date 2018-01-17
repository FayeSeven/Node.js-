/**
 * Created by 熙冰
 * 2018/1/17  17:24
 */
var fs=require('fs');

//异步
/*fs.open('1.txt','r',function (err,fd) {
    console.log(fd);
})
console.log('ok');*/


var fd=fs.openSync('1.txt','r');
console.log(fd);
/**
 * Created by 熙冰
 * 2018/1/17  11:30
 */

/*
* process:它是一个全局对象
* */

// console.log(process);
//console.log(global.process);
//console.log(process.argv);//argv  array,一组包含命令行参数的数组
//console.log(process.env);//用户环境信息
//console.log(process.execPath);//开启当前进程的绝对路径

//console.log(process.pid);//当前进程的pid
//console.log(process.title);//当前进程的显示名称（Getter/Setter）

/*setInterval(function () {

 },5000)*/

/*setInterval(function () {
    process.exit();//退出
},5000)*/

/*function Log(data) {
    process.stdout.write(data);
}*/
//process.stdout.write('hello');
//Log('你好')

//默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
process.stdin.resume();
//用于监听用户的输入数据
/*
process.stdin.on('data',function (chunk) {
    console.log("用户输入:"+chunk);
});*/

var a;
var b;
process.stdout.write('请输入a值：');
process.stdin.on('data',function (chunk) {
    if (!a){
        a=Number(chunk);
        process.stdout.write('请输入b的值：');
    }else {
        b=Number(chunk);
        process.stdout.write('结果是：'+(a+b));
    }
});

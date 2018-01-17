/**
 * Created by 熙冰
 * 2018/1/17  17:11
 */
//fs模块

var fs=require('fs');
/*
* fs.open(path,flags,[mode],callback)
*   path:要打开文件路径
*   flags：打开文件方式  读/写
*   mode:设置文件模式 读/写/执行 4/2/1
*   callback：回调
*       err:文件打开失败的错误保存在err
*       fd:被打开文件的标识,和定时器
* */
fs.open('1.txt','r',function (err,fd) {
    /*console.log(err);
    console.log(fd);*/

    if (err){
        console.log('文件打开失败');
    }else {
        console.log('文件打开成功');
        console.log(fd);
    }
});

/*
fs.open('1.txt','r',function (err,fd) {
    console.log(fd);
})*/

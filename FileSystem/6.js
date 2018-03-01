/**
 * Created by 熙冰
 * 2018/3/1  16:35
 */
var fs=require('fs');


/*
* 异步读取一个文件的全部内容fs.readFile(filename,[options],callback)
* */
/*fs.readFile('2.txt',function (err,data) {
    // console.log(arguments);
    if(err){
        console.log('文件读取失败');
    }else{
        console.log(data.toString());
    }
});*/


/*
* 删除一个文件 fs.unlink(path,callback)
* */
/*
 fs.unlink('2.txt',function (err) {
 if(err){
 console.log('删除失败');
 }else{
 console.log('删除成功');
 }
 })*/


/*
* 重命名fs.rename(oldPath,newPath,callback)
* */
/*fs.rename('2.txt','2.new.txt',function () {
    console.log(arguments);
})*/


/*
* 读取文件信息fs.stat(path,callback)
* */
/*fs.stat('2.new.txt',function () {
    console.log(arguments);
})*/
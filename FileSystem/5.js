/**
 * Created by 熙冰
 * 2018/1/23  11:49
 */
var fs=require('fs');
var filename='2.txt'

/*
* 异步向一个指定的文件中写入数据，
* 如果该文件不存在，则新建，
* 如果存在则新内容覆盖原有内容
* */
/*
fs.writeFile(filename,'hello',function () {
    console.log(arguments);
})*/

/*
 * 异步向一个指定的文件中写入数据，
 * 如果该文件不存在，则新建，
 * 如果存在则在原有内容尾部增加新内容
 * */
/*fs.appendFile(filename,'-11',function () {
    console.log(arguments);
})*/

/*
fs.exists(filename,function (isExists) {
    // console.log(isExists);
    if(!isExists){//不存在
        fs.writeFile(filename,'qqq',function (err) {
            if(err){
                console.log("出错了");
            }else{
                console.log("创建新文件成功");
            }
        })
    }else{
        fs.appendFile(filename,'-11',function (err) {
            if(err){
                console.log("新的内容追加失败");
            }else{
                console.log("新的内容追加成功");
            }
        })
    }
})*/

if(!fs.existsSync(filename)){
    // if(fs.writeFileSync(filename,'mji')){
    //     console.log("创建新文件成功");
    // }else{
    //     console.log("创建新文件失败");
    // }
    fs.writeFileSync(filename,'mji');
    console.log("创建新文件成功");
}else{
    // if(fs.appendFileSync(filename, '-leo')){
    //     console.log("新内容追加成功");
    // }else{
    //     console.log("新的内容追加失败");
    // }
    fs.appendFileSync(filename, '-leo');
    console.log("新内容追加成功");
}


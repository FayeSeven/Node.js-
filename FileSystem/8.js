/**
 * Created by 熙冰
 * 2018/3/1  16:51
 */
var fs = require('fs');

/*
* 创建文件夹
* fs.mkdir(path,[mode],callback)
* */

/*
fs.mkdir('creatdir', function(err){
    if(err){
        console.log(err);
    }else{
        console.log(arguments);
        console.log("creat done!");
    }
})*/


/*
* 删除
* */
/*
fs.rmdir('creatdir', function(err){
    console.log(arguments);
})
*/

fs.readdir('../FileSystem', function(err,fileList){
    //console.log(fileList);
    fileList.forEach(function (f) {
        fs.stat(f,function (err,info) {
            //console.log(arguments);
            switch (info.mode){
                case 16822:
                    console.log('[文件夹]'+f);
                    break;
                case 33206:
                    console.log('[文件]'+f);
                    break;
                default:
                    console.log('[其他类型]'+f);
                    break;
            }
        })
    })
})


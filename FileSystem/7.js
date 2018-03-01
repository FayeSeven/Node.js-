/**
 * Created by 熙冰
 * 2018/3/1  16:47
 */
var fs=require('fs');

var filename='2.new.txt';

/*
 * 观察指定路径的改变  fs.watch(filename,[options],[listener])稳定性：不稳定的
 * */

fs.watch(filename,function (ev,fn) {
    console.log(ev);
    if(fn){
        console.log(fn+'发生了改变');
    }else{
        console.log('.....');
    }
})
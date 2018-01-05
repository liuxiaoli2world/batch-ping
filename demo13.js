
// 注意：需要安装 iconv-lite 和 bufferhelper

var iconv = require('iconv-lite'); 
var ls= require('child_process').spawn('ping', ['www.baidu.com']);
ls.stdout.on('data', function (data) {  
  console.log('stdout: ' + iconv.decode(data, 'gbk'));
});


var http = require('http');
var url1 = require('url').parse('http://www.9958.pw/');
// var iconv = require('iconv-lite'); 
var BufferHelper = require('bufferhelper');

http.get(url1,function(res){
  var bufferHelper = new BufferHelper();
  res.on('data', function (chunk) {
    bufferHelper.concat(chunk);
  });
  res.on('end',function(){ 
    console.log(iconv.decode(bufferHelper.toBuffer(),'utf-8'));
  });
});


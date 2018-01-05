//同步方法
function batchPingSync(a) {
  const { execSync } = require('child_process');
  var out = '';
  // const a = ['www.baidu.com', 'www.sina.cn', '192.168.89.46'];
  const r = [];
  a.forEach((item, index) => {
    console.log(`正在ping ${item}`);
    try {
      out = execSync(`ping ${item}`);
      r.push(`${item} \t\tok\r\n`);
    } catch (e) {
      r.push(`${item} \t\terror\r\n`);
    }
  });
  console.log('执行完毕！');
  return r.toString().replace(/\,/g, '');
}

//异步方法
//注：异步方法输出时需要设置个时间，否则无输出，时间不好把握
function batchPing() {
  const { exec } = require('child_process');
  const a = ['www.baidu.com', 'www.sina.cn', '192.168.89.46'];
  const r = [];
  a.forEach((item, index) => {
    exec(`ping ${item}`, (error, stdout, stderr) => {
      if (error) {
        r.push(`${item} error\r\n`);
      } else {
        r.push(`${item} ok\r\n`);
      }
      console.log(index);
    });
  });

  setTimeout(() => {
    console.log(r.toString().replace(/\,/g, ''));
  }, 9000 * a.length);
}

module.exports = { batchPingSync, batchPing };


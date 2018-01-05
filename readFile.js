
const fs = require('fs');
const fns = require('./batchPing');
fs.readFile('data.txt', (error, data) => {
  let s = data.toString();
  let ss = s.split('\r\n');
  let outputS = fns.batchPingSync(ss);
  fs.writeFile('result.txt', outputS, (error) => {

  });
});
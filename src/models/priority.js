/* eslint-disable func-names*/
// import fs from 'fs';
// import path from 'path';
// const file = path.join(__dirname, '../../data/priorities.json');
// const data = fs.readFileSync(file, { encoding: 'utf8' });
const data = require('../../data/priorities.json');

function Priority() {
}

Priority.find = function () {
  return data;
};


module.exports = Priority;

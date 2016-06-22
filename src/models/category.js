/* eslint-disable func-names*/
// import fs from 'fs';
// import path from 'path';
// const file = path.join(__dirname, '../../data/categories.json');
const data = require('../../data/categories.json');
// function Category(c) {
//   this.name = c.name;
// }
//
// Category.find = function (value) {
//   const data = fs.readFileSync(file, { encoding: 'utf8' }).split('\n');
//   data.pop();
//   const categories = data.map(p => JSON.parse(p));
//   if (value) {
//     return categories.find(a => a.value === value);
//   }
//   console.log('categories:', categories);
//   return categories;
// };
function Category() {
}

Category.find = function () {
  console.log('category:', data);
  return data;
};
module.exports = Category;

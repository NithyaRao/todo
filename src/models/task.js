/* eslint-disable func-names*/
// import fs from 'fs';
// import path from 'path';

// function Task(t) {
//   this.name = t.name;
//   this.duedate = t.duedate;
//   this.priority = t.priority;
//   this.category = t.category;
//   this.iscomplete = t.iscomplete;
//   this.creationdate = t.creationdate;
// }

// Task.find = function (id) {
//   const data = fs.readFileSync(file, { encoding: 'utf8' }).split('\n');
//   data.pop();
//   const tasks = data.map(d => JSON.parse(d));
//   if (id) {
//     return aliens.find(a => a.id === id);
//   }
//   return aliens;
// };

// Alien.delete = function (id) {
//   const data = fs.readFileSync(file, { encoding: 'utf8' }).split('\n');
//   data.pop();
//   const aliens = data.map(d => JSON.parse(d));
//   const alienIdx = aliens.findIndex(a => a.id === id);
//   aliens.splice(alienIdx, 1);
//
//   // save the new array
//   if (aliens.length === 0) {
//     fs.writeFileSync(file, '');
//   } else {
//     aliens.forEach((d, idx) => {
//       if (idx === 0) {
//         fs.writeFileSync(file, `${JSON.stringify(d)}\n`);
//       } else {
//         fs.writeFileSync(file, `${JSON.stringify(d)}\n`, { flag: 'a' });
//       }
//     });
//   }
// };
//
// Task.prototype.save = function () {
//   fs.writeFileSync(file, `${JSON.stringify(this)}\n`, { flag: 'a' });
// };
//
// module.exports = Task;

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  due: Date,
  priority: Number,
  category: String,
  isComplete: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);

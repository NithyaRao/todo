/* eslint-disable no-underscore-dangle */

function ShowTask(task, priorities) {
  this.id = task._id;
  this.name = task.name;
  this.due = task.due.toLocaleDateString();
  this.priority = priorities.find(p => p.value === task.priority);
  this.isComplete = task.isComplete;
  this.createdAt = task.createdAt.toLocaleDateString();
}
module.exports = ShowTask;

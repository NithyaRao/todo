/* eslint-disable new-cap */

import express from 'express';
import Task from '../models/task';
import Priority from '../models/priority';
import Category from '../models/category';
import ShowTask from '../models/showtask';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Task.find({}, (err, tasks) => {
    const priorities = Priority.find();
    const showTasks = tasks.map(t => new ShowTask(t, priorities));
    console.log('tasks:', showTasks);
    res.render('tasks/index', { showTasks });
  });
});

router.get('/new', (req, res) => {
  const priorities = Priority.find();
  const categories = Category.find();
  res.render('tasks/new', { priorities, categories });
});

router.get('/:id/edit', (req, res) => {
  // const alien = Alien.find(req.params.id);
  res.render('tasks/new');
});

router.post('/:id', (req, res) => {
  // const alien = Alien.find(req.params.id);
  res.render('/tasks');
});

router.post('/:id/complete', (req, res) => {
  const query = req.params.id;
  Task.findByIdAndUpdate(query, { isComplete: true }, (err, task) => {
    console.log('findone:', err, task);
    res.redirect('/tasks');
  });
});

router.post('/', (req, res) => {
  // const alien = new Alien(req.body);
  // alien.save();     // sync call
  const task = new Task(req.body);
  task.save(err => {
    res.redirect('/tasks');
  });
});

router.post('/:id/delete', (req, res) => {
  Task.remove({ _id: req.params.id }, (err) => {
    if (!err) {
      console.log('Successfully deleted');
    }
    res.redirect('/tasks');
  });
});

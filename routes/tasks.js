const prisma = require('../lib/prisma');
const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, title: 'Set up TaskFlow project', done: true }
];
let nextId = 2;

router.get('/', (req, res) => {
  res.json(tasks);
});

router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

router.post('/', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  // const newTask = { id: tasks.length + 1, title: req.body.title, done: false };
  // tasks.push(newTask);
  const newTask = { id: nextId++, title: req.body.title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.patch('/:id', (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.done = true;
  res.json(task);
});

router.delete('/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== Number(req.params.id));
  res.status(204).send();
});

module.exports = router;

router.get('/', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'Task id must be a whole number' });
  }

  const task = await prisma.task.findUnique({ where: { id } });
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});
const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');

let tasks = [
  { id: 1, title: 'Set up TaskFlow project', done: true }
];

router.get('/', async (req, res) => {
  const allTasks = await prisma.task.findMany();
  res.json(allTasks);
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

router.post('/', async (req, res) => {
  const { title } = req.body;

  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }

  const task = await prisma.task.create({ data: { title: title.trim() } });
  res.status(201).json(task);
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
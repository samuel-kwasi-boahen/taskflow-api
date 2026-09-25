/* const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.send('TaskFlow API is alive!');
});

app.get('/menu', (req, res) => {
  res.send("Today's menu: rice, salad, chicken");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

let tasks = [
  {id: 1, title: 'Set up TaskFlow project', done: true}
]

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  if (!req.body.title) {
  return res.status(400).json({ error: 'Title is required' });
}
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    done: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

    if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

/* app.patch('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));
  task.done = true;
  res.json(task);
}) */ 

  

 /*  app.patch('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  task.done = true;
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== Number(req.params.id));
  res.status(204).send();
});

*/


const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('TaskFlow API is alive!');
});

app.get('/menu', (req, res) => {
  res.send("Today's menu: rice, salad, chicken");
});

app.use('/tasks', taskRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
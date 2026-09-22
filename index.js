const express = require('express');
const app = express();

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
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


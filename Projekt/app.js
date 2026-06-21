const express = require('express');
const bodyParser = require('body-parser');
const taskController = require('./controllers/taskController');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', taskController.getAllTasks);
app.post('/add', taskController.addTask);
app.post('/update/:id', taskController.updateTask);
app.listen(3000, () => console.log('Serwer działa na http://localhost:3000'));
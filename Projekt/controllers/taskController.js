const tasks = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
    let filteredTasks = tasks;
    const status = req.query.filterStatus;

    if (status && status !== 'Wszystkie') {
        filteredTasks = tasks.filter(t => t.status === status);
    }

    res.render('index', { tasks: filteredTasks });
};

exports.addTask = (req, res) => {
    if (!req.body.opis || req.body.opis.trim() === "") {
        return res.send("Błąd: Opis nie może być pusty! <a href='/'>Wróć</a>");
    }
    const newTask = {
        id: Date.now(),
        opis: req.body.opis,
        termin: req.body.termin,
        status: req.body.status
    };
    tasks.push(newTask);
    res.redirect('/');
};

exports.updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.status = req.body.status;
    }
    res.redirect('/');
};
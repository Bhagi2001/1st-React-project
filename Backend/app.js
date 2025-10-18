const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({ 
        extended: true 
    })
);

app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers(users => {
        if (!users) return res.status(404).send('No users found');
        res.send(users);
    });
});

app.get('/user', (req, res) => {
    const id = req.query.id;
    controller.getUserById(id, user => {
        if (!user) return res.status(404).send('User not found');
        res.send(user);
    });
});

module.exports = app;
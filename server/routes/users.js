const express = require('express');

const usersRouter = express.Router();

/*
    ONE USER BY ID
    http://localhost:3000/api/users/1
*/
usersRouter.get('/:userid', (req, res) => {
    res.json('One User for: ' + req.params.userid);
});

/*
    ALL USERS
    http://localhost:3000/api/users/
*/
usersRouter.get('/', (req, res) => {
    res.json('All Users');
});

/*
    CREATE USER
    http://localhost:3000/api/users/
*/
usersRouter.post('/', (req, res) => {
    console.log(req.body); // crap we fill out in a form
    res.json('Test post!');
});

/*
    EDIT USER BY ID
    http://localhost:3000/api/users/1
*/
usersRouter.put('/:userid', (req, res) => {
    res.json('Edit user ' + req.params.userid);
});

/*
    DELETE USER BY ID
    http://localhost:3000/api/users/1
*/
usersRouter.delete('/:userid', (req, res) => {
    res.json('Kill user ' + req.params.userid);
});

module.exports = usersRouter;
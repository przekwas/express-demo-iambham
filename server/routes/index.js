const express = require('express');
const usersRouter = require('./users');

const indexRouter = express.Router();

indexRouter.use('/users', usersRouter);

module.exports = indexRouter;
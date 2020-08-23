const express = require('express');
const { getAllUsers, getUser } = require('../controllers/users');
const usersRouter = express.Router();

usersRouter.get('/:id', getUser);
usersRouter.get('/', getAllUsers);


module.exports = usersRouter;


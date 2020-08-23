const express = require('express');
const path = require('path');
const app = express();

const { usersRouter } = require('./routes/users');

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));

//app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


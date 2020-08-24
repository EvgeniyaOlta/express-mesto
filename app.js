const express = require('express');

const path = require('path');

const app = express();

const { usersRouter, cardsRouter } = require('./routes');

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use((req, res) => {
  res
    .status(404)
    .send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

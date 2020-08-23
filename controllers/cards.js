const path = require('path');
const { readFile } = require('../helpers');
const cards = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readFile(cards)
    .then((data) => {
      res
        .status(200)
        .send(JSON.parse(data));
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: `Ошибка тут как тут ${error}` });
    });
};

module.exports = {
  getCards,
};
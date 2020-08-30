const Card = require('../models/card');
const RequestError = require('../errors/RequestError');
const SearchError = require('../errors/SearchError');

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .catch((err) => {
      throw new RequestError({ message: `${err.message}` });
    })
    .then((card) => res.send({ data: card }))
    .catch(next);
};

module.exports.getAllCards = (req, res, next) => {
  Card.find({})
    .populate('user')
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card.findByIdAndDelete(req.params._id)
    .orFail()
    .catch((err) => {
      throw new SearchError({ message: `${err.message}` });
    })
    .then((card) => res.send({ data: card }))
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params._id,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .orFail()
    .catch((err) => {
      throw new SearchError({ message: `${err.message}` });
    })
    .then((likes) => res.send({ data: likes }))
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params._id,
    { $pull: { likes: req.user._id } },
    { new: true })
    .orFail()
    .catch((err) => {
      throw new SearchError({ message: `${err.message}` });
    })
    .then((likes) => res.send({ data: likes }))
    .catch(next);
};

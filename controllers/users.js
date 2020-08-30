const User = require('../models/user');
const RequestError = require('../errors/RequestError');
const SearchError = require('../errors/SearchError');

module.exports.getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(next);
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.params._id)
    .orFail()
    .catch((err) => {
      throw new SearchError({ message: `${err.message}` });
    })
    .then((user) => res.send({ data: user }))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .catch((err) => {
      throw new RequestError({ message: `${err.message}` });
    })
    .then((user) => res.send({ data: user }))
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about })
    .orFail((err) => new SearchError({ message: `${err.message}` }))
    .catch((err) => {
      if (err instanceof SearchError) {
        throw err;
      }
      throw new RequestError({ message: `${err.message}` });
    })
    .then((updatedUser) => res.send({ data: updatedUser }))
    .catch(next);
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar })
    .orFail((err) => new SearchError({ message: `${err.message}` }))
    .catch((err) => {
      if (err instanceof SearchError) {
        throw err;
      }
      throw new RequestError({ message: `${err.message}` });
    })
    .then((updatedAvatar) => res.send({ data: updatedAvatar }))
    .catch(next);
};

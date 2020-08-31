const User = require('../models/user');

module.exports.getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(next);
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.params._id)
    .orFail()
    .catch((err) => {
      if (err.message) {
        res.status(404).send({ message: err.message });
        return;
      }
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    })
    .then((user) => res.send({ data: user }))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .catch((err) => {
      if (err.message) {
        res.status(400).send({ message: err.message });
        return;
      }
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    })
    .then((user) => res.send({ data: user }))
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    })
    .orFail((err) => res.status(400).send({ message: err.message }))
    .catch((err) => {
      if (err.message) {
        res.status(404).send({ message: err.message });
        return;
      }
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    })
    .then((updatedUser) => res.send({ data: updatedUser }))
    .catch(next);
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    })
    .orFail((err) => res.status(400).send({ message: err.message }))
    .catch((err) => {
      if (err.message) {
        res.status(404).send({ message: err.message });
        return;
      }
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    })
    .then((updatedAvatar) => res.send({ data: updatedAvatar }))
    .catch(next);
};

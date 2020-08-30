class RequestError extends Error {
  constructor(...other) {
    super(...other);
    this.status = 400;
    this.message = 'Запрос некорректен';
  }
}

module.exports = RequestError;

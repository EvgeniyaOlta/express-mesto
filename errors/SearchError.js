class SearchError extends Error {
  constructor(...other) {
    super(...other);
    this.status = 404;
    this.message = 'Критерии поиска введены некорректно';
  }
}

module.exports = SearchError;

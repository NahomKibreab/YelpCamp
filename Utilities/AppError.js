class AppError extends Error {
  constructor(status, name) {
    super();
    this.status = status;
    this.name = name;
  }
}

module.exports = AppError;

const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotImplementedError extends BaseError {
  constructor(methodName) {
    super(
      "Not Implemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} method is not implemented`,
      {}
    );
  }
}

module.exports = NotImplementedError;

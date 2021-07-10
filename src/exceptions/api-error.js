module.exports = class ApiError extends Error {
  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static PermissionDenied() {
    return new ApiError(405, 'User is not authorized');
  }

  static UnauthorizedError() {
    return new ApiError(401, 'User is not authorized');
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
};

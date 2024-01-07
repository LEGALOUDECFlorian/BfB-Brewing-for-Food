export default class ApiError extends Error {
  constructor(message, info) {
    super(message);
    this.name = "ApiError";

    Object.entries(info).forEach(([key, value]) => {
      this[key] = value;
    });
  }
}

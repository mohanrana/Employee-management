exports.Response = function (status, message, data) {
  this.status = status;
  this.message = message;
  this.data = data;
}
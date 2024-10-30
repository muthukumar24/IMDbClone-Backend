const { User } = require("../models/userModel.js");

function getUserByEmail(request) {
  return User.findOne({ email: request.body.email });
}

function getUserById(requestID) {
  return User.findById(requestID).select("_id username email");
}

module.exports = { getUserByEmail, getUserById }


const cast  = require("../models/castModel.js");

function getActors() {
  return cast.find({ professionalType: "Actor" });
}

function getProducers() {
  return cast.find({ professionalType: "Producer" });
}

function postNewCast(req) {
  return new cast({ ...req.body }).save();
}

function updateCast(req) {
  return cast.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
}

function deleteCast(req) {
  return cast.findOneAndDelete({ _id: req.params.id });
}

module.exports = {getActors, getProducers, postNewCast, updateCast, deleteCast}
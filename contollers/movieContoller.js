const movie  = require("../models/movieModel.js");

function getAllMovies() {
  return movie.find({}).populate("producer").populate("actors");
}

function postNewMovie(req) {
  return new movie({ ...req.body }).save();
}

function updateMovie(req) {
  return movie.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
}

function deleteMovie(req) {
  return movie.findOneAndDelete({ _id: req.params.id });
}

module.exports = { getAllMovies, postNewMovie, updateMovie, deleteMovie}
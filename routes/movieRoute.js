const express = require("express");
const {
  deleteMovie,
  getAllMovies,
  postNewMovie,
  updateMovie,
} = require("../contollers/movieContoller.js");

const movieRouter = express.Router();

// Get All Movies
movieRouter.get("/all", async (req, res) => {
  try {
    const movies = await getAllMovies();
    if (!movies) {
      return res.status(404).json({ error: "No Content Available." });
    }
    res.status(200).json({ data: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Create New Movie
movieRouter.post("/create", async (req, res) => {
  try {
    const newMovie = await postNewMovie(req);
    if (!newMovie) {
      return res
        .status(400)
        .json({ error: "Error occurred while saving the data." });
    }
    res.status(200).json({ data: newMovie, message: "Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Update Movie Data
movieRouter.put("/edit/:id", async (req, res) => {
  try {
    const updatedMovie = await updateMovie(req);
    if (!updatedMovie) {
      return res
        .status(400)
        .json({ error: "Error occurred while updating the data." });
    }
    res.status(200).json({
      data: updatedMovie,
      message: "Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

movieRouter.delete("/delete/:id", async (req, res) => {
  try {
    const deletedMovie = await deleteMovie(req);
    if (!deletedMovie) {
      return res
        .status(400)
        .json({ error: "Error occurred while deleting the data." });
    }
    res.status(200).json({
      message: "Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

module.exports = movieRouter;
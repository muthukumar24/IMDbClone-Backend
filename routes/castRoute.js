const express = require("express");
const {
  deleteCast,
  getActors,
  getProducers,
  postNewCast,
  updateCast,
} = require("../contollers/castController.js");

const castRouter = express.Router();

// Get All Actors
castRouter.get("/actors", async (req, res) => {
  try {
    const actors = await getActors();
    if (!actors) {
      return res.status(404).json({ error: "No Content Available." });
    }
    res.status(200).json({ data: actors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Get All Producers
castRouter.get("/producers", async (req, res) => {
  try {
    const producers = await getProducers();
    if (!producers) {
      return res.status(404).json({ error: "No Content Available." });
    }
    res.status(200).json({ data: producers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Create New Cast
castRouter.post("/create", async (req, res) => {
  try {
    const newCast = await postNewCast(req);
    console.log(req.body);
    if (!newCast) {
      return res
        .status(400)
        .json({ error: "Error occurred while saving the data." });
    }
    res.status(200).json({ data: newCast, message: "Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Update the Cast Data
castRouter.put("/edit/:id", async (req, res) => {
  try {
    const updatedCast = await updateCast(req);
    if (!updatedCast) {
      return res
        .status(400)
        .json({ error: "Error occurred while updating the data." });
    }
    res.status(200).json({
      data: updatedCast,
      message: "Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Delete Cast
castRouter.delete("/delete/:id", async (req, res) => {
  try {
    const deletedCast = await deleteCast(req);
    if (!deletedCast) {
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

module.exports = castRouter;
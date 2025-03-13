const Catch = require("../models/Catch");
const express = require("express");
const router = express.Router();

router.get("/get-all", async (req, res) => {
  try {
    const categories = await Catch.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/add-catch", async (req, res) => {
  try {
    const newCatch = new Catch(req.body);
    await newCatch.save();
    res.status(200).json("Item added successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});
router.put("/update-catch", async (req, res) => {
  try {
    await Catch.findOneAndUpdate({ _id: req.body.catchId }, req.body);
    res.status(200).json("Item updated successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});
router.delete("/delete-catch", async (req, res) => {
  try {
    await Catch.findOneAndDelete({ _id: req.body.catchId }, req.body);
    res.status(200).json("Item deleted successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;

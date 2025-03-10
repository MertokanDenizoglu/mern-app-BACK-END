
const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({}, { strict: false, timestamps: true });

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;

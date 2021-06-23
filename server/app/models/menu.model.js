const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  id: Number,
  image: String,
  desc: String,
  price: Number,
  ratings: Number,
  value: Number,
  ordered: Number,
  chef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChefSchema",
      required: true
  }
});

module.exports = mongoose.model("Menu",MenuSchema)
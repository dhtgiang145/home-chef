const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  id: Number,
  image: String,
  desc: String,
  price: Number,
  ratings: Number,
  value: Number,
  ordered: Number,
});

const ReviewSchema = new mongoose.Schema({
  username: String,
  userreview: String,
});

const ChefSchema = new mongoose.Schema({
  chefid: Number,
  chefname: String,
  chefspecialty: String,
  chefratings: Number,
  chefmenus: { type: [MenuSchema], require: false },
  chefreviews: { type: [ReviewSchema], require: false },
});

module.exports = mongoose.model("Chef", ChefSchema);

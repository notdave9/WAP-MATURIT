const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  sila: { type: Number, required: true },
  rychlost: { type: Number, required: true },
});

module.exports = mongoose.model("Ondra", Schema);

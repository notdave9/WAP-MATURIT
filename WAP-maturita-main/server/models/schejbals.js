const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  pohlavi: { type: String, required: true },
  ucitel: { type: String, required: true },
});

module.exports = mongoose.model("Schejbal", Schema);

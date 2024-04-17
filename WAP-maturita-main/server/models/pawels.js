const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  nalada: { type: String, required: true },
  chytrost: { type: Number, required: true },
});

module.exports = mongoose.model("Pawel", Schema);

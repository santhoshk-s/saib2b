const mongoose = require("mongoose");

const quotedSchema = new mongoose.Schema({
  productId: {
    type: Number, // Change from Number to String
    required: true,
  },
});

const Quoted = mongoose.model("Quoted", quotedSchema);

module.exports = Quoted;

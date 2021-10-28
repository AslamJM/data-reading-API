const mongoose = require("mongoose");

const readingSchema = new mongoose.Schema({
  distance: {
    type: Number,
    //required: true,
  },
});

module.exports = mongoose.model("Reading", readingSchema);

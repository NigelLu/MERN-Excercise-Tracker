const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    description: { type: String, require: true },
    duration: { type: Number, required: true },
    data: { type: Data, required: true },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;

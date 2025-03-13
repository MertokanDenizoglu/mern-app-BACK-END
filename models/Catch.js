const mongoose = require("mongoose");

const CatchSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    ip: { type: String, require: true },
    desc: { type: String, require: true },
    in_app_time: { type: String, require: true },
  },
  { timestamps: true }
);

const Catch = mongoose.model("catch", CatchSchema);
module.exports = Catch;

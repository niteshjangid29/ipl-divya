const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    teamID: { type: String },
    winningAmount: { type: Number },
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  teamsold: { type: [String] },
  payments: [paymentSchema],
  wallet: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", userSchema);

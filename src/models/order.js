const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

//*************************[👇Order Model Creation👇]****************************//
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

//**********************[👇Connection Creation & export model👇]*****************//
module.exports = mongoose.model("Order", orderSchema);

//👌👌👌👌👌👌👌👌[Thank You Mr Dkyadav Order-Schema End]👌👌👌👌👌👌👌👌//

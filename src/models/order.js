const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

//*************************[πOrder Model Creationπ]****************************//
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

//**********************[πConnection Creation & export modelπ]*****************//
module.exports = mongoose.model("Order", orderSchema);

//ππππππππ[Thank You Mr Dkyadav Order-Schema End]ππππππππ//

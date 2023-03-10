const mongoose = require("mongoose");

//*************************[πProduct Model Creationπ]**************************//
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Title is Required",
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: "Description is Required",
      trim: true,
    },
    price: {
      type: Number,
      required: "Price is Required",
    },
    currencyId: {
      type: String,
      required: "CurrencyId is Required",
      trim: true,
    },
    currencyFormat: {
      type: String,
      required: "CurrencyFormat is Required",
      trim: true,
      default: "βΉ",
    },
  },
  { timestamps: true }
);

//**********************[πConnection Creation & export modelπ]*****************//
module.exports = mongoose.model("Product", productSchema);

//πππππππ[Thank You Mr Dkyadav Product-Schema End]ππππππππ//

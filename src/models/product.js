const mongoose = require("mongoose");

//*************************[👇Product Model Creation👇]**************************//
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
      default: "₹",
    },
  },
  { timestamps: true }
);

//**********************[👇Connection Creation & export model👇]*****************//
module.exports = mongoose.model("Product", productSchema);

//👌👌👌👌👌👌👌[Thank You Mr Dkyadav Product-Schema End]👌👌👌👌👌👌👌👌//

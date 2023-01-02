const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route");
const { mongoose } = require("mongoose");

//*********************[All-Express-Method's Store-App Variable]******************//
const app = express();

//*****************************[Convert the Json Forms]***************************//
app.use(bodyParser.json());

//***************************[Mongo-DB & Nodejs Connection]***********************//
mongoose
  .connect(
    "mongodb+srv://Dharmendra:dkyadav123@cluster0.kq9bu.mongodb.net/A-simple-Order-Management-System",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Hello Mr.Dk MongoDb is connected"))
  .catch((err) => console.log(err));

//******************************[Global-Middleware]*******************************//
app.use("/", route);

//*****************************[Port Creation]************************************//
app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running 🏃 on port " + (process.env.PORT || 3000));
});

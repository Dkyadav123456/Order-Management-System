const express = require("express");
const router = express.Router();

//*************************[๐Invalid Or Wrong Url Api's๐]**********************//
//it is a optional
// if api is invalid OR wrong URL
router.all("/*", function (req, res) {
  res
    .status(404)
    .send({ status: false, msg: "The api you requested is not available" });
});
//***************************************[๐]*************************************//

module.exports = router;

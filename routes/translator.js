var express = require("express");
var router = express.Router();
const translator = require("../lib/translatorCredentials");

router.post("/", function (req, res,next) {
    var texto = req.body.v;
   const translateParams = {
   text: texto,
   modelId: "en-pt",
};

   var variavel;

  translator.languageTranslator
    .translate(translateParams)
    .then((translationResult) => {
      console.log(JSON.stringify(translationResult, null, 2));

      return res.json(translationResult);
    })
    .catch((err) => {
      console.log("error:", err);
    });
});

module.exports = router;

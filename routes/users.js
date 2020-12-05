var express = require('express');
var router = express.Router();
const { languageTranslator } = require('../lib/translatorCredentials');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const translateParams = {
    text: 'where can i watch Jojo',
    modelId: 'en-pt',
};

var variavel;

languageTranslator.translate(translateParams)
    .then(translationResult => {
        console.log(translationResult.result.translations[0].translation);
        
        return res.json(translationResult.result.translations[0].translation);
    })
    .catch(err => {
        console.log('error:', err);
    });
    
});

module.exports = router;

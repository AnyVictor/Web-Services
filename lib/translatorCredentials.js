const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
  version: '2020-11-29',
  authenticator: new IamAuthenticator({
    apikey: 'ZYqnH42VcqcgrUV7gMKr5Z8kjJ3OGCD3g8HBJvNJYGeq',
  }),
  serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/adf1b4fd-e010-4239-8742-5fbb77c85f30',
});
module.exports = {languageTranslator};
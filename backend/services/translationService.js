const { TranslationServiceClient } = require("@google-cloud/translate").v3;
const client = new TranslationServiceClient();
const projectId = process.env.GCLOUD_PROJECT;
const location = "global";

async function translate(text, targetLanguage) {
  const [response] = await client.translateText({
    parent: `projects/${projectId}/locations/${location}`,
    contents: [text],
    targetLanguageCode: targetLanguage
  });
  return response.translations[0].translatedText;
}

module.exports = { translate };

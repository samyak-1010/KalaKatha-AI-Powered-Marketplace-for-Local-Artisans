const speech = require("@google-cloud/speech");
const client = new speech.SpeechClient();

async function transcribe(audioBase64, languageCode = "hi-IN") {
  const audio = { content: audioBase64 };
  const config = { encoding: "LINEAR16", sampleRateHertz: 16000, languageCode };
  const request = { audio, config };

  const [response] = await client.recognize(request);
  return response.results.map(r => r.alternatives[0].transcript).join("\n");
}

module.exports = { transcribe };

const aiplatform = require("@google-cloud/aiplatform");
const { PredictionServiceClient } = aiplatform.v1;

const client = new PredictionServiceClient();

async function generateStory(rawText) {
  // Example with Gemini text model
  // Replace with your endpoint + model ID
  const endpoint = "projects/PROJECT_ID/locations/us-central1/publishers/google/models/gemini-1.5-pro";
  const [response] = await client.predict({
    endpoint,
    instances: [{ content: rawText }]
  });

  return response.predictions[0].content || "AI failed to generate story.";
}

module.exports = { generateStory };

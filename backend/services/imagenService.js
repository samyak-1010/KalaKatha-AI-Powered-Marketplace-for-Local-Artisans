// Pseudo-example since Imagen + Veo SDKs are private preview
// Replace with REST API call when available
async function generateMedia(description) {
  return {
    posterUrl: `https://dummy-storage.googleapis.com/posters/${Date.now()}.png`,
    videoUrl: `https://dummy-storage.googleapis.com/videos/${Date.now()}.mp4`
  };
}

module.exports = { generateMedia };

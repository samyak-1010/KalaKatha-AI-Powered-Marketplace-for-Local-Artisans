const db = require("../config/firestore");

/**
 * Simple recommendation logic:
 * 1. Fetch buyer preferences (stored in Firestore).
 * 2. Match products with similar tags or categories.
 * 3. Return top N recommendations.
 */
async function getRecommendations(buyerId) {
  // Step 1: Fetch buyer preferences
  const buyerDoc = await db.collection("buyers").doc(buyerId).get();
  if (!buyerDoc.exists) throw new Error("Buyer not found");

  const buyerData = buyerDoc.data();
  const preferredCategory = buyerData.preferredCategory || "handicraft";

  // Step 2: Query products matching category
  const productsRef = db.collection("products");
  const snapshot = await productsRef.where("category", "==", preferredCategory).limit(5).get();

  let recommendations = [];
  snapshot.forEach(doc => {
    recommendations.push({ id: doc.id, ...doc.data() });
  });

  // Step 3: If no match, return random few
  if (recommendations.length === 0) {
    const allProducts = await productsRef.limit(5).get();
    allProducts.forEach(doc => {
      recommendations.push({ id: doc.id, ...doc.data() });
    });
  }

  return recommendations;
}

module.exports = { getRecommendations };

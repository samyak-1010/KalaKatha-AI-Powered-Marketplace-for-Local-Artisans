const express = require("express");
const artisanRoutes = require("./routes/artisan");
const productRoutes = require("./routes/product");
const mediaRoutes = require("./routes/media");
const recommendationRoutes = require("./routes/recommendation");

const app = express();
app.use(express.json());

app.use("/artisan", artisanRoutes);
app.use("/product", productRoutes);
app.use("/media", mediaRoutes);
app.use("/recommendation", recommendationRoutes);

exports.app = app; // Cloud Function entry

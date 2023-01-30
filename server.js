const express = require("express");
const path = require("path");
const payload = require("payload");

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

// Note: Anything in this assets folder will be publicly available when your app is hosted online.
app.use("/assets", express.static(path.resolve(__dirname, "./assets")));

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(3000);

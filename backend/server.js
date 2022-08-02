const fs = require('fs');
if(fs.existsSync('.env')) {
  console.log("Load environments from .env file")
  require('dotenv').config();
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

async function main() {
  console.log(`Connect to ${process.env.MONGODB_URI}`)
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use(cors());
  app.use(express.json());

  app.use((req, res, next) => {
    next();
  });

  app.use("/", require("./routes"));

  const listener = app.listen(process.env.port || 8001, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });
}

main();

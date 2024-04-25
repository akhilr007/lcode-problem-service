const mongoose = require("mongoose");

const { MONGODB_ATLAS_URL, NODE_ENV } = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV === "development") {
      const connection = await mongoose.connect(MONGODB_ATLAS_URL);
      return connection;
    }
  } catch (error) {
    throw error;
  }
}
module.exports = connectToDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    console.log("database connected successfully");
  } catch (error) {
    console.log("database can not connect", error);
  }
};

module.exports = connectDB;

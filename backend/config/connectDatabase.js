const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    const DBconnect = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `MongoDB connected at host:${DBconnect.connection.host} and database name ${DBconnect.connection.name}`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

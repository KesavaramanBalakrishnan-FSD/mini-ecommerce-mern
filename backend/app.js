const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

const connectDB = require("./config/connectDatabase");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products = require("./routes/product");
const order = require("./routes/order");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/v1/", products);
app.use("/api/v1/", order);

app.listen(process.env.PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV1} at port ${process.env.PORT}`
  );
});

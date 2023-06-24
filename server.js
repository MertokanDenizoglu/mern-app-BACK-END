const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors")
const logger = require("morgan")
const port = process.env.PORT || 5000;
dotenv.config();

//ROUTES START
const categoryRoute = require("./routes/categories.js")
const productRoute = require("./routes/products.js")
const billRoute = require("./routes/bills.js")
const registerRoute = require("./routes/auth.js")
const userRoute = require("./routes/users.js")
//ROUTES END

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

// CORS 
app.use(cors());

//  middleware
app.use(express.json());
app.use(logger("dev"))


app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/auth", registerRoute);
app.use("/api/users", userRoute);

app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});

const mongoose = require("mongoose");

// mongo_url = "see env file"
const mongoUrl = process.env.mongo_url;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connection Successful");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
    process.exit(1); // Exit process with failure
  }
};

connectDB();





// const mongoose = require("mongoose");
// // mongo_url = "see env file"

// mongoose.connect(process.env.mongo_url);

// const db = mongoose.connection;

// db.on("connected", () => {
//   console.log("Mongo Db Connection Successfull");
// });

// db.on("error", () => {
//   console.log("Mongo Db Connection Failed");
// });
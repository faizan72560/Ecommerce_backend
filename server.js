const  app = require("./app");
const mongoose=require("mongoose")
// const express=require("express")
// app=express()
const cloudinary = require("cloudinary");

// Config
require("dotenv").config({ path: "./config.env" });
const PORT=process.env.PORT
console.log(PORT)



app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
  });
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});


// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({ path: "backend/config/config.env" });
// }

// Connecting to database

const DB = process.env.DATABASE;
console.log(DB)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    
    
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(err));


// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

   
cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET
})

// const server = app.listen(process.env.PORT, () => {
//   console.log(`Server is working on http://localhost:${process.env.PORT}`);
// });

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
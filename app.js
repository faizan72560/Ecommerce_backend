const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cloudinary=require("cloudinary")
var cors = require('cors')
require("dotenv").config({ path: "./config.env" });
// const app = express();
// app.use(cors());
const corsOpts = {
    // origin: 'http://localhost:3000',
    origin: process.env.LOCALPORT,
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));

const errorMiddleware = require("./middleware/error");

// Config

const PORT=process.env.PORT

const fileupload = require('express-fileupload'); 



// app.listen(PORT, () => {
    //     console.log(`Server is working on http://localhost:${PORT}`);
    //   });
    
    
    
    
    
    // if (process.env.NODE_ENV !== "PRODUCTION") {
        //   require("dotenv").config({ path: "backend/config/config.env" });
        // }
        
        app.use(express.json());
        app.use(cookieParser());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(fileUpload());
        
        // Route Imports
        const product = require("./routes/productRoute");
        const user = require("./routes/userRoute");
        const order = require("./routes/orderRoute");
        const payment = require("./routes/paymentRoute");
        
        app.use("/api/v1", product);
        app.use("/api/v1",user);
        app.use("/api/v1", order);
        app.use("/api/v1", payment);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
    //   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
    // });
    
    // Middleware for Errors

    
// cloudinary.config({
//     cloud_name:process.env.CLOUD_NAME,
//     api_key:process.env.API_KEY,
//     api_secret:process.env.API_SECRET
// })

    app.use(errorMiddleware);
    
    console.log("hello")
    module.exports = app;
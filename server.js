import express from "express";
import cookieParser from "cookie-parser";
const morgan = require("morgan");
require("dotenv").config();

//Express App
const app = express();

// Middleware
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(morgan("dev"));




// port
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))
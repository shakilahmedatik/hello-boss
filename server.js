import express from "express";
import { readdirSync } from 'fs'
import cookieParser from "cookie-parser";
const morgan = require("morgan");
import './database/db'
require("dotenv").config();


//Express App
const app = express();

// Middleware
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

// routes
readdirSync('./routes').map(r => app.use('/api', require(`./routes/${r}`)))



// port
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))
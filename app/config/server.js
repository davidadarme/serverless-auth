import express from 'express';
import cors from "cors";
import connectDB from "./configDatabase";
import dotenv from 'dotenv';
import "express-async-errors";
// import cookieParser from "cookie-parser";
// import Router from "./routes/index.js";
// import { APIGatewayProxyHandler } from 'aws-lambda'; // aws lambda handler
dotenv.config();
// Router(server);

const app = express();
const port = process.env.PORT;

app.use (cors());
app.use(express.json());
app.disable("x-powered-by");
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

connectDB();

// Rutas
app.use('/api/users', usersRoutes);

app.use((err, _req, res, next) => {
    res.status(500).json({
        message: "Internal Server Error"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
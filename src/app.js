import express from "express";
import cors from 'cors';
import { ApiError } from "./helper/ApiError.js";

const app = express();


// we can customise the origin as well here, adding multiple origin.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


// commmon middleware here on express
app.use(express.json()) // req size must be less or equal to 20kb.
app.use(express.urlencoded({ extended: true })) // req data must be url encoded like @ # $ like this 
// app.use(express.static("public"))


// Our School router
import  schoolRoutes  from "./routes/school.routes.js";

app.use("/api/v1", schoolRoutes)




// here our custom error response middleware

app.use((err, req, res, next) => {
    console.error(err.stack);

    if (err instanceof ApiError) {
        return res
                .status(err.statusCode)
                .json({
                    statusCode: err.statusCode,
                    message: err.message,
                    success: err.success,
                    errors: err.errors, // Use `errors` from ApiError class
                    stack: err.stack // Optionally include stack trace if needed
                });
    }

    return res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
        success: false
    });
});






export {
    app,
}
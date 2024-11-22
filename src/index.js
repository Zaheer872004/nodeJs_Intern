import { app } from "./app.js";
import { prisma } from "./dbConfig/dbConfig.js";
import dotenv from "dotenv";
dotenv.config({}) // automatically detect the .env file 


const PORT = process.env.PORT || 4000


prisma.$connect()
.then(() => {
    app.listen(PORT,()=>{
        console.log(`Server running in http://localhost:${PORT}`);
    })
})
.catch(() => {
    console.log("Error connecting to database");
})

import dotenv from "dotenv"
import {app} from "./src/app.js"
import connectDB from "./src/db/dbConnection.js"

dotenv.config({
    path:"./.env"
})

connectDB()
    .then(()=>{
        app.listen(process.env.PORT || 7000)
        app.on("error",(error)=>{
            console.log("Database connection error", error)
        })
        console.log("database is listning at port ", process.env.PORT||7000)
    })
    .catch((err)=>{
        console.log(`Database connection error:` ,err)
    })

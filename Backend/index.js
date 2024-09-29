import dotenv from "dotenv"
import {app} from "./src/app.js"
import connectDB from "./src/db/dbConnection.js"

dotenv.config({
    path:"./.env"
})

const PORT = process.env.PORT || 7000;
connectDB()
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
          });
        app.on("error",(error)=>{
            console.log("Database connection error", error)
        })
        console.log("database is listning at port ", process.env.PORT||7000)
    })
    .catch((err)=>{
        console.log(`Database connection error:` ,err)
    })

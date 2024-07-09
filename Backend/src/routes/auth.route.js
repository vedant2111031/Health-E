import express from "express"
import {login , signUp} from "../controllers/auth.controller.js"
import {upload} from "../middlewares/multer.js"
const router=express.Router();

router.route("/register")
    .post(
        upload.fields(
            [{
                name:"photo",
                maxcount:1
            }]
        ),
        signUp
    )

router.route("/login")
    .post(login)

router.route("/")
    .get((req,res)=>res.send("testing testing"))

export default router
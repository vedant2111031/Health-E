import express from "express"
import {login , signUp} from "../controllers/auth.controller.js"

const router=express.Router();

router.route("/signup")
    .post(signUp)

router.route("/login")
    .post(login)

router.route("/")
    .get((req,res)=>res.send("testing testing"))

export default router
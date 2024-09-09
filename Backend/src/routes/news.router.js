import express from "express"
import { getNews } from "../controllers/news.controller.js"
const router=express.Router()

router.route("/get")
    .get(getNews)

export default(router)
import express from "express"
import { getAllReviews, createReview } from "../controllers/review.controller.js"
import { authenticate,restrict } from "../auth/verifyToken.js"

const router=express.Router({mergeParams:true})

// review should assciate with specific doctor we use nested router
// eg.  /doctor/docotrId/reviews

router.route("/")
    .get(getAllReviews)
    .post(authenticate , restrict(["patient"]),createReview)


export default router
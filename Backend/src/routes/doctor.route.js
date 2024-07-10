import express from "express"

import { updateDoctor, deleteDoctor, getAllDoctor,getSingleDoctor, getDoctorProfile } from "../controllers/doctor.controller.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.route.js"
const router=express.Router()

router.use("/:doctorId/reviews", reviewRouter);

router.route("/:id")
    .get(getSingleDoctor)
    .put(authenticate, restrict(["doctor"]) ,updateDoctor)
    .delete(authenticate, restrict(["doctor"]) ,deleteDoctor)

router.route("/profile/me")
    .get(authenticate, restrict(["doctor"]), getDoctorProfile)

router.route("/").get(getAllDoctor)


export default router
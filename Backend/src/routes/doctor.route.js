import express from "express"

import { updateDoctor, deleteDoctor, getAllDoctor,getSingleDoctor } from "../controllers/doctor.controller.js";

const router=express.Router()

router.route("/:id")
    .get(getSingleDoctor)
    .put(updateDoctor)
    .delete(deleteDoctor)

router.route("/").get(getAllDoctor)


export default router
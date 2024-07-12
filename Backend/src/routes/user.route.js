import express from "express"
import { updateUser, deleteUser, getAllUser,getSingleUser, getUserProfile, getMyAppointments } from "../controllers/user.controller.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import {upload} from "../middlewares/multer.js"
const router=express.Router()

router.route("/:id")
    .get(authenticate, restrict(["patient"]) , getSingleUser)
    .put(authenticate, restrict(["patient"]) ,  upload.fields(
        [{
            name:"photo",
            maxcount:1
        }]
    ),
    updateUser)
    .delete(authenticate, restrict(["patient"]) ,deleteUser)

router.route("/profile/me")
    .get(authenticate,restrict(["patient"]),getUserProfile)

router.route("/appointments/my-appointments")
    .get(authenticate,restrict(["patient"]),getMyAppointments)

router.route("/").get(authenticate, restrict(["admin"]) ,getAllUser)


export default router
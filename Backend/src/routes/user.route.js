import express from "express"
import { updateUser, deleteUser, getAllUser,getSingleUser } from "../controllers/user.controller.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
const router=express.Router()

router.route("/:id")
    .get(authenticate, restrict(["patient"]) , getSingleUser)
    .put(authenticate, restrict(["patient"]) ,updateUser)
    .delete(authenticate, restrict(["patient"]) ,deleteUser)

router.route("/").get(authenticate, restrict(["admin"]) ,getAllUser)


export default router
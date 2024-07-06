import express from "express"

import { updateUser, deleteUser, getAllUser,getSingleUser } from "../controllers/user.controller.js";

const router=express.Router()

router.route("/:id")
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

router.route("/").get(getAllUser)


export default router
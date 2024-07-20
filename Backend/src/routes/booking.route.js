import express from 'express'
import {authenticate, restrict} from '../auth/verifyToken.js';
import { getCheckoutSession,statusChange , deleteBooking} from '../controllers/bookingController.js';

const router=express.Router()

router.route('/checkout-session/:doctorId')
    .post(authenticate,getCheckoutSession)


router.route('/statusChange/:id')
    .put(authenticate,restrict(["doctor"]),statusChange)


router.route("/deleteBooking/:id")
    .delete(authenticate,restrict(["doctor"]),deleteBooking)

export default router;
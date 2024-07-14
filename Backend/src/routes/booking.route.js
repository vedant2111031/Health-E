import express from 'express'
import {authenticate} from '../auth/verifyToken.js';
import { getCheckoutSession } from '../controllers/bookingController.js';

const router=express.Router()

router.route('/checkout-session/:doctorId')
    .post(authenticate,getCheckoutSession)

export default router;
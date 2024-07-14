import { User } from '../models/user.model.js';
import { Doctor } from '../models/doctor.model.js';
import { Booking } from '../models/booking.model.js';
import Stripe from 'stripe';
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from "../utils/ApiResponse.js"

export const getCheckoutSession =asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.doctorId);
  const user = await User.findById(req.userId);

  if (!doctor || !user) {
    throw new ApiError(404, "Doctor or user not found");
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: doctor.ticketPrice * 100,
    currency: 'inr',
    payment_method_types: ['card'],
    description: `Payment for consultation with Dr. ${doctor.name}`,
    metadata: {
      doctorId: doctor._id.toString(),
      userId: user._id.toString(),
    },
  });

  const booking = new Booking({
    doctor: doctor._id,
    user: user._id,
    ticketPrice: doctor.ticketPrice,
    paymentIntentId: paymentIntent.id,
  });

  await booking.save();

  res.status(200).json(new ApiResponse(200, { clientSecret: paymentIntent.client_secret }, 'Successfully created payment intent'));
});

import { User } from '../models/user.model.js';
import { Doctor } from '../models/doctor.model.js';
import { Booking } from '../models/booking.model.js';
import stripePackage from 'stripe';
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from "../utils/ApiResponse.js"


import Stripe from "stripe"



export const getCheckoutSession =asyncHandler(async (req, res) => {

  const doctor = await Doctor.findById(req.params.doctorId);
  const user = await User.findById(req.userId);

  if (!doctor || !user) {
    throw new ApiError(404, "Doctor or user not found");
  }

  const timeSlot=req.body.timeSlot

  if(!timeSlot || timeSlot==undefined){
    throw new ApiError(404,"Time Slot is required")
  }
  const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)


  const session =await stripe.checkout.sessions.create({
   payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.CORS_ORIGIN}/checkout-success`,
      cancel_url: `${process.env.CORS_ORIGIN}//${req.get('host')}/doctors/${doctor.id}`,
      customer_email:user.email,
      client_reference_id:req.params.doctorId,
      billing_address_collection: 'required',

      line_items:[
        {
          price_data:{
            currency:'inr',
            unit_amount:doctor.ticketPrice*100,
            product_data:{
              name:doctor.name,
              description:doctor.bio,
              images:[doctor.photo]
            }
          },
          quantity:1 

        }
      ]
    });


  const booking = new Booking({
    doctor: doctor._id,
    user: user._id,
    ticketPrice: doctor.ticketPrice,
    session:session.id,
    timeSlot:timeSlot
  });
  await booking.save()


  await User.findByIdAndUpdate(user._id , {$push:{appointments:booking._id}})
  await Doctor.findByIdAndUpdate(doctor._id , {$push:{appointments:booking._id}})



  res.status(200).json(new ApiResponse(200 , session , "successfully paid"))

});
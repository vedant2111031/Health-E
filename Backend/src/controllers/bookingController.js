import { User } from '../models/user.model.js';
import { Doctor } from '../models/doctor.model.js';
import { Booking } from '../models/booking.model.js';
// import stripePackage from 'stripe';
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from "../utils/ApiResponse.js"
import Stripe from "stripe"


export const statusChange= asyncHandler(async(req,res)=>{

  const bookingId=req.params.id
  const doctorId=req.userId

  const doctor=Doctor.findById(doctorId)
  if(!doctor){
    throw new ApiError(404,"Doctor does not exist") 
  }

  const status=req.body.newStatus
  const booking=await Booking.findByIdAndUpdate(bookingId,
      {$set: {status:status}},
      {new:true })

  if(!booking){
    throw new ApiError(404,"This booking does not exit please refresh the page")
  }

  res.status(200).json(new ApiResponse(200, booking, "status is updated successfully"))
});


export const getCheckoutSession =asyncHandler(async (req, res) => {

  const doctor = await Doctor.findById(req.params.doctorId);
  const user = await User.findById(req.userId);


  if (!user) {
    throw new ApiError(404, "user not found (User should patient only)");
  }

  if (!doctor) {
    throw new ApiError(404, "Doctor not found");
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
              images:[doctor.photo],
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

export const deleteBooking=asyncHandler(async(req,res)=>{
   
  const bookingId=req.params.id
  const doctorId=req.userId
  

  const doctor=await Doctor.findById(doctorId)
  if(!doctor){
      throw new ApiError(404,"Doctor does not exist")
  }
  

  const booking=await Booking.findByIdAndDelete(bookingId)
  if(!booking){
      throw new ApiError(404, "This booking doesnot exist please refresh the page")
  }

  if(!doctor._id.equals(booking.doctor._id)){
      throw new ApiError(400, "doctor Id miss match")
  }

  const userId=booking.user._id

  const updatedDoctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { $pull: { appointments: bookingId } },
      { new: true }
    );


    const updateUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { appointments: bookingId } },
      { new: true }
    );

    res.status(200).json(new ApiResponse(200, updatedDoctor ,"Booking deleted successfull"))

})
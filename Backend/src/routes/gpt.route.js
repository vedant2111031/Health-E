import express from 'express';
import {handleGPTRequest} from '../controllers/gptContoller.js';

const router = express.Router();

// Define the route and connect it to the controller function
router.route("/chat")
    .post(handleGPTRequest)

export default router;


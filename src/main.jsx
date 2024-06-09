import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignUpForm from './Components/SignUpForm.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import LoginForm from './Components/LoginForm.jsx'
import VerificationCodeForm from './Components/VerificationCodeForm.jsx'
import UserDetails from './Components/UserDetails.jsx'
import UserSelection from './Components/UserSelection.jsx'
import ProfileInfo from './Components/ProfileInfo.jsx'
import MedicalInfoForm from './Components/MedicalInfoForm.jsx'
import UploadPrescriptionForm from './Components/UploadPrescriptionForm.jsx'
import ProcessingScreen from './Components/ProgressingScreen.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<LoginForm/>
  },
  {
    path:"/SignUpForm",
    element:<SignUpForm/>
  },
  {
    path:"/VerificationCodeForm",
    element:<VerificationCodeForm/>
  },
  {
    path:"/LoginForm",
    element:<LoginForm/>
  },
  {
    path:"/UserSelection",
    element:<UserSelection/>
  },
  {
    path:"/UserDetails",
    element:<UserDetails/>
  },
  {
    path:"/ProfileInfo",
    element:<ProfileInfo/>
  },
  {
    path:"/MedicalInfoForm",
    element:<MedicalInfoForm/>
  },
  {
    path:"/UploadPrescriptionForm",
    element:<UploadPrescriptionForm/>
  },
  {
    path:"/ProgressingScreen",
    element:<ProcessingScreen/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

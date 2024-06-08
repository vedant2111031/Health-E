import { useState } from 'react'

import './App.css'
import LoginForm from './Components/LoginForm'
import SignUpForm from './Components/SignUpForm'
import VerificationCodeForm from './Components/VerificationCodeForm'
import UserSelection from './Components/UserSelection'
import UserDetails from './Components/UserDetails'
import ProfileInfo from './Components/ProfileInfo'
import MedicalInfoForm from './Components/MedicalInfoForm'
import UploadPrescriptionForm from './Components/UploadPrescriptionForm'
import ChatList from './Components/ChatList'
import ProcessingScreen from './Components/ProgressingScreen'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LoginForm/> */}
    {/* <SignUpForm/> */}
    {/* <VerificationCodeForm/> */}
    {/* <UserSelection/> */}
    {/* <UserDetails/> */}
    {/* <ProfileInfo/> */}
    {/* <MedicalInfoForm/> */}
    {/* <UploadPrescriptionForm/> */}
    {/* <ChatList/> */}
    <ProcessingScreen/>
    </>
  )
}

export default App

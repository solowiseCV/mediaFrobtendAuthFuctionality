import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Signin from './pages/Signin'
import { Signup } from "./pages/Signup"
import { EmailVerification } from "./pages/EmailVerification"
import { Homepage } from "./pages/Homepage"
import { Onboarding } from "./pages/Onboarding"
import { ForgotPassword } from "./pages/ForgotPassword"
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { LandingPage } from "./pages/LandingPage"
// import { ProfilePage } from "./pages/ProfilePage"


function App() {
  axios.defaults.withCredentials =true
 /* const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getLoginStatus())
  
  },[dispatch])*/
  return (
    <div>
      <BrowserRouter>
        <ToastContainer/>
        <Routes>
          <Route index element={<Signup />}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="EmailVerification" element={<EmailVerification/>}/>
          <Route path="Homepage" element={<Homepage/>}/>
          <Route path="Onboarding" element={<Onboarding/>}/>
          <Route path="ForgotPassword" element={<ForgotPassword/>}/>
          {/* <Route path="LandingPage" element={<LandingPage/>}/>
          <Route path="ProfilePage" element={<ProfilePage/>}/> */}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

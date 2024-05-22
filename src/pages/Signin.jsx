import React, { useState,useEffect } from 'react';
import { PopupModal } from '../components/PopupModal';
import './Pages.css';
import {Link, useNavigate} from "react-router-dom"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { validateEmail } from "../utils/index.js"
import { RESET_AUTH, login } from "../redux/features/auth/authSlice.js"
import Loader from '../components/loader/Loader.jsx';


const initialState = {
    email : "",
    password :""
  }
const Signin = () => {
    const [openPopUp, setOpenPopUp] = useState(false);     //To handle the display of the popup 

    const handleForgotPassword = () => {
        setOpenPopUp(true);
    }

    const afterPopupDisplay = {  //after displaying the popup, this handles the blurring of the other elements
        filter: openPopUp ? 'blur(5px)' : 'none',
        pointerEvents: openPopUp ? 'none' : null,
    }
    
    const [formData, setFormData] = useState(initialState)
    const {email,password} = formData;
    const {isLoading,isLoggedIn, isSuccess} = useSelector((state)=>state.auth)
  
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
    const handleInputChange=(e) => {
      const {name, value} = e.target;
      setFormData({...formData,[name]:value});
    }
      const loginUser =async (e) =>{
       e.preventDefault();
       if(!email || !password){
        return toast.error("All fields are required")
       }
  
       if(password < 6 ){
        return toast.error("password must be at 6 characters")
       }
       if(!validateEmail(email)){
        return toast.error("Enter a valid email")
       }
      
       const userData = {
         email,password
       }
        dispatch(login(userData))
    };
   
     
     useEffect(()=>{
        if(isSuccess && isLoggedIn)  {
          navigate("/homepage")
  
        }
        dispatch(RESET_AUTH());
     },[isSuccess,isLoggedIn,dispatch,navigate])
  
    return (
    <>
    <>
    {isLoading && <Loader/>}

        <main className='mainStyle' style={afterPopupDisplay}>
        <header className='mediaLogoDiv'>
            <img src="/Media Hub Logo 2 1.png" alt="logo" />
        </header>
        <section className="formWrapper">            
            <form onSubmit={loginUser}>
                <div className='topheading'>
                    <h2>Welcome back!</h2>
                    <p>Kindly Fill in your Correct Log in Details</p>
                </div>
                <div className='formContainer'>
                    <div className='inputgap'> 
                        <input
                            type={"email"}
                            placeholder={"Email..."}
                            name={"email"} 
                            value={email}
                            onChange={handleInputChange}
                        />
                        
                        <div className='passgap'>
                        <input
                            type={"password"}
                            placeholder={"Password..."}
                            name={"password"} 
                            value={password}
                            onChange={handleInputChange}
                        />
                              <p id='forgotPassword' onClick={handleForgotPassword}>
                                  Forgot password?</p>
                        </div>
                    </div>
                    
                    <button type='submit'> Sign In</button>
                </div>
            </form>
          </section>
         
        </main>
           </> 
        <PopupModal 
            open={openPopUp} close={() => setOpenPopUp(false)}
            vector={"/Vector.png"} 
            smsTracking={"/sms-tracking.png"} 
            h3Title={"Forgot your password?"} 
            paragragh={"Enter your email address below to receive a reset code"}
            // type={"email"}
            // placeholder={"Enter email address"} 
            // names={"ForgotPassword"}
            inputs={[
                {
                    type: 'email', placeholder: 'Enter email address', names: 'forgotPassword'
                }
            ]}
            value={"Reset password"}         
            footerSentence={"Didnt recieve a code?"} 
            footerLink={"Try Again"}
        />
      
    </>
  )
}

export default Signin;

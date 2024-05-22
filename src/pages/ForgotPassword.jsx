import React from 'react'
import { PopupModal } from '../components/PopupModal'
import './Pages.css'

export const ForgotPassword = () => {
  return (
    <PopupModal 
        vector={"/Vector.png"} 
        smsTracking={"/sms-tracking.png"} 
        h3Title={"Forgot your password?"} 
        paragragh={"Enter your email address below to receive a reset code"}
        type={"text"}
        placeholder={"Enter email address"} 
        names={"ForgotPassword"}
        value={"Reset password"}         
        footerSentence={"Didnt recieve a code?"} 
        footerLink={"Try Again"}
    />
  )
}

import React from 'react'
import './Pages.css'
import { PopupModal } from '../components/PopupModal'

export const EmailVerification = () => {
  return (
    <PopupModal
      vector={"/Vector.png"}
      smsTracking={"/sms-tracking.png"}
      h3Title={"Verify its you."}
      paragragh={"To verify your email address, please check your inbox and enter the code below"}
      type={"text"}
      placeholder={"Enter 4 digit code"}
      names={"VerifyCode"}
      value={"Verify code"}
      footerSentence={"Didnt recieve an email? "}
      footerLink={"Try Again"}
    />
  )
}



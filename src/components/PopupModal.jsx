import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Pages.css'
import { Inputs } from './Inputs'
import { Button } from './Button'

// INSTRUCTIONS ON HOW TO ADD THE MODIFIED INPUT COMPONENT WHEN CALLING THIS POPUP MODAL COMPONENT
// Example: Using the previous popup modal for the signin page

//(THIS IS THE PREVIOUS WAY WE USED THIS COMPONENT)
// <PopupModal
// open={openPopUp} close={() => setOpenPopUp(false)}
// vector={"/Vector.png"}
// smsTracking={"/sms-tracking.png"}
// h3Title={"Forgot your password?"}
// paragragh={"Enter your email address below to receive a reset code"}
// type={"text"}
// placeholder={"Enter email address"}
// names={"ForgotPassword"}
// value={"Reset password"}
// footerSentence={"Didnt recieve a code?"}
// footerLink={"Try Again"}
// />


// (THIS IS THE NEW WAY TO USE IT. BASICALLY THE MAJOR CHANGES ARE FOR THE INPUT COMPONENT. SO THAT WE CAN ADD ANY NUMBER OF INPUTS WE WANT DEPENDING ON WHAT THE SCREEN WE'RE WORKING ON DEMANDS)
// <PopupModal
// open={openPopUp} close={() => setOpenPopUp(false)}
// vector={"/Vector.png"}
// smsTracking={"/sms-tracking.png"}
// h3Title={"Forgot your password?"}
// paragragh={"Enter your email address below to receive a reset code"}
// inputs={[
//     { type: 'text', placeholder: 'Enter your name', names: 'name', inputStyles: 'inputClass', inputIcon: '👤' },
//     { type: 'email', placeholder: 'Enter your email', names: 'email', inputStyles: 'inputClass', inputIcon: '📧' },
//     Add more input configurations as needed
// ]}
// value={"Reset password"}
// footerSentence={"Didnt recieve a code?"}
// footerLink={"Try Again"}
// /> 


export const PopupModal = ({open, close, selectedAccount, inputs, vector, smsTracking, h3Title, paragragh, type, placeholder, names, value, footerSentence, footerLink}) => {
    if (!open) { return null };
    
    return (
        <>
            <div className="pop-up">

                <div className="modal-wrapper">

                    <section className='verify-container'>
                        <img className='vector' src={vector} alt="" onClick={close}/>
                            
                        <section className='verify-container2'>
                            <div className='div1'>
                                <img src={smsTracking} alt="" />
                                <h3>{h3Title}</h3>
                                <p>{paragragh}</p>
                            </div>

                            <div className='verificationInput'>
                                {/* <Inputs
                                    type={type}
                                    placeholder={placeholder}
                                    names={names} 
                                /> */}
                                 {inputs.map((input, index) => (
                                <Inputs
                                    key={index}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    names={input.names}
                                    inputStyles={input.inputStyles}
                                    inputIcon={input.inputIcon}
                                />
                            ))}
                                <Button customStyle='verificationButton' value={value}/>
                            </div>

                            <footer className='p3'>{footerSentence}<Link className='p3child'>{footerLink}</Link></footer>
                        </section>
                    </section>

                </div>
           
            </div>
    
        </>
  )
}


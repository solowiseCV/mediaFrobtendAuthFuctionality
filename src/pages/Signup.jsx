import React,{useEffect, useState} from "react"
import { Button } from '../components/Button';
import {Link, useNavigate} from "react-router-dom"
import { toast } from "react-toastify"
import { validateEmail } from "../utils/index.js"
import { useDispatch, useSelector } from "react-redux"
import { RESET_AUTH, register } from "../redux/features/auth/authSlice"
import Loader from "../components/loader/Loader.jsx"

const initialState = {
  email : "",
  password :"",
  name : "",

}
export const Signup = () => {
    function SocialButton({ src, alt }) {
        return (
          <div className="social-button">
            <img src={src} alt={alt} className="social-icon" />
          </div>
        );
      }
      
      const socialButtons = [
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a9d85f687ce0a89320f3b43c3bf9b366c4b4445796c478b441301578b192e2e?apiKey=bc155cd4463f4c48a216b01c1991193c&",
          alt: "Google Logo",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5220ac6808577307483f4c6309ba82b2f918bee7db497bec7b6c16a4295cbe5a?apiKey=bc155cd4463f4c48a216b01c1991193c&",
          alt: "Facebook Logo",
        },
      ];
            
      const [formData, setFormData] = useState(initialState)
      const {name,email,password} = formData;
      const {isLoading,isLoggedIn, isSuccess} = useSelector((state)=>state.auth)
    
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
      const handleInputChange=(e) => {
        const {name, value} = e.target;
        setFormData({...formData,[name]:value});
      }
        const registerUser =async (e) =>{
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
          name,email,password
         }
          dispatch(register(userData))
      };
     
       
       useEffect(()=>{
          if(isSuccess && isLoggedIn)  {
            navigate("/homepage")
    
          }
          dispatch(RESET_AUTH());
       },[isSuccess,isLoggedIn,dispatch,navigate])
    
    return (
      <>
    {isLoading && <Loader/>}

        <main className="mainStyle">
            <header className='mediaLogoDiv'>
                <img src="/Media Hub Logo 2 1.png" alt="logo" />
            </header>
            <section className='formWrapper'>
                <form onSubmit={registerUser}>
                    <div className='topheading'>
                        <h2>Let's get you started</h2>
                        <p>
                        Become a MediaHubber today and Keep track of all your Media
                        consumption
                        </p>
                    </div>
                    <div className='formContainer'>
                        <div className='inputgap'>                   
                        <input
                           type="text"
                           placeholder="Full Name..."
                          
                          name="name"
                          value={name}
                          onChange={handleInputChange}
                 
                        />
                    <input
                      type="text"
                      placeholder="Email..."
                      required
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                  />
                 <input
                     type="password"
                     placeholder="Enter your password ..."
                     required
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                  />
              
                        </div>
                        <button
                            type='submit'>
                            Sign up
                           </button>
                        <div className='formFooter'>
                            <p className="p3">Or</p>
                            <div className="socialButtons">
                            {socialButtons.map(({ src, alt }) => (
                                <SocialButton key={src} src={src} alt={alt} />
                            ))}
                            </div>
                            <p className='p3'>Already have an account?
                                <Link className='p3child' to="./Signin"> Sign in </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </section>
        </main>
        </>
    );
   
}

// const MediaHubLogo=()=>{
//     <header className='mediaLogoDiv'>
//         <img src="/Media Hub Logo 2 1.png" alt="logo" />
//     </header>
// }
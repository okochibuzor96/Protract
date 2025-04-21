import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import LoginLogoIcon from '../Images/loginlogoicon.svg';
import loginBackgroundIcon from '../Images/loginbackgroundicon.svg';
import LoginStyle from '../styles/my-LoginPage.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import {useState} from 'react'

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { schema } from "../Validation/Login";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()

    const [viewPWD, setViewPWD] = useState(false)

    const [logIn, setLogIn] = useState(false)

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });
  
    const onSubmit = (data) => {
       
        const user = data.email;
        const pwd = data.password;
        localStorage.setItem('Pwd', JSON.stringify(pwd))
        localStorage.setItem('user', JSON.stringify(user)) 

        setLogIn(true)

        setTimeout(()=>{

            const passWords = window.localStorage.getItem('Pwd')
            const resolvedPwd = JSON.parse(passWords)
            const userInfo = window.localStorage.getItem('user')
            const resolvedUser = JSON.parse(userInfo)

            console.log('user',{resolvedPwd,resolvedUser})

            if(resolvedPwd && resolvedUser){

                navigate('/dashboard')

                setLogIn(false)

                console.log('user',{resolvedPwd,resolvedUser})
            }
            

        },5000)
         
    }

    

  return (
    <div className={LoginStyle.container}>

        
        <img className={LoginStyle.backgroundImage} src={loginBackgroundIcon} alt="Login Background Icon"/>
        

        <div className={LoginStyle.inner_container}>

            
            <img className={LoginStyle.logo} src={LoginLogoIcon} alt="Login Icon"/>
            

            <div className={LoginStyle.inner_container2}>

                <h3>
                    Welcome Back
                </h3>
            
                <h5>
                Please sign into your staff account
                </h5>
            
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                

                <div className={LoginStyle.wrapper}>

                    <div className={LoginStyle.input_container}>

                        <FaRegEnvelope/>

                        <input 
                            type="text"
                            placeholder="Email Address"
                            autoComplete="off"
                            {...register('email')}
                        />
                    </div>
                    {errors.email && <p className={LoginStyle.errorMsg}>{errors.email?.message}</p>}
                </div>

                <div className={LoginStyle.wrapper}>

                    <div className={LoginStyle.input_container}>

                        <IoLockClosedOutline/>

                        <input 
                            type={viewPWD?
                                "text":
                                "password"
                            }
                            placeholder="Enter Password"
                            id="password"
                            {...register('password')}
                        />
                        <span onClick={()=>setViewPWD((prev)=>!prev)}>
                            {
                            viewPWD?
                            <IoEyeOutline/>:
                            <FaRegEyeSlash/>
                            }
                        </span>
                        
                    </div>
                    {errors.password && <p className={LoginStyle.errorMsg}>{errors.password?.message}</p>}
                </div>

                <button type="submit" className={logIn ? LoginStyle.login_btn2 : LoginStyle.login_btn} >

                

                    { 
                        logIn ? (

                            <div className={` ${LoginStyle.spinner} spinner-border text-primary`} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>

                        ):" Login"
                    }
                    
                </button>

               

            </form>

            <div className={LoginStyle.paragraph_container}>

                <p>
                    <a href="#"> Forgot Password?</a>

                    Contact the IT department
                </p>

            </div>
        </div>

        <div className={LoginStyle.backgroundImage2}>

            <svg width="128" height="90%" viewBox="0 0 128 100%" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path opacity="0.3" d="M13 0C13 31.4887 37.5054 57 67.717 57C68.8113 57 69.9447 56.9609 71 56.8828V0H13Z" fill="#428BFF"/>
                <path opacity="0.3" d="M128 0C128 31.4887 103.917 57 74.2264 57C73.1509 57 72.0371 56.9609 71 56.8828V0H128Z" fill="#1D3A5C"/>
                <path opacity="0.3" d="M101 0C101 16.5718 88.3443 30 72.7154 30C72.1436 30 71.5718 30 71 29.9612V0H101Z" fill="#505050"/>
                

            </svg>

            <svg width="131" height="10%" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M4.83186e-06 64C3.28596e-06 99.3662 28.6338 128 64 128L128 128L128 64C128 28.6339 99.3662 -1.25162e-06 64 -2.79753e-06C28.6338 -4.34343e-06 6.37777e-06 28.6338 4.83186e-06 64Z" fill="#428BFF"/>
            </svg>

        </div>
        
    </div>
   
  )
}

export default Login

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
import { useNavigate, useNavigation } from "react-router-dom";

function Login() {

    const [viewPWD, setViewPWD] = useState(false)

    const navigate = useNavigate()

    const {register, handleSubmit, formState:{errors,touchedFields}} = useForm({
        resolver: yupResolver(schema),
    });
  
    const onSubmit = (data) => {
       
        const user = data.email;
        const pwd = data.password;
        window.localStorage.setItem('Pwd', JSON.stringify(pwd))
        window.localStorage.setItem('users', JSON.stringify(user)) 
        navigate('/dashboard') 
         
    }

  return (
    <section>
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
                        {errors.email && <p>{errors.email?.message}</p>}
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
                        {errors.password && <p>{errors.password?.message}</p>}
                    </div>

                    <button className={LoginStyle.login_btn} >
                        Login
                    </button>
                   

                </form>

                <div className={LoginStyle.paragraph_container}>

                    <p>
                        <a href=""> Forgot Password?</a>

                        Contact the IT department
                    </p>

                </div>
            </div>

            <div>

                <svg width="128" height="81%" viewBox="0 0 128 100%" fill="none" xmlns="http://www.w3.org/2000/svg" class=" "  >

                    <path opacity="0.3" d="M13 0C13 31.4887 37.5054 57 67.717 57C68.8113 57 69.9447 56.9609 71 56.8828V0H13Z" fill="#428BFF"/>
                    <path opacity="0.3" d="M128 0C128 31.4887 103.917 57 74.2264 57C73.1509 57 72.0371 56.9609 71 56.8828V0H128Z" fill="#1D3A5C"/>
                    <path opacity="0.3" d="M101 0C101 16.5718 88.3443 30 72.7154 30C72.1436 30 71.5718 30 71 29.9612V0H101Z" fill="#505050"/>
                    <path opacity="0.3" d="M4.83186e-06 932C3.28596e-06 967.366 28.6338 996 64 996L128 996L128 932C128 896.634 99.3662 868 64 868C28.6338 868 6.37777e-06 896.634 4.83186e-06 932Z" fill="#428BFF"/>

                </svg>

                <svg width="141" height="108" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M4.83186e-06 64C3.28596e-06 99.3662 28.6338 128 64 128L128 128L128 64C128 28.6339 99.3662 -1.25162e-06 64 -2.79753e-06C28.6338 -4.34343e-06 6.37777e-06 28.6338 4.83186e-06 64Z" fill="#428BFF"/>
                </svg>

            </div>
           
        </div>

    </section>
  )
}

export default Login

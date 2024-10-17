import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import LoginLogoIcon from '../Images/loginlogoicon.svg';
import loginBackgroundIcon from '../Images/loginbackgroundicon.svg';
import LoginStyle from '../styles/my-LoginPage.module.css';
import 'bootstrap/dist/css/bootstrap.css';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { schema } from "../Validation/Login";
import { useNavigate, useNavigation } from "react-router-dom";

function Login() {

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
                                type="password"
                                placeholder="Enter Password"
                                id="password"
                                {...register('password')}
                            />
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

           
        </div>

    </section>
  )
}

export default Login

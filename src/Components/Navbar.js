import{NavLink,Outlet} from 'react-router-dom'
import Header from "./../Components/Header"
import 'bootstrap/dist/css/bootstrap.css';
import logoIcon from './../Images/logoIcon.svg'
import {NavbarData} from '../Components/NavbarData'
import style from '../styles/my-navbar.module.css';



 const Navbar= ()=> {
  
        
  return (
     
    
      
    <div className={style.block1}>

      <div className={style.block2}>
        
        <div className={style.block3}>
          <img src={logoIcon} alt="logo icon"/>
        </div>

        {NavbarData.map((data,index) => {
        return(
          <NavLink key={index}  to={data.path} className={({isActive})=> {return(isActive? style.active : style.block4)}}> 

            <div className={style.icon}>{data.icon}</div>

            <div >{data.title}</div>
          
          </NavLink>)})
        }
      
      </div>

      <div className=''>
        
        <Header />

        <Outlet />
      </div>

    </div>
   
  
  )
}

export default Navbar
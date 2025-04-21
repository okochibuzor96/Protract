import{NavLink,Outlet} from 'react-router-dom'
import Header from "./../Components/Header"
import 'bootstrap/dist/css/bootstrap.css';
import logoIcon from './../Images/logoIcon.svg'
import {NavbarData} from '../Components/NavbarData'
import style from '../styles/my-navbar.module.css';
import React, { useState } from 'react'
import { CgMenuBoxed } from "react-icons/cg";
import { IoClose } from "react-icons/io5";



 const Navbar= ()=> {

  const [showMenu, setShowMenu] = useState(false)
  
        
  return (
     
    <React.Fragment>
      
      <div className={style.block1}>

        <div className={style.block2}>
          
          <div className={style.block3}>

            <div>

              <button className={style.menuClose} type='button'>

                <IoClose className={style.menuCloseIcon} onClick={()=>setShowMenu((showMenu)=> !showMenu) } />

              </button>

              <img src={logoIcon} alt="logo icon"/>

            </div>

          </div>

          {NavbarData.map((data,index) => {
          return(
            <NavLink key={index}  to={data.path} className={({isActive})=> {return(isActive? style.active : style.block4)}}> 

              <div className={style.icon}>{data.icon}</div>

              <div >{data.title}</div>
            
            </NavLink>)})
          }
        
        </div>

          {

            showMenu && (

              <div className={style.menuContent}>
                
                <div className={style.block3}>

                  <div>

                    <button className={style.menuClose} type='button'>

                      <IoClose className={style.menuCloseIcon} onClick={()=>setShowMenu((showMenu)=> !showMenu) } />

                    </button>

                    <img src={logoIcon} alt="logo icon"/>

                  </div>

                </div>

                {NavbarData.map((data,index) => {
                return(
                  <NavLink key={index}  to={data.path} className={({isActive})=> {return(isActive? style.active : style.block4)}}> 

                    <div className={style.icon}>{data.icon}</div>

                    <div >{data.title}</div>
                  
                  </NavLink>)})
                }
              
              </div>

            )

          }

        <div className={style.block5}>

          <div className={style.headerContainer}>

            <div>

              <button 
                onClick={()=>setShowMenu((showMenu)=> !showMenu)} 
                className={` ${style.menuBtn}`} type="button" 
              >

                <CgMenuBoxed className={` ${style.menuIcon}`}/>

              </button>
              
            </div>
          
            <Header />

          </div>

          <Outlet />
          
        </div>

        <footer>

          {NavbarData.map((data,index) => {
          return(
            <NavLink key={index}  to={data.path} className={({isActive})=> {return(isActive? style.mobileActive : style.mobileBlock4)}}> 

              <div className={style.icon}>{data.icon}</div>

            
            </NavLink>)})
          }

        </footer>


      </div>

    </React.Fragment>
   
  
  )
}

export default Navbar
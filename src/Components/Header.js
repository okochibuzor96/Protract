import 'bootstrap/dist/css/bootstrap.css';
import header from '../styles/my-header.module.css';
import Inputimage from '../Images/Inputimage.svg';
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { CgMenuBoxed } from "react-icons/cg";
import { useEffect } from 'react';

function Header() {

  const navigate = useNavigate()

  const handleClick = ()=>{
    localStorage.removeItem("pwd")
    localStorage.removeItem("user")
    navigate('/login')
  }

  // useEffect(()=>{
  //   localStorage.removeItem("questions")
  // },[])

  return (
  
    <div className={header.block}>

      <div className='me-2'>

        <LiaSearchSolid size={30} color='#A8A8A8'/>

        <input 
          type='test' 
          placeholder='Search' 
          className={header.input}  
        />

      </div>
      
      
      

      <div >
      
        <input type='image' src={Inputimage} className={header.image}/>
      </div>

      <div className={header.image}>
        
        <a className="btn border border-0 e-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

          <IoMdArrowDropdown color='#A8A8A8' size={20}/>

        </a>
      
        <ul className="dropdown-menu" >
          <li><button className="dropdown-item" onClick={handleClick}>Logout</button></li>
          {/* <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li> */}
        </ul>
  
      </div>
    
    
  
    </div>
   
    
  )
}

export default Header

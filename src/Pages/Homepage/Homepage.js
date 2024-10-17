import home from './Style/my-home.module.css'
import Navbar from "../../Components/Navbar"
import img from '../../Images/homePageIcon.png'
import { FaArrowRightLong } from "react-icons/fa6";

// import Login from "../Login";
import {useNavigate, useLocation, Navigate} from 'react-router-dom'

 const Homepage = () => {

  // const passWords = window.localStorage.getItem('Pwd')
  // const resolvedPwd = JSON.parse(passWords)
  // const userInfo = window.localStorage.getItem('users')
  // const resolvedUser = JSON.parse(userInfo)

  
  const navigate = useNavigate()

  

  const handleLogIn = ()=>{
   
    navigate("/login")
   
  }

 const location = useLocation();

  return (

    <main className={home.wrapper}>

      <div>

        <button>Dashboard</button>
        <button>Contractors</button>
        <button>Projects</button>
        <button>Payments</button>
        <button>Personnel</button>
        <button>Reports</button>
        <button>Settings</button>

      </div>

      <div>

        <div>
         <img src={img}/>
        </div>
         

        <div>

          {
            
            [1,2,3,4,5,6].map((item,i)=>(
              <ul>

                <li>
                  {
                    item ===1?
                    "Contractors Module":
                    item ===2?
                    "Projects Module":
                    item ===3?
                    " Payments Module":
                    item === 4?
                    "Reports Module":
                    item === 5?
                    "Settings Module":
                    "Personnel Module"                   
                  }
                </li>

                {
                  item === 1?
                  <>
                    <li>Add Contractors</li>
                    <li>Approve/Deny Contractors</li>
                    <li>Edit Contractors</li>
                    <li>View Contractor details</li>
                    <li >Ban Contractor</li>
                    <li >Deactivate contractor</li>
                  </>:
                  item === 2?
                  <>

                    <li>Add Project</li>
                    <li>View Ongoing Projects</li>
                    <li>View Past projects</li>
                    <li>Filter projects</li>
                    <li>Generate Project Report</li>
                    <li >Reassign Contractor</li>
                    <li >View Milestones</li>
                    <li >View payments</li>

                  </>:
                  item === 3?
                  <>
                
                    <li>Generate payment voucher</li>
                    <li>View payment vouchers</li>
                    <li>View milestone for payment</li>

                  </>:
                  item === 4?
                  <>

                    <li>Generate time based reports (multiple views)</li>
                    <li>Generate sector based reports</li>
                    <li>Generate Finance based reports</li>
                    <li>Generate geopolitical based reports</li>
                    <li >Generate SDG goal based reports</li>
                  </>:
                  item === 5?
                  <>

                    <li>Set yearly budget figure & Upload budget</li>
                    <li>Set Roles & designations</li>
                    <li>Notification Settings</li>
                    <li>Message Templates</li>
                    
                  </>:
                  <>

                    <li>View Personnel</li>
                    <li>Add Personnel</li>
                    <li>Edit User Details</li>
                    
                  </>
                }
        
              </ul>
            ))

          } 
        </div>

        <div className={home.loginBtnWrapper}>

          <button className={home.loginBtn} onClick={handleLogIn}>
            <span>Sign In</span>
            <FaArrowRightLong className={home.fArrow}/>
          </button>

        </div>

       
      
      </div>
      
    </main>
    
    
  )

}

export default Homepage


import { IoMdArrowDropdown } from "react-icons/io";
import dashboard from '../../styles/my-Dashboard.module.css';
import Greetings from'../Time Greeting/Time_Greeting'

function Dherosection() {

  
  return (
    <div
      className={dashboard.block1}
    >
      <div>
        {/* <p className={dashboard.block2}>
          Good Morning,
        </p> */}
        <Greetings/>
        
        <h6 className={dashboard.block3}>
         You're welcome back
        </h6>

      </div>

      <div className={dashboard.block4}>

        <div>
        
          <div className={dashboard.block5}>Duration</div>

          <div className={dashboard.block6}>

            <span className={dashboard.block7}>Today</span>

            <div className="dropdown">
            
              <a className="btn border border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                <IoMdArrowDropdown />

              </a>
            
              <ul className="dropdown-menu" >
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
        
            </div>

          </div>

        </div>

      </div>
       
    </div>)
}

export default Dherosection
import 'bootstrap/dist/css/bootstrap.css';
import header from '../styles/my-header.module.css';
import Inputimage from '../Images/Inputimage.svg';
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";

function Header() {
  return (
    <div >

      <div className={header.block}
      >

        <div>

          <LiaSearchSolid size={30} color='#A8A8A8'/>

          <input 
          type='test'          placeholder='Search' className={header.input}  style={{width:'500px', border:'none'}}
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
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
    
        </div>
      
      
    
      </div>
      
    </div>
    
  )
}

export default Header

import {NavLink,useLocation,useNavigate} from 'react-router-dom';
import style from '../../../styles/my-navbar.module.css';
import navbar from '../../../styles/my-navbar.module.css'

/*style module */
import project from '../my-projects.module.css'


function ProjectNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = ()=> {
    return navigate(`project-details/${1}`)
  }
  
  console.log(location)
  return (
    <div className={project.NavWrapper}>
      
      <button className={project.active }> 
        Projects
      </button>

      <button onClick={handleNavigate} className={ project.navContainer}> 
       Drafts
      </button>

      <button onClick={handleNavigate} className={ project.navContainer}> 
      Archive
      </button>
      
    </div>
  )
}

export default ProjectNavbar
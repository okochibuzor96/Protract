import project from '../../my-projects.module.css';
import {NavLink,useLocation,useNavigate} from 'react-router-dom';


function ProjectDetailNavbar() {
  const location = useLocation();
  
  return (
    <div className={project.ProjectDetailNavbarWrapper}>
         
      <NavLink to='details' className={({isActive})=> {return(isActive? project.activeProjectDetailNavbar : project.notActiveProjectDetailNavbar)}}> 
       Details
      </NavLink>

      <NavLink to="milestone" className={({isActive})=> {return(isActive || location.pathname === "/projects/project-details/milestone"? project.activeProjectDetailNavbar : project.notActiveProjectDetailNavbar)}}> 
       Milestones
      </NavLink>

      <NavLink to='attachments' className={({isActive})=> {return(isActive? project.activeProjectDetailNavbar : project.notActiveProjectDetailNavbar)}}> 
       Attachments
      </NavLink>

      <NavLink to='issues' className={({isActive})=> {return(isActive? project.activeProjectDetailNavbar : project.notActiveProjectDetailNavbar)}}> 
       Issues
      </NavLink>

    </div>
  )
}

export default ProjectDetailNavbar
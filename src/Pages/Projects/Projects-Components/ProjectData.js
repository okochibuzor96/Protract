import contractor from '../../../styles/my-contractors.module.css'
import project from '../my-projects.module.css'
import {useNavigate} from 'react-router-dom'

import { ViewButtons } from '../../../Components/viewButtons'
import { Ongoing } from '../../../Components/Status/Ongoing';
import { Abandoned } from '../../../Components/Status/Abandon';
import { Completed } from '../../../Components/Status/Completed';
import GetUsers from '../../../Components/Pagination/GetUsers'


function ProjectData(props) {

   const navigate = useNavigate()

    const getUser = GetUsers.Project(props)

    return (
    <div>
        {
            getUser?.map((item,i)=>(
            <div key={i} className={project.block70}> 
                <div>
                    {item.projectReferenceNumber}
                </div>

                <div >{item.projectTitle}</div>

                <div>{item.projectType}</div>

                <div>{item.projectSector}</div>

                <div>{item.contractor}</div>

                <div className={project.block72}>

                   { 
                        item.status ==='Ongoing'?
                        <Ongoing/>:
                        item.status ==='Abandoned'?
                        <Abandoned/>:
                        <Completed/>
                    }
                  
                    <ViewButtons click={()=>navigate(`/projects/project-details/${item.id}`)}/>
                
                </div>
            </div>
        ))
        } 
    </div>
  )
}

export default ProjectData
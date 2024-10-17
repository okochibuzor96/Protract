import contractor from '../../../styles/my-contractors.module.css'
import project from '../../Projects/my-projects.module.css'
import {useNavigate} from 'react-router-dom'
import { ViewButtons } from '../../../Components/viewButtons'
import GetUser from '../../../Components/Pagination/GetUsers'
import { Ongoing } from '../../../Components/Status/Ongoing'
import { Abandoned } from '../../../Components/Status/Abandon'
import { Completed } from '../../../Components/Status/Completed'


function Payment_Data(props) {

    const navigate =  useNavigate()
   
    const getUser = GetUser.Project(props)

    return (
    <div>
        {
         getUser.map((item,i)=>(
            <div key={i} className={project.block70}> 
                <div>
                    {item.projectReferenceNumber}
                </div>

                <div >{item.projectTitle}</div>

                <div>{item.mileStone.length}</div>

                <div>{item.projectValue}</div>

                <div>{item.contractor}</div>

                <div className={project.block72}>

                   { 
                        item.status ==='Ongoing'?
                        <Ongoing/>:
                        item.status ==='Abandoned'?
                        <Abandoned/>:
                        <Completed/>
                    }

                    
                   
                      <ViewButtons click={() =>navigate(`payment_details/${item.id}`)}/>
                   
                
                </div>
            </div>
        ))
        } 
    </div>
  )
}

export default Payment_Data
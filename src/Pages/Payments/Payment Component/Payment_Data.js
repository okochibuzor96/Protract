import contractor from '../../../styles/my-contractors.module.css'
import project from '../../Projects/my-projects.module.css'
import {Link,useNavigate} from 'react-router-dom'
import {useQuery} from 'react-query'
import {getProjects} from '../../hooks/useQuery/useProject'
import { ViewButtons } from '../../../Components/viewButtons'


function Payment_Data() {

    const {data} = useQuery('payment', getProjects)

    const navigate =  useNavigate()

    return (
    <div>
        {
        data?.data.map((item,i)=>(
            <div key={i} className={project.block70}> 
                <div>
                    {item.projectReferenceNumber}
                </div>

                <div >{item.projectTitle}</div>

                <div>{item.mileStone.length}</div>

                <div>{item.projectValue}</div>

                <div>{item.contractor}</div>

                <div className={project.block72}>

                    <div className={item.status ==='Pending'? contractor.block73: item.status=== 'Active'? contractor.block74 : contractor.block75}>

                    
                        <input
                            type="radio"
                            value=""
                            aria-label="Radio button for following text "
                            className={contractor.block76}
                        />

                        {item.status === 'Pending'? <div className={contractor.block77}>{item.status}</div> : item.status === 'Active'? <div className={contractor.block77}>{item.status}</div>: <div className={contractor.block77}>{item.status}</div>}
                        
                    </div>
                   
                      <ViewButtons click={() =>navigate(`payment_details/${item.id}`)}/>
                   
                
                </div>
            </div>
        ))
        } 
    </div>
  )
}

export default Payment_Data
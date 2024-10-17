import {useState} from 'react';
import{useNavigate} from 'react-router-dom'
import GetUsers from '../../Components/Pagination/GetUsers';
import dashboard from '../../styles/my-Dashboard.module.css';

/*import for button*/

import {ViewButtons} from '../../Components/viewButtons'
import { Ongoing } from '../../Components/Status/Ongoing';
import { Abandoned } from '../../Components/Status/Abandon';
import { Completed } from '../../Components/Status/Completed';

function RecentProjectlist(props) {

 const getUsers = GetUsers(props)

    const [items,setItems] = useState([
        {
            Id :8656436,
            companySlogan:'Runtill Press& Printings Limited',
            project:'Education',
            companyName:'Kakawa Discount House Limited ',
            projectStatus:{
                statusText:'Abandoned',
                viewText:'View'

            }
        },
        {
            Id :8656435,
            companySlogan:'Building board ready women',
            project:'Education',
            companyName:'KWakawaka Travel Industries',
            projectStatus:{
                statusText:'Abandoned',
                viewText:'View'

            }
        },
        {
            Id :9003237,
            companySlogan:'Solar Forward',
            project:'nfrastucture',
            companyName:'Nollywood Rentals',
            projectStatus:{
                statusText:'Ongoing',
                viewText:'View'

            }
        },
        {
            Id :5425683,
            companySlogan:'Decent work and Economic growth',
            project:'Empowerment',
            companyName:'Chocolate & Charly Limited',
            projectStatus:{
                statusText:'Completed',
                viewText:'View'

            }
        },
        {
            Id :9002984,
            companySlogan:'Strenthening governance of the Niger Delta biodiversity resources Strenthening governance of the Niger Delta biodiversity resources',
            project:'Health',
            companyName:'United Nigeria Consortium Company',
            projectStatus:{
                statusText:'Abandoned',
                viewText:'View'

            }
        },
    ])
    const navigate = useNavigate()

  return (
        <div className='block41-1'>
            
            {props.data?.data && getUsers.map((item,i)=>{
                return(
                    <div
                    key={i}
                    className={`${dashboard.block41} mb-2 p-2 bg-white rounded `}
                    >
                    
                        <div  className={dashboard.block42}>{item.projectReferenceNumber}</div>
                        
                        <div  className={dashboard.block42}>{item.projectTitle}</div>
                        
                        <div  className={dashboard.block42}>{item.projectType}</div>

                        <div  className={dashboard.block42}>{item.contractor}</div>

                        { 
                            item.status ==='Ongoing'?
                            <Ongoing/>:
                            item.status ==='Abandoned'?
                            <Abandoned/>:
                            <Completed/>
                        }

                        <ViewButtons
                        click={()=>navigate(`/projects/project-details/:${item.id}`)}
                        />

                        
                    
                    </div>

                )
            })}

        </div>
    )
}

export default RecentProjectlist
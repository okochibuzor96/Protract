import {useState} from 'react';
import{Link} from 'react-router-dom'

/*import for button*/

import {ViewButtons} from '../../Components/viewButtons'

function RecentProjectlist() {



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
  return (
        <div className='block41-1'>

            
            {items.map((item)=> (
                <div
                key={item.Id}
                className=" mb-2 p-2 bg-white rounded block41"
                >
                
                    <div  className=" block42">{item.Id}</div>
                    
                    <div  className=" block42">{item.companySlogan}</div>
                    
                    <div  className=" block42">{item.project}</div>

                    <div  className=" block42">{item.companyName}</div>

                    { item.projectStatus.statusText ==='Ongoing'? <div className='d-flex align-items-center rounded-4 block49'>
                        <div className="mt-2 me-1  ps-2">
                            <input
                            className="form-check-input mt-0 block53"
                            type="radio"
                            value=""
                            aria-label="Radio button for following text "
                            />
                        </div>
                        <div className="">Ongoing</div>
                    </div> :(

                    <div
                        className="d-flex align-items-center rounded-4  block47" style={item.projectStatus.statusText ==='Completed'? {backgroundColor:'green'} : null }
                    >
                        <div className="mt-2 me-1  ps-2">
                            <input
                            className="form-check-input mt-0 block53"
                            type="radio"
                            value=""
                            aria-label="Radio button for following text "
                            />
                        </div>

                       

                        <div className="">{item.projectStatus.statusText}</div>
                    </div>)}

                     
                        
                        {item.projectStatus.viewText === 'View'?<Link to='/projects'><ViewButtons/></Link> :''}
                        
                    

                
                </div>
            ))}

        </div>
    )
}

export default RecentProjectlist
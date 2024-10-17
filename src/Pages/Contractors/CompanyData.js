/*import for components*/
import {Completed} from "../../Components/Status/Completed";
import {InProgres} from "../../Components/Status/InProgres";
import {NotStarted} from "../../Components/Status/NotStarted";
import {ViewButtons} from '../../Components/viewButtons';

/*import from styles*/
import contractor from '../../styles/my-contractors.module.css';

/*import from react*/
import { useState } from "react";



function CompanyData() {

  const [data, setData] = useState([
    {
        Id: '5236850',
        ProjectTitle: 'Construction of 140 Classrooms in Abajana, Kogi State',
        Status:{
            StatusState: 'Completed',
            View: 'View'
        }
    },
    {
        Id: '5236850',
        ProjectTitle: 'Girl child literacy enhancement programme',
        Status:{
            StatusState: 'InProgres',
            View: 'View'
        }
    },
    {
        Id: '5236850',
        ProjectTitle: 'Community health centre construction',
        Status:{
            StatusState: 'Completed',
            View: 'View'
        }
    },
    {
        Id: '5236850',
        ProjectTitle: 'Construction of 140 Classrooms in Abajana, Kogi State',
        Status:{
            StatusState: 'NotStarted',
            View: 'View'
        }
    },
    {
        Id: '5236850',
        ProjectTitle: 'Girl child literacy enhancement programme',
        Status:{
            StatusState: 'Completed',
            View: 'View'
        }
    },
    {
        Id: '5236850',
        ProjectTitle: 'Girl child literacy enhancement programme',
        Status:{
            StatusState: 'Completed',
            View: 'View'
        }
    }
]);

  return (
    <section>
      
      <div className="d-flex mt-4 mb-4 align-center">
        <div className={contractor.project}>
          Project
        </div>

        <div className={contractor.dataLength}>
         {data.length}
        </div>
      </div>
      

      {data.map((data,index) =>(
        <div className={contractor.companyData} key={index}>
          
          <div className={contractor.dataId}>
            {data.Id}
          </div>

          <div className={contractor.ProjectTitle}>
            {data.ProjectTitle}
          </div>

          <div >

            <div className={contractor.ButtonWrapper}>

              {data.Status.StatusState=== 'Completed'? <Completed/>: data.Status.StatusState=== 'InProgres'? <InProgres/>: 
                data.Status.StatusState=== 'NotStarted'? <NotStarted/>: null
              }
            
              <ViewButtons/>
            </div>  
              
          </div>
        </div>
      ))}
    </section>
  )
}

export default CompanyData;
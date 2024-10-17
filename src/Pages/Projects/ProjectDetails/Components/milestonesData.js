import project from '../../my-projects.module.css';

import { TbCaretUpDownFilled } from "react-icons/tb";

import Paid from "../../../../Components/Status/Paid"
import {Completed} from "../../../../Components/Status/Completed"
import {Pending} from "../../../../Components/Status/Pending"
import {NotStarted2} from "../../../../Components/Status/NotStarted2"

import {ViewButtons} from "../../../../Components/viewButtons"

import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import {getProjectDetails} from '../../../hooks/useQuery/useProject'
import DataContext from '../../../Context API/Create_Context';
import { useContext } from 'react';

function MilestonesData() {

  const {projects} = useContext(DataContext)

    const {id} = useParams()

    const data = projects.find((item)=> item.id === id)

    // const queryClient = useQueryClient()
  
    // const {data} = useQuery(['milestone', id], getProjectDetails,{
    //   initialData: () => {
        
    //     const Milestone = queryClient.getQueriesData('project')?.data?.find((project) => project.id === parseInt(id))
  
    //     if(Milestone){
    //       return{
    //         data:Milestone
    //       }
    //     }else{
    //       return undefined
    //     }
    //   }
    // })

  return (
    <div>
        <div className={project.mileStonethead}>
            
            <div>S/N</div>
            <div>Milestone Name</div>
            <div>Percentage</div>
            <div>Due Date</div>
            <div>Issues</div>
            <div> 
                <TbCaretUpDownFilled/> 
                <div>Status</div>
            </div>
            
        </div>
       
        {data.mileStone.map((data,i) =>(
                <div key={i} className={project.mileStonetbody}>
                    <div>{i+1}</div>
                    <div>{data.description}</div>
                    <div>{data.payment}</div>
                    <div>{data.dueDate}</div>
                    <div>{data.Issues}</div>
                    <div>
                        

                        {
                            data.payment ===''? <NotStarted2/>: data.payment === '5%'?  <Pending/>: data.payment ==='100%'? <Completed/> : <Paid/>
                        }

                        <ViewButtons/>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default MilestonesData
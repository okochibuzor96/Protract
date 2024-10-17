import project from '../../my-projects.module.css';

import { TbCaretUpDownFilled } from "react-icons/tb";

import { issuesData } from "../Data/IssuesData"

import Low from "../../../../Components/Status/Low"
import High from "../../../../Components/Status/High"
import Medium from "../../../../Components/Status/Medium"
import {Pending} from "../../../../Components/Status/Pending"
import Resolved from "../../../../Components/Status/Resolved"

import {ViewButtons} from "../../../../Components/viewButtons"


function Issues() {
  return (
    <div>
      <div className={project.issuesthead}> 
              
        <div>
          issue Title
        </div>

        <div>Date Logged</div>
        <div>Severity</div>
        <div>Milestone</div>

        <div> 
          <TbCaretUpDownFilled/> 
          <div>Status</div>
        </div>

      </div>

      <div>
        {
          issuesData.map((data) => (
            <div className={project.issuestbody}>
              
              <div>
                {data.issueTitle}
              </div>

              <div>{data.dateLogged}</div>
              
                  
                {data.Severity ==='Low'? <Low/> : data.Severity ==='High'? <High/> : <Medium/>}

              <div>{data.mileStone}</div>
             

              <div>
              
                {
                 data.Status.StatusState ==='Pending'? <Pending/>: <Resolved/>
                }

               <ViewButtons/>

                

              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Issues
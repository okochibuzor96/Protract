import { Outlet,useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import image from '../../../../Images/view-profile.svg'
import { BsArrowLeftShort } from 'react-icons/bs';
import {getContractorDetails, getProjectDetails,getProjectDetails2} from '../../../hooks/useQuery/useProject'
import contractor from '../../../../styles/my-contractors.module.css'
import project from '../../my-projects.module.css'
import editButton from '../ProjectDetailStyle/my-Edit-Button.module.css'
import GenerateAdvanceButton from "./GenerateAdvanceButton";
import Attachment from './Attachment'
import Details from './Details'
import Issues from './Issues'
import Milestone from './Milestone'
import {useQuery,useQueryClient} from 'react-query'

function ProjectDetailsIndex() {

  const navigate = useNavigate();
  const {id} = useParams()

  const queryClient = useQueryClient()

  const {data} = useQuery(['details', id], getProjectDetails,{
    initialData: () => {
      
      const details = queryClient.getQueriesData('project')?.data?.find((project) => project.id === parseInt(id))

      if(details){
        return{
          data:details
        }
      }else{
        return undefined
      }
    }
  })
 
  const {data:contractorImg, isLoading} = useQuery(['contractorImg', 5083], getContractorDetails)

  const [currentDetail, setCurrentDetail] = useState(0)

  const [detailsHeader, setDetailsHeader] = useState([])

  useEffect(() => {
    if(currentDetail === 0) {

      const headerItem = [...detailsHeader]

      headerItem[0] = <div className={project.activeProjectDetailNavbar}> 
      Details
     </div>

      headerItem[1] = <div className={project.notActiveProjectDetailNavbar}>Milestones</div>

      headerItem[2] = <div className={project.notActiveProjectDetailNavbar}>Attachment</div>

      headerItem[3] = <div className={project.notActiveProjectDetailNavbar}>Issues</div>

      setDetailsHeader(headerItem)

    }else if(currentDetail === 1){

      const headerItem = [...detailsHeader]

      headerItem[0] = <div className={project.notActiveProjectDetailNavbar}> 
      Details
     </div>

      headerItem[1] = <div className={project.activeProjectDetailNavbar}>MileStones</div>

      headerItem[2] = <div className={project.notActiveProjectDetailNavbar}>Attachment</div>

      headerItem[3] = <div className={project.notActiveProjectDetailNavbar}>Issues</div>

      setDetailsHeader(headerItem)

    }else if(currentDetail === 2){

      const headerItem = [...detailsHeader]

      headerItem[0] = <div className={project.notActiveProjectDetailNavbar}> 
        Details
      </div>

      headerItem[1] = <div className={project.notActiveProjectDetailNavbar}>MileStones</div>

      headerItem[2] = <div className={project.activeProjectDetailNavbar}>Attachment</div>

      headerItem[3] = <div className={project.notActiveProjectDetailNavbar}>Issues</div>

      setDetailsHeader(headerItem)

    }else if (currentDetail === 3){

      const headerItem = [...detailsHeader]

      headerItem[0] = <div className={project.notActiveProjectDetailNavbar}> 
       Details
      </div>

      headerItem[1] = <div className={project.notActiveProjectDetailNavbar}>MileStones</div>

      headerItem[2] = <div className={project.notActiveProjectDetailNavbar}>Attachment</div>

      headerItem[3] = <div className={project.activeProjectDetailNavbar}>Issues</div>

      setDetailsHeader(headerItem)
    }
  },[currentDetail])

  const displayDetail = [
    <Details
    data={data}
    />,
    <Milestone/>,
    <Attachment
    data={data}
    />,
    <Issues/>
  ]

  return (
    <div>

      <div className={project.headerDiv}>

        <div className={`${project.backContentWrapper} d-flex align-item-center`}>

          <BsArrowLeftShort  onClick={() => navigate('/projects')} className={contractor.backArrow }/>

          <div className={project.backTextWrapper}>
            <p>
              Back to All Projects
            </p>

            <h6>
            Strenthening governance of the Niger Delta <br/> biodiversity resources
            </h6>
          </div>

        </div>

        <div className={project.headersButtonWraper}>
          
          
          <GenerateAdvanceButton/>

          <button onClick={()=> navigate(`edit-project`)} className={editButton.Editbutton}>
                  
            Edit

          </button>      

        </div>

        
      </div>

      <hr/>

      <div className={project.contentWrapper}>

        <div className={project.profileImageWrapper}>
          <img src={contractorImg?.data?contractorImg?.data?.avarta:image} />

          <h6>
            {
              data?.data.contractor
            }
          </h6>

          <button onClick={()=>navigate('/contractors/contractor_details/5083')}>View Profile</button>

        </div>
        
      
        <div>
         
          <div className={project.ProjectDetailNavbarWrapper}>
            {
              detailsHeader.map((headers,i) =>{
                return <div onClick={() => setCurrentDetail(i)} key={i}>
                  {headers}
                </div>
              })
            }
          </div>

          <div className={project.projectDetailsContent}>

            {displayDetail[currentDetail]} 
            
          </div>
          {/* <div><Outlet/> </div> */}

        </div>
        
      </div>
    </div>
  )
}

export default ProjectDetailsIndex

import { useState,useEffect } from 'react';

import { BsArrowLeftShort } from 'react-icons/bs';

import Newproject from './my-NewProject.module.css';
import SaveDraftButton from './SaveDraftButton';
import Details from './Details';
import Contractor from './Contractor';
import SDGGoals from './SDGGoals';
import Location from './Location';
import Attachment from './Attachment';
import Milestones from './MileStones';
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'

function NewProjectLayout() {

  const navigate = useNavigate()

  const mileStoneInitialValues ={
    title:'',
    description: '',
    payment: '',
    dueDate:''
  }

  const  locationInitialValues ={
    locationGeopoliticalZone:'',
    locationState:'',
    locationGPSLocation:'',
    locationFederalConsistuency:'',
    locationLG:'',
  }
  
  const [currentPage, setCurrentPage] = useState(0)
  const [fieldValues, setFieldValues] = useState({
    projectTitle:'',
    projectReferenceNumber:'',
    projectValue:'',
    projectSector:'',
    projectType:'',
    geopoliticalZone:'',
    federalConsistuency:'',
    state:'',
    localGovernment:'',
    GPSLocation:'',
    beneficiaryCommunities:'',
    projectYear:'',
    document: [
      {
        docTitle: "",
        doc: "",
        docName: ""
      }
    ],
    imageValues:[],
    mileStone:[mileStoneInitialValues],
    projectContractor:'',
    location:[locationInitialValues],
    status:''

  })

  const [projectsHeader,setProjectsHeader] = useState([])

  

 

  const handleNext = (value) => {

    
    if(currentPage ===parseInt(5)){
      setFieldValues((oldValues) =>({...oldValues, ...value}));
    }else{
      setCurrentPage((page) => (page +1))
      setFieldValues((oldValues) =>({...oldValues, ...value}));
    }

    
  }

 

  const handlePrev = (value) => {
    setFieldValues((oldValues) =>({...oldValues, ...value}));
    setCurrentPage((page) => page -1)
  }

  const [pageTitle, setPageTitle] = useState('')

  const validationSchema = Yup.object({})

 
  
  useEffect(() =>{
     if(currentPage === 0) {

      const headerList = [...projectsHeader]

      headerList[0] = <div className={Newproject.activeHeader}>Details</div>
      headerList[1] = <div className={Newproject.headerItems}>Contractor</div>
      headerList[2] = <div className={Newproject.headerItems}>SDG Gaols</div>
      headerList[3] = <div className={Newproject.headerItems}>Location</div>
      headerList[4] = <div className={Newproject.headerItems}>Attachment</div>
      headerList[5] = <div className={Newproject.headerItems}>Milestone</div>

      setProjectsHeader(headerList)

      setPageTitle('Project Details')


     }else if(currentPage === 1) {

      const headerList = [...projectsHeader]

      headerList[0] = <div className={Newproject.headerItems}>Details</div>
      headerList[1] = <div className={Newproject.activeHeader}>Contractor</div>
      headerList[2] = <div className={Newproject.headerItems}>SDG Gaols</div>
      headerList[3] = <div className={Newproject.headerItems}>Location</div>
      headerList[4] = <div className={Newproject.headerItems}>Attachment</div>
      headerList[5] = <div className={Newproject.headerItems}>Milestone</div>

      setProjectsHeader(headerList)

      setPageTitle('Project Contractor')

     }else if(currentPage === 2) {

      const headerList = [...projectsHeader]

      headerList[0] = <div className={Newproject.headerItems}>Details</div>
      headerList[1] = <div className={Newproject.headerItems}>Contractor</div>
      headerList[2] = <div className={Newproject.activeHeader}>SDG Gaols</div>
      headerList[3] = <div className={Newproject.headerItems}>Location</div>
      headerList[4] = <div className={Newproject.headerItems}>Attachment</div>
      headerList[5] = <div className={Newproject.headerItems}>Milestone</div>

      setProjectsHeader(headerList)

      setPageTitle('SDG Gaols')

     }else if(currentPage === 3) {

      const headerList = [...projectsHeader]

      headerList[0] = <div className={Newproject.headerItems}>Details</div>
      headerList[1] = <div className={Newproject.headerItems}>Contractor</div>
      headerList[2] = <div className={Newproject.headerItems}>SDG Gaols</div>
      headerList[3] = <div className={Newproject.activeHeader}>Location</div>
      headerList[4] = <div className={Newproject.headerItems}>Attachment</div>
      headerList[5] = <div className={Newproject.headerItems}>Milestone</div>


      setProjectsHeader(headerList)

      setPageTitle('Location')

    }else if(currentPage === 4) {

      const headerList = [...projectsHeader]

      headerList[0] = <div className={Newproject.headerItems}>Details</div>
      headerList[1] = <div className={Newproject.headerItems}>Contractor</div>
      headerList[2] = <div className={Newproject.headerItems}>SDG Gaols</div>
      headerList[3] = <div className={Newproject.headerItems}>Location</div>
      headerList[4] = <div className={Newproject.activeHeader}>Attachment</div>
      headerList[5] = <div className={Newproject.headerItems}>Milestone</div>


      setProjectsHeader(headerList)

      setPageTitle('Attachment')

    }else if(currentPage === 5) {

      const headerList = [...projectsHeader]

      headerList[0] = <div className={Newproject.headerItems}>Details</div>
      headerList[1] = <div className={Newproject.headerItems}>Contractor</div>
      headerList[2] = <div className={Newproject.headerItems}>SDG Gaols</div>
      headerList[3] = <div className={Newproject.headerItems}>Location</div>
      headerList[4] = <div className={Newproject.headerItems}>Attachment</div>
      headerList[5] = <div className={Newproject.activeHeader}>Milestone</div>

      setProjectsHeader(headerList)

      setPageTitle('Milestone')
    }
  },[currentPage])
  
    
  const displayPage = [
    <Details
      fieldValues={fieldValues}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />,
    <Contractor
      fieldValues={fieldValues}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />,
    <SDGGoals
      fieldValues={fieldValues}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />,
    <Location
      fieldValues={fieldValues}
      handleNext={handleNext}
      handlePrev={handlePrev}
      locationInitialValues={locationInitialValues}
    />,
    <Attachment
      fieldValues={fieldValues}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />,
    <Milestones
      fieldValues={fieldValues}
      handleNext={handleNext}
      handlePrev={handlePrev}
      mileStoneInitialValues={mileStoneInitialValues}
    />
  ]
  

 
  
  return(
    
    <div className={Newproject.NewProjectLayout}>

      <div  className={Newproject.NewProjectLayoutHero}>

        <div className={Newproject.BackContainer}>

          < BsArrowLeftShort onClick={()=> navigate('/projects')} className={Newproject.backIcon}/>
  
          <div>
            <p>
              Back to All Projects
            </p>
            <h6>
              Create new project
            </h6>
          </div>
          
        </div>

        <div className="d-flex">
            
          <button onClick={()=>navigate('/projects')} className={Newproject.cancelButton}>
            Cancel
          </button>

          <SaveDraftButton/>
           
        </div>

      </div>

      <hr/>

      <div className={Newproject.NewProjectLayoutWrapper}>

        <header>

          {
            projectsHeader.map((item,i) =>(
              <div key={i}> 

                {item}
                
              </div>
            ))
          }

        </header>

        <div className={Newproject.pageTitle}>{pageTitle}</div>
        
        {displayPage[currentPage]}

      </div>

    </div>
  )
}

export default NewProjectLayout
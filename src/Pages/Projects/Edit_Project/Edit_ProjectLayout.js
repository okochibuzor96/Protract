import { useState,useEffect } from 'react';

import { BsArrowLeftShort } from 'react-icons/bs';

import Newproject from '../New_Project/my-NewProject.module.css';
import SaveDraftButton from '../New_Project/SaveDraftButton';
import Details from '../New_Project/Details';
import Contractor from '../New_Project/Contractor';
import SDGGoals from '../New_Project/SDGGoals';
import Location from '../New_Project/Location';
import Attachment from '../New_Project/Attachment';
import Milestones from '../New_Project/MileStones';
import * as Yup from 'yup'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getProjectDetails,updateProjectDetails } from '../../hooks/useQuery/useProject';
import {Formik,Form,Field, useField} from 'formik'
import CRUDfunc from '../../hooks/useQuery/useProject';





function Edit_ProjectLayout() {

  const {id} = useParams()
  const navigate = useNavigate()

  // const queryClient = useQueryClient()

  

  // const {data,isLoading} = useQuery(['editProject', id],getProjectDetails,{
  //   initialData: () =>{
  //     const editValue = queryClient.getQueryData('project')?.data?.find((value) => value.id === parseInt(id))

  //     if(editValue){
  //       return{data:editValue}
  //     }else{
  //       return undefined
  //     }
  //   }
  // })
 

  // const {mutate:editMutate} = useMutation(updateProjectDetails,{
  //   onSuccess: () =>{
  //     queryClient.invalidateQueries('editProject')
  //   }
  // })

  // const {mutate:deleteMutate} = useMutation((value)=>CRUDfunc.update(`projects/${id}`,value),{
  //   onSuccess: () =>{
  //     queryClient.invalidateQueries('editProject')
  //   }
  // })

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
    imageValues:[''],
    mileStone:[mileStoneInitialValues],
    projectContractor:'',
    location:[locationInitialValues],
    status:'',
    document:[{}]

  })

  // useEffect(()=>{
  //   setFieldValues(data?.data)
  // })

  const [currentPage, setCurrentPage] = useState(0)

  const [projectsHeader,setProjectsHeader] = useState([])

  const  handleNext = (value, final = false) => {
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
      // data={data}
      handleNext={ handleNext}
      handlePrev={handlePrev}
      // editMutate={editMutate}
      id={id}
    />,
    <Contractor
      // data={data}
      handleNext={ handleNext}
      handlePrev={handlePrev}
      // editMutate={editMutate}
      id={id}
    />,
    <SDGGoals
      // data={data}
      handleNext={ handleNext}
      handlePrev={handlePrev}
      // editMutate={editMutate}
      id={id}
    />,
    <Location
      // data={data}
      handleNext={ handleNext}
     handlePrev={handlePrev}
    //  editMutate={editMutate}
     id={id}
    />,
    <Attachment
    // data={data}
      handleNext={ handleNext}
     handlePrev={handlePrev}
    //  editMutate={editMutate}
     id={id}
    //  deleteMutate={deleteMutate}
    />,
    <Milestones
      // data={data}
      handleNext={ handleNext}
      handlePrev={handlePrev}
      // editMutate={editMutate}
      id={id}
    />
  ]

  
  
  // if(isLoading){
  //   return <div>...loading</div>
  // }
  
  return(
    <div className={Newproject.NewProjectLayout}>

      <div  className={Newproject.NewProjectLayoutHero}>

        <div className={Newproject.BackContainer}>

          < BsArrowLeftShort onClick={()=> navigate(`/projects`)} className={Newproject.backIcon}/>
  
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
            
          <button onClick={()=> navigate(`/projects/project-details/${id}`)} className={Newproject.cancelButton}>
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

export default Edit_ProjectLayout
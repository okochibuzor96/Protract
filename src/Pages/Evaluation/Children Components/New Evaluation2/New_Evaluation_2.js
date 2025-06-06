import {useMutation, useQuery,useQueryClient} from 'react-query'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import newEvaluation2 from '../../Styles/my-new_evaluation_2.module.css'
import {getProjectDetails,getContractorDetails,postEvaluationDetails} from '../../../hooks/useQuery/useProject'
import Project_Attributes from './Project_Attributes'
import NinputType_PC from './NinputType_PC'
import Facilities from './Facilities'
import Impact from './Impact'
import Compliance from './Compliance'
import Contractor_Info from './Contractor_Info'
import Project_Info from './Project_Info'
import DataContext from '../../../Context API/Create_Context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeftShort } from "react-icons/bs";
import contractor from '../../../../styles/my-contractors.module.css'


function New_Evaluation_2(props) {

  const {
    Idvalue,
    Idvalue2,
    Next,
    Prev,
    projectNo,
    projectSector,
    filterValue,
    filterValue2
  } = props

  const initialValues ={
    PRinput1:'',
    PRinput2:'',
    PRinput3:'',
    PRinput4:'',
    PRinput5:'',
    PRinput6:'',
    PRinput7:'',
    PRinput8:'',
    CRinput1:'',
    CRinput2:'',
    CRinput3:'',
    CRinput4:'',
    CRinput5:'',
    CRinput6:'',
    CRinput7:'',
    NJC:'',
    NPR:'',
    TNSafter1:'',
    TNSafter2:'',
    TNSafter3:'',
    TNSafter4:'',
    TNSbefore1:'',
    TNSbefore2:'',
    TNSbefore3:'',
    TNSbefore4:'',
    TNCafter:"",
    TNCbefore:"",
    TNFSgood1:"",
    TNFSbad1:"",
    TNFStotal1:'',
    FGgood2:'',
    FGbad2:'',
    FGtotal2:''
     
  }
  
  // const {mutate} = useMutation(postEvaluationDetails)

  // const queryClient = useQueryClient()

  // const {data:project} = useQuery(['searchdetails', Idvalue], getProjectDetails,{
  //   initialData: () => {
      
  //     const details = queryClient.getQueryData('searchProject')?.data?.find((project) => project.id === parseInt(Idvalue))

  //     if(details){
  //       return{
  //         data:details
  //       }
  //     }else{
  //       return undefined
  //     }
  //   }
  // })

  // const {data:contractordetails} = useQuery(["contractorPaymentInfo",Idvalue2], getContractorDetails,{
  //   initialData: () =>{

  //     const details = queryClient.getQueryData('searchContractor')?.data?.find((project) => project.id === parseInt(Idvalue2))

  //     if(details){
  //       return{
  //         data:details
  //       }
  //     }else{
  //       return undefined
  //     }

  //   }
  // })

  const validationSchema = Yup.object({
    PRinput1:Yup.string().required('This field is required'),
    PRinput2:Yup.string().required('This field is required'),
    PRinput3:Yup.string().required('This field is required'),
    PRinput4:Yup.string().required('This field is required'),
    PRinput5:Yup.string().required('This field is required'),
    PRinput6:Yup.string().required('This field is required'),
    PRinput7:Yup.string().required('This field is required'),
    PRinput8:Yup.string().required('This field is required'),
    CRinput1:Yup.string().required('This field is required'),
    CRinput2:Yup.string().required('This field is required'),
    CRinput3:Yup.string().required('This field is required'),
    CRinput4:Yup.string().required('This field is required'),
    CRinput5:Yup.string().required('This field is required'),
    CRinput6:Yup.string().required('This field is required'),
    CRinput7:Yup.string().required('This field is required'),
    NJC:Yup.number().required('This field is required'),
    NPR:Yup.number().required('This field is required'),
    TNSafter1:Yup.number().required('This field is required'),
    TNSafter2:Yup.number().required('This field is required'),
    TNSafter3:Yup.number().required('This field is required'),
    TNSafter4:Yup.number().required('This field is required'),
    TNSbefore1:Yup.number().required('This field is required'),
    TNSbefore2:Yup.number().required('This field is required'),
    TNSbefore3:Yup.number().required('This field is required'),
    TNSbefore4:Yup.number().required('This field is required'),
    TNCafter:Yup.number().required('This field is required'),
    TNCbefore:Yup.number().required('This field is required'),
    TNFSgood1:Yup.number().required('This field is required'),
    TNFSbad1:Yup.number().required('This field is required'),
    TNFStotal1:Yup.number().required('This field is required'),
    FGgood2:Yup.number().required('This field is required'),
    FGbad2:Yup.number().required('This field is required'),
    FGtotal2:Yup.number().required('This field is required')
  })

  const {evaluation, setEvaluation,projects} = useContext(DataContext)

  const navigate = useNavigate()

  const id = evaluation.length? evaluation[evaluation.length-1].id + 1 : 1

  const data = projects.find((project)=> project.id === parseInt(Idvalue))

  const onSubmit = (values) =>{
    // Next(values)
   

    const  payload =  {
      ...values,
      status: "Active"
    }

    payload.projectFormId = Idvalue
    payload.contractorFormId = Idvalue2
    payload.projectReferenceNumber = projectNo
    payload.projectSector = projectSector
    payload.contractorFormValue = filterValue2
    payload.projectFormValue = filterValue
    payload.id = id

    const newValue = [...evaluation,payload]

    setEvaluation(newValue)

    localStorage.setItem('evaluation', JSON.stringify(newValue))


    // console.log('pr',payload)
    // return mutate(payload)

    navigate('/evaluation')

  }
  return (

    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {
        () =>{
          return(
            <Form>

              <>

                <header>

                  <div className={contractor.herosection1}> 
            
                    <BsArrowLeftShort onClick={() => navigate("/evaluation")} className={contractor.backArrow}/>
                      
                    <div>

                      <p className={contractor.backArrowText1}>
                        Back to All Evaluation
                      </p>
          
                      <h6 className={contractor.backArrowText2}> 
                        {data.projectReferenceNumber}
                      </h6>
          
                    </div>
                        
                  </div>

                  {/* <div>{data.projectReferenceNumber}</div> */}

                  <div>

                    <button type='button' onClick={Prev}>Cancel</button>

                    <button type='submit'>Evaluate</button>

                  </div>

                </header>

                <div className={ newEvaluation2. newEvaluation2Wrapper}>

                  <div>

                  
                    <Contractor_Info
                      // contractordetails={contractordetails}
                      contractorFormId={Idvalue2}
                    />

                    <Project_Info
                      // project={project}
                      projectFormId={Idvalue}
                    />

                    <Project_Attributes
                    
                    />

                    <Compliance/>
                    
                    <Impact/>

                    <NinputType_PC/>

                    <Facilities/>

                  </div>

                </div>

              </> 

            </Form>
          )
        }
      }
    </Formik>
  
  )
}

export default New_Evaluation_2
import {useQuery, useQueryClient} from 'react-query'
import ProjectAttributeDetails from '../New Evaluation2/Project_Attributes'
import ComplianceDetails from '../New Evaluation2/Compliance'
import ImpactDetails from '../New Evaluation2/Impact'
import NinputType_PCDetails from '../New Evaluation2/NinputType_PC'
import FacilitiesDetails from '../New Evaluation2/Facilities'
import newEvaluation2 from '../../Styles/my-new_evaluation_2.module.css'
import Contractor_Info from '../New Evaluation2/Contractor_Info'
import Project_Info from '../New Evaluation2/Project_Info'
import {Formik, Form} from 'formik'
import { useParams } from 'react-router-dom'
import { getEvaluationDetails} from '../../../hooks/useQuery/useProject'
import { getContractorDetails} from '../../../hooks/useQuery/useProject'
import { getProjectDetails} from '../../../hooks/useQuery/useProject'


function Details_Layout() {

  const {id} = useParams()

  const queryClient = useQueryClient()

  const {data} = useQuery(['evaluationDetails',id],getEvaluationDetails,{
    initialData: () =>{
      const details =  queryClient.getQueryData('evaluation')?.data?.find((value) => value.id === parseInt(id))

      if(details){
        return{data:details}
      }else{
        return undefined
      }

      
    }
  })

  const Idvalue = data?.data.contractorFormId
  const Idvalue2 = data?.data.projectFormId

  const {data:project} = useQuery(['searchdetails', Idvalue], getProjectDetails,{
    initialData: () => {
      
      const details = queryClient.getQueryData('searchProject')?.data?.find((project) => project.id === parseInt(Idvalue))

      if(details){
        return{
          data:details
        }
      }else{
        return undefined
      }
    }
  })

  const {data:contractordetails} = useQuery(["contractorPaymentInfo",Idvalue2], getContractorDetails,{
    initialData: () =>{

      const details = queryClient.getQueryData('searchContractor')?.data?.find((project) => project.id === parseInt(Idvalue2))

      if(details){
        return{
          data:details
        }
      }else{
        return undefined
      }

    }
  })

  return (

    <div className={newEvaluation2.details}>

      <div>

        <div className='me-5'>{project?.data.projectReferenceNumber}</div>
          
          <button className='ms-5' type='submit'>Download</button>

        

      </div>
    
      <div className={ newEvaluation2. newEvaluation2Wrapper}>

        
        <Formik>
          {
            () =>{
              return(
                <Form>

                  <Contractor_Info
                    contractordetails={contractordetails}
                  />

                  <Project_Info
                    project={project}
                  />
                  
                  <ProjectAttributeDetails
                   data ={data}
                  />
                  <ComplianceDetails
                    data ={data}
                  />
                  <ImpactDetails
                    data ={data}
                  />
                  <NinputType_PCDetails
                    data ={data}
                  />
                  <FacilitiesDetails
                    data ={data}
                  />
                </Form>
              )
            }
          }
        </Formik>
        
      </div>
      
    </div>
  )
}

export default Details_Layout
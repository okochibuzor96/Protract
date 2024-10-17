// import {ComplianceData} from './ComplianceData'
import {ErrorMessage, Field} from 'formik'
import { useLocation, useParams } from 'react-router-dom'
import newEvaluation2 from '../../Styles/my-new_evaluation_2.module.css'
import Texterror from './Field_Error-Component'

function Compliance({data}) {

    const ComplianceData = [
        {
            label:'Physical quality',
            value1:'selected',
            value2:'deselected'
        },
        {
            label:'Technical Quality',
            value1:'selected',
            value2:'deselected'
        },
        {
            label: 'Site clearing after construction',
            value1:'selected',
            value2:'deselected'
        },
        {
            label: 'Have the issues been addressed?',
            value1:'selected',
            value2:'deselected'
        },
        {
            label:'Any issues raised by OSSAP-SDG technical team?',
            value1:'selected',
            value2:'deselected'
        },
        {
            label:'Supplies (Furniture, Equipment, etc)?',
            value1:'selected',
            value2:'deselected'
        },
        {
            label:'Do the supplies compy to technical specification?',
            value1:'selected',
            value2:'deselected'
        } 
        
    ]

    const location = useLocation()
    const {id} = useParams()

  return (
    <div className={newEvaluation2.formContainer}>

        <div>
        Compliance to Specification
        </div>

        <hr/>
        

        <div className={newEvaluation2.RinputContainer}>

        

            {
                ComplianceData.map((item,i)=>(

                    <main key={i}>
                      
                        <ErrorMessage name={`CRinput${i+1}`} component={Texterror}/>

                        <div className={newEvaluation2.RinputWrapper} key={i}>

                        

                            <div>{item.label}</div>

                            <Field name={`CRinput${i+1}`}>
                            {
                                ({field})=>{
                                return <>

                                {
                                    location.pathname === `/evaluation/evaluation-details/${id}`?
                                    <>
                                        {
                                        data?.data[`CRinput${i+1}`] === 'selected'?
                                        <span className={newEvaluation2.yesDiv}>Yes</span>:
                                        data?.data[`CRinput${i+1}`] === 'deselected'?
                                        <span className={newEvaluation2.noDiv}>No</span>:""
                                        }
                                      
                                    </>:
                                    <>
                                    <input type='radio' {...field} value={item.value1} defaultChecked={field.value === item.value1}/>

                                    <input type='radio' {...field} value={item.value2} defaultChecked={field.value === item.value2}/>
                                    </>
                                }

                                    

                                </>
                                }
                            }
                            </Field>

                            {/* <Field name={`CRinputB${i}`}>
                            {
                                ()=>{
                                return 
                                }
                            }
                            </Field> */}

                        </div>
                    </main>

                
                ))
            }

        </div>
        
    </div> 
  )
}

export default Compliance
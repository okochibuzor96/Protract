import {Field, ErrorMessage} from 'formik'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import newEvaluation2 from '../../Styles/my-new_evaluation_2.module.css'
import Texterror from './Field_Error-Component'

// import {AttributeData} from './AttributeData'

function Project_Attributes({data}) {

    const location = useLocation()
    const {id} = useParams()

    const [itemValues, setItemValues]= useState([
        {
            label:'Is the Project Located within or outskirt of the community?',
            value1:'selected',
            value2:'deselected'
        },
        {
            label:'Is the project fenced?',
            value1:'selected',
            value2:'deselected'
        },
        {
            label:'Is there a security personnel for the project?',
            value1:'selected',
            value2:'deselected'
        },
        {
            label:'Is the project currently in use',
            value1:'selected',
            value2:'deselected'
        },
        {
            label:'Is there electricity at the location?',
            value1:'selected',
            value2:'deselected'
        },
        {
            label:'Is there solar power at the location?',
            value1:'selected',
            value2:'deselected'
        },
        {
            label:'Is there a convenience at the project, especially schools?',
            value1:'selected',
            value2:'deselected'
        },
        {
            label:'Is there any building that requires renovation?',
            value1:'selected',
            value2:'deselected'
        }
    ])

  return (
    <div className={newEvaluation2.formContainer}>

        <div>Project Characteristics/Attributes</div>

        <hr/>

        <div className={newEvaluation2.RinputContainer}>

            {
                itemValues.map((item,i)=>(

                    <main key={i}>
                      
                        <ErrorMessage name={`PRinput${i+1}`} component={Texterror}/>

                        <div className={location.pathname === `/evaluation/evaluation-details/${id}`?newEvaluation2.RinputWrapperDetails:newEvaluation2.RinputWrapper} key={i}>

                            <div>{item.label}</div>

                            <Field name={`PRinput${i+1}`}>
                            {
                                ({field,fieldValue})=>{
                               
                                
                                return<>
                                {
                                    location.pathname === `/evaluation/evaluation-details/${id}`?
                                    <>
                                      {
                                        data[`PRinput${i+1}`] === 'selected'?
                                        <span className={newEvaluation2.yesDiv}>Yes</span>:
                                        <span className={newEvaluation2.noDiv}>No</span>
                                      }
                                        
                                    </>:
                                    <>
                                    <input type='radio' {...field} value={item.value1}  defaultChecked={fieldValue === item.value1}/>
                                    <input type='radio' {...field} value={item.value2}  defaultChecked={fieldValue === item.value2}/>
                                    </>
                                }
                                
                                </>
                                }
                            }
                            </Field>

                        </div>

                    </main>
                    
                ))
            }

        </div>

    </div>

  )
}

export default Project_Attributes
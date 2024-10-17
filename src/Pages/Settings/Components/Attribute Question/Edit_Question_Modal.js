import settings from '../../Styles/my-settings.module.css'
// import { LuPencil } from "react-icons/lu";
import {Formik, Form, Field} from 'formik'
import { useMutation, useQueryClient } from 'react-query';
import CRUDfunc from '../../../hooks/useQuery/useProject';
import DataContext from '../../../Context API/Create_Context';
import { useContext, useEffect } from 'react';



function Edit_Question_Modal({children, Id, data, showInitialValue, setShowInitialValue}) {

    const {questions,setQuestions} = useContext(DataContext)

    const data2 = questions.find((item)=> item.id === parseInt(Id))

    const queryClient = useQueryClient()
    const {mutate} = useMutation((value)=> CRUDfunc.update(`questions/${value.id}`,value),{
        onSuccess:()=>{
            queryClient.invalidateQueries('questions')
        }
    })

    
    const initialValues={
        qstn:"",
        category:"",
        answerType: ""
    }

    useEffect(()=>{
        localStorage.setItem('questions', JSON.stringify(questions))
    },[questions])

    const handleSubmit = (value)=>{

        // const payload={
        //     ...value,
        //     id:''
        // }
        
        // payload.id = Id

        // mutate(payload)

        setQuestions((prev)=>
         prev.map((item)=> item.id === parseInt(Id)?
          {
            ...item,
            qstn:value.qstn,
            category:value.category,
            answerType: value.answerType
          }:
          item
         )
        )
        
        setShowInitialValue(!showInitialValue)
    }

  return (

    <>

        <span
            type="button"  
                data-bs-toggle="modal" 
            data-bs-target="#staticBackdrop2"
             
        >
           {children}
        </span>

        {/* modal */}
        <div 
            className={`modal fade`} id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"aria-hidden="true"
        >

            <Formik
                initialValues={showInitialValue?initialValues:data2}
                enableReinitialize={true}
                onSubmit={handleSubmit}
            >

                {
                    () =>{
                        return(
                            <Form>

                                
                                        
                                <div className="modal-dialog">

                                    <div className={`${settings.questionModalContent} modal-content`}>

                                        <div className="modal-header">

                                            <h1 
                                                className="modal-title fs-5" id="staticBackdropLabel"
                                            >

                                                Edit Attribute Question

                                            </h1>

                                            <button 
                                            type="button" 
                                            className="btn-close" 
                                            data-bs-dismiss="modal" 
                                            aria-label="Close"
                                            onClick={()=>setShowInitialValue(!showInitialValue)}
                                            ></button>

                                        </div>

                                        <div className={`modal-body`}>

                                            <div className={settings.selectInputFieldWrapper}>

                                                <label>Attribute Category</label>

                                                <div>

                                                    <Field name='category' as='select' className={settings.selectInputField}>
                                                            
                                                        <option value='Civil EngineeringCompliance to Specification'>Compliance to Specification</option>
                                                        <option value='Empowerment / Training'>Empowerment / Training</option>
                                                        <option value='Water'>Water</option>
                                                                
                                                    </Field>

                                                </div>

                                            </div>


                                            <Field name='qstn'>
                                                    {
                                                        ({field}) =>{
                                                            return(
                                                                <div className={settings.questionInputField}>

                                                                    <label>Question</label>

                                                                    <div>

                                                                        <input 
                                                                            type='text' 
                                                                            {...field}
                                                                            placeholder='Enter Attribute Category' 
                                                                        />


                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            )
                                                        }
                                                    }
                                            </Field>

                                            <div className={settings.selectInputFieldWrapper}>

                                                <label>Answer Type</label>

                                                <div>

                                                    <Field name='answerType' as='select' className={settings.selectInputField}>
                                                            
                                                        <option value='Yes/No'>Yes/No</option>
                                                        <option value='Number Field'>Number Field</option>
                                                        <option value='Text Field'>Text Field</option>
                                                                
                                                    </Field>

                                                </div>

                                            </div>

                                            

                                        </div>

                                        
                                        
                                            <div className="d-flex justify-content-center mb-5">
                                                
                                                <button 
                                                    type="submit" className={`${settings.qButton} btn btn-primary text-white  me-3`}
                                                    data-bs-dismiss="modal"
                                                >
                                                    Save
                                                </button>

                                                <button 
                                                    type="button" 
                                                    className={`${settings.cancelButton} btn btn-secondary rounded-2`} 
                                                    data-bs-dismiss="modal"
                                                    onClick={()=>setShowInitialValue(!showInitialValue)}
                                                >
                                                    Cancel
                                                </button>

                                            </div>

                                    </div>

                                </div>

                                

                            </Form>
                        )
                    }
                }

            </Formik>
        </div>

    </>
  )
  
}

export default Edit_Question_Modal
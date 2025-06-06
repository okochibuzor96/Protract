import settings from '../../Styles/my-settings.module.css'

import {Formik, Form, Field} from 'formik'
import CRUDfunc from '../../../hooks/useQuery/useProject'
import {useMutation, useQueryClient} from 'react-query'
import DataContext from '../../../Context API/Create_Context'
import { useContext } from 'react'

const answerType = [

    {
        key:'Select Project Nature', 
        value:''
    },
    {
        key:'Yes/No', 
        value:'Yes/No'
    },
    {
        key:'Number Field', 
        value:'Number Field'
    },
    {
        key:'Text Field', 
        value:'Text Field'
    }
  ]
const dropDownValue = [

    {
        key:'Select Project Nature', 
        value:''
    },
    {
        key:'Civil Engineering', 
        value:'Civil Engineering'
    },
    {
        key:'Empowerment / Training', 
        value:'Empowerment / Training'
    },
    {
        key:'Water', 
        value:'Water'
    }
  ]

  const initialValues ={

    category:'',
    question:'',
    answerType:''
  }

  
  function Add_New_Modal({children}) {

    const {questions,setQuestions} = useContext(DataContext)

    // const queryClient = useQueryClient()

    // const {mutate} = useMutation((value)=> CRUDfunc.create('questions',value),{
    //     onSuccess:()=>{
    //         queryClient.invalidateQueries('questions')
    //     }
    // })

    const onSubmit = (value)=>{

        const Id = questions.length?questions[questions.length-1].id +1 : 1

        const payload ={
            ...value,
            id:Id
        }

        const newValue = [...questions,payload]

        setQuestions(newValue)

        localStorage.setItem("questions", JSON.stringify(newValue))

        // mutate(value)
        
    }

  return (

    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    >

        {
            () =>{
                return(
                    <Form>

                    

                        <button 
                            type="button"  
                            data-bs-toggle="modal" 
                            data-bs-target="#staticBackdrop" 
                            className={settings.addNewButton}
                        >

                            {children}


                        </button>

                        {/* modal */}
                        <div 
                            className={`modal fade`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"aria-hidden="true"
                        >
                                
                            <div className="modal-dialog">

                                <div className={`${settings.questionModalContent} modal-content`}>

                                    <div className="modal-header">

                                        <h1 
                                            className="modal-title fs-5 block105" id="staticBackdropLabel"
                                        >

                                            New Attribute Question

                                        </h1>

                                        <button 
                                        type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                    </div>

                                    <div className={`modal-body`}>

                                        <div className={settings.selectInputFieldWrapper}>

                                            <label>Attribute Category</label>

                                            <div>

                                                <Field name='category' as='select' className={settings.selectInputField}>
                                                        {
                                                            dropDownValue.map((values) =>(
                                                                <option key={values.key} value={values.value}>
                                                                {values.key}
                                                                </option>
                                                            ))
                                                        }
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
                                                                        placeholder='Enter Question'
                                                                        {...field} 
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
                                                        {
                                                            answerType.map((values) =>(
                                                                <option key={values.key} value={values.value}>
                                                                {values.key}
                                                                </option>
                                                            ))
                                                        }
                                                </Field>

                                            </div>

                                        </div>

                                    </div>
                                    
                                    <div className="d-flex justify-content-center mb-5">
                                        
                                        <button type="submit" className={`${settings.addButton} btn btn-primary text-white  me-3`}
                                        data-bs-dismiss="modal"
                                        >
                                            Add
                                        </button>

                                        <button 
                                            type="button" 
                                            className={`${settings.cancelButton} btn btn-secondary rounded-2`} 
                                            data-bs-dismiss="modal"
                                        >
                                            Cancel
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </Form>
                )
            }
        }

    </Formik>
  )
  
}

export default Add_New_Modal
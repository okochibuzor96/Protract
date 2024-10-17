import settings from '../../Styles/my-settings.module.css'

import {Formik, Form, Field} from 'formik'
import { useQueryClient, useMutation } from 'react-query'
import CRUDfunc from '../../../hooks/useQuery/useProject'


function Add_New_Modal() {

    const queryClient =useQueryClient()

   const {mutate} = useMutation((value)=>CRUDfunc.create('category',value),{
    onSuccess: ()=>{
        queryClient.invalidateQueries('settings_category')
    }
   })

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

    const initialValues = {
        attributeCategory:'',
        projectNature:''
    }

  return (

    <Formik
     initialValues={initialValues}
     onSubmit={(value)=>mutate(value)}
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

                            Add New

                        </button>

                        {/* modal */}
                        <div 
                            className={`modal fade`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"aria-hidden="true"
                        >
                                
                            <div className="modal-dialog">

                                <div className={`${settings.modalContent} modal-content`}>

                                    <div className="modal-header">

                                        <h1 
                                            className="modal-title fs-5 block105" id="staticBackdropLabel"
                                        >

                                            New Attribute Category

                                        </h1>

                                        <button 
                                        type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                    </div>

                                    <div className={`modal-body`}>

                                        <Field name='attributeCategory'>
                                                {
                                                    ({field}) =>{
                                                        return(
                                                            <div className={settings.categoryInputField}>

                                                                <label>Attribute Category</label>

                                                                <div>

                                                                    <input 
                                                                        type='text' 
                                                                        placeholder='Enter Attribute Category'
                                                                        {...field} 
                                                                    />


                                                                </div>
                                                                
                                                            </div>
                                                            
                                                        )
                                                    }
                                                }
                                        </Field>

                                        <div className={settings.selectInputFieldWrapper}>

                                            <label>Project Nature</label>

                                            <div>

                                                <Field name='projectNature' as='select' className={settings.selectInputField}>
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
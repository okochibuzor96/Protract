import settings from '../../Styles/my-settings.module.css'
import { LuPencil } from "react-icons/lu";
import {Formik, Form, Field} from 'formik'
import { useContext, useEffect } from 'react';
import { useQuery, useQueryClient,useMutation } from 'react-query';
import CRUDfunc from '../../../hooks/useQuery/useProject';
import DataContext from '../../../Context API/Create_Context';

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

 

function Edit_Modal({Id,data,children, setShowInitialValue, showInitialValue}) {

    const {category, setCategory} = useContext(DataContext)

    const data2 = category.find((item)=> item.id === parseInt(Id))

    // const queryclient = useQueryClient()

    // const {mutate,isLoading} = useMutation((value)=> CRUDfunc.update(`category/${value.id}`,value),{
    //     onSuccess:()=>{
    //         queryclient.invalidateQueries('settings_category')
    //     }
    // })


    // if(isLoading) <div>...loading</div>

    const initialValue = {
        attributeCategory:'',
        projectNature:''
    }

    useEffect(()=>{
        localStorage.setItem("category", JSON.stringify(category))
    },[category])


    const onSubmit = (value) =>{

        //   const payload={
        //     ...value,
        //     id:""
        //   }

        //   payload.id = Id

        setCategory((prev)=>
        prev.map((item)=> item.id === parseInt(Id)?
        {
            ...item,
            attributeCategory:value.attributeCategory,
            projectNature:value.projectNature

        }:
        item
        )
        )

        //    mutate(payload)

       setShowInitialValue(!showInitialValue)

    }

  return (

    <>

    <span 
    type="button"  
    data-bs-toggle="modal" 
    data-bs-target="#staticBackdrop3" 
    >
    
        {children}
    
    </span>

    {/* modal */}
    <div 
        className={`modal fade`} id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"aria-hidden="true"
    >

        <Formik
         initialValues={showInitialValue?initialValue:data2}
         enableReinitialize={true}
         onSubmit={onSubmit}
        >

            {
                () =>{
                    return(
                        <Form>
                                    
                            <div className="modal-dialog">

                                <div className={`${settings.modalContent} modal-content`}>

                                    <div className="modal-header">

                                        <h1 
                                            className="modal-title fs-5 block105" id="staticBackdropLabel"
                                        >

                                            Edit Attribute Category

                                        </h1>

                                        <button 
                                        type="button" 
                                        className="btn-close" 
                                        data-bs-dismiss="modal" 
                                        aria-label="Close"
                                        onClick={()=>setShowInitialValue(!showInitialValue)}
                                        >
                                        </button>

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

                                            <label>Project Nature</label>

                                            <div>

                                                <Field name='projectNature' as='select' className={settings.selectInputField}>

                                                    <option value='Civil Engineering'>Civil Engineering</option>
                                                    <option value='Empowerment / Training'>
                                                        Empowerment / Training
                                                    </option>
                                                    <option value='Water'>Water</option>
                                                       
                                                </Field>

                                            </div>

                                        </div>

                                    </div>
                                    
                                    <div className="d-flex justify-content-center mb-5">
                                        
                                        <button type="submit" className={`${settings.addButton} btn btn-primary text-white  me-3`}
                                        data-bs-dismiss="modal"
                                        >
                                            Update
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

export default Edit_Modal
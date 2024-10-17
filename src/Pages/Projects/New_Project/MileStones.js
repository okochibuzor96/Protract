import { MdOutlineCancel } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

import {Field,Formik,Form, FieldArray} from 'formik'

import project from './my-NewProject.module.css';


import {addProject} from '../../hooks/useQuery/useProject'
import {useMutation} from 'react-query'
import Finish_Button_Modal from "./Finish-Button-Modal";
import { useState } from "react";


function MileStones(props) {
    const {fieldValues, handlePrev, handleNext,mileStoneInitialValues,id,data,editMutate, ...rest} = props

    const location = useLocation()
    const navigate = useNavigate()

    const {mutate} = useMutation(addProject)

    const [nav, setNav] = useState(false)

    

    // const title = fieldValues.mileStone.title
    
    const onSubmit = (value) =>{
        handleNext(value)

        console.log('Gd',value)
        
        return location.pathname === `/projects/project-details/${id}/edit-project`?
        editMutate(value):
        mutate(value) 
    }

    return (

        <Formik
            initialValues={location.pathname === `/projects/project-details/${id}/edit-project`?data?.data || fieldValues:fieldValues}
            enableReinitialize={true}
            onSubmit={onSubmit}
        >
            {
                ({values}) => {
                    console.log('allv',values)
                    return(
                        <Form autoComplete="off" className={project.milestoneContainer}> 

                            <FieldArray name="mileStone">
                                {({push, remove}) => {
                                    
                                    return(
                                        <div className={project.NewProjectLayoutContent}>

                                            <div className={project.mileStonesFieldArrayContainer}>

                                                {
                                                    values.mileStone.map((_, index) =>(
                                                        <div key={index} className={project.mileStonesFieldContainer}>

                                                            <div>

                                                                <div className={project.mileStonesFieldWrapper}>

                                                                    <div>

                                                                        <div>

                                                                            <label htmlFor="inputPassword1">Milestone Title</label>

                                                                            <Field name={`mileStone[${index}].title`}>

                                                                                {
                                                                                    ({field}) => {

                                                                                        return(

                                                                                            <div>
                                                                                                <input id="inputPassword1" placeholder="Enter milestone title" type="text"{...field}/>
                                                                                            </div>

                                                                                        )
                                                                                    }
                                                                                }

                                                                            </Field>
                                                                        </div>

                                                                        <div>

                                                                            <label htmlFor="2">Payment</label>

                                                                            <Field name={`mileStone[${index}].payment`}>

                                                                                {
                                                                                    ({field}) => {

                                                                                        return(

                                                                                            <div>
                                                                                                <input id="2" placeholder="enter percentage" type="text" {...field}/>
                                                                                            </div>
                                                                                            
                                                                                        )
                                                                                    }
                                                                                }
                                                                                
                                                                            </Field>
                                                                        </div>

                                                                        

                                                                    </div>  

                                                                </div>

                                                                <div className={project.description}>
                                                                            
                                                                    <label htmlFor="3">Description</label>

                                                                    <Field name={`mileStone[${index}].description`}>

                                                                        {
                                                                            ({field}) => {

                                                                                return( 

                                                                                    <div>
                                                                                        <input id="3" placeholder="Enter Description" type="describe" {...field}/>
                                                                                    </div>
                                                                                    
                                                                                )
                                                                            }
                                                                        }

                                                                    </Field>

                                                                </div>

                                                            </div>

                                                            <MdOutlineCancel onClick={() => remove(index)} style={{marginTop:"27px", width:'38px', height:'38px', backgroundColor:'#FFFFFF',color:'#436DA2',border:"1px"}}/>

                                                        </div>
                                                    ))
                                                }
                                    
                            

                                                <div style={{display:'flex', width:'100%', height:"20px", alignItems:'center'}}>

                                                    <div style={{alignItems:'center', justifyContent:'center', position:'relative', width:'100%'}}>

                                                        <hr/>

                                                        <div style={{width:'113px',height:'24px', backgroundColor:'#FFFFFF', position:'absolute', marginTop:'-30px', marginLeft:'230px',paddingLeft:"10px"}}>  
                                                            
                                                            <FaCirclePlus onClick={() => push(mileStoneInitialValues)} style={{color:'#436DA2', fontSize:'20px',backgroundColor:"white", borderRadius:'20px'}}/>

                                                            <span style={{fontSize:'12px', fontWeight:"400", color:'#505050',marginLeft:'5px'}}>Add Location</span>
                                                            
                                                        </div> 

                                                    </div>

                                                </div>

                                            </div>

                                            

                                            <div className={`${project.stepOverLay}`}></div>

                                            <div className={`d-flex justify-content-between align-items-center px-4 ${project.stepButtonWrapper}`}>

                                                <button className={`rounded-1 ${project.prevButton}`} onClick={handlePrev} type='button'>
                                                    Previous
                                                </button>

                                                <Finish_Button_Modal
                                                
                                                >
                                                <button 
                                                    type='submit'  
                                                    
                                                    className={`rounded-1 text-center ${project.nextButton}`}
                                                >

                                                    Finish                                        

                                                </button>
                                            </Finish_Button_Modal>

                                            </div>
                                            
                                        </div>

                                    )
                                }}

                            </FieldArray>     

                        </Form>
                    )
                }
            }         

        </Formik>



            

       

    )
}

export default MileStones
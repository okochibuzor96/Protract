import { MdOutlineCancel } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

import {Field,Formik,Form, FieldArray} from 'formik'

import project from './my-NewProject.module.css';


import {addProject} from '../../hooks/useQuery/useProject'
import {useMutation} from 'react-query'
import Finish_Button_Modal from "./Finish-Button-Modal";
import { useContext, useState, useEffect } from "react";
import DataContext from "../../Context API/Create_Context";


function MileStones(props) {
    const {fieldValues, handlePrev, handleNext,mileStoneInitialValues,id,editMutate, ...rest} = props

    const {projects, setProjects} = useContext(DataContext)

    const data = projects?(projects.find((item)=> item.id === parseInt(id))) : ("")

    const location = useLocation()
    const navigate = useNavigate()

    const {mutate} = useMutation(addProject)

    const [nav, setNav] = useState(false)

    // useEffect(()=>{
    //     localStorage.setItem('projects', JSON.stringify(projects))
    // },[projects])

    // const title = fieldValues.mileStone.title
    
    const onSubmit = (value) =>{

        console.log('final', value)

        handleNext(value)

        if(location.pathname === `/projects/project-details/${id}/edit-project`){

            setProjects((prev)=> prev.map((item,index)=> item.id === parseInt(id)?
             {
                ...item,
                mileStone:[...value?.mileStone]
              }:item
            )
            )
        }else{

            const id = projects.length? projects[projects.length-1].id + 1 : 1

            const payload={
              id,
              ...value,
            }

            const newValue = [...projects,payload]

            setProjects(newValue)
            console.log('finals', id)
            localStorage.removeItem('projects')

            localStorage.setItem('projects', JSON.stringify(newValue))
        }

        navigate(`/projects/project-details/${id}`)
        
        return location.pathname === `/projects/project-details/${id}/edit-project`?
        editMutate(value):
        mutate(value) 
    }

    return (

        <Formik
            initialValues={location.pathname === `/projects/project-details/${id}/edit-project`?data || fieldValues:fieldValues}
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
                                                                                                <input id="2" placeholder="enter percentage" type="number" {...field}/>
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

                                                                                        <textarea
                                                                                            placeholder="Enter Description"
                                                                                            {...field}
                                                                                        />
                                                                                        
                                                                                    </div>
                                                                                    
                                                                                )
                                                                            }
                                                                        }

                                                                    </Field>

                                                                </div>

                                                            </div>

                                                            <MdOutlineCancel onClick={() => remove(index)} style={{marginTop:"27px", width:'100%', height:'38px', backgroundColor:'#FFFFFF',color:'#436DA2',border:"1px"}}/>

                                                        </div>
                                                    ))
                                                }
                                    
                            

                                                <div style={{display:'flex', width:'100%', height:"20px", alignItems:'center'}}>

                                                    <div style={{alignItems:'center', justifyContent:'center', position:'relative', width:'100%'}}>

                                                        <hr/>

                                                        <div style={{width:'100%',display:"flex",alignItems:"center",justifyContent:'center',height:'24px', position:'absolute', marginTop:'-30px'}}>

                                                            <div style={{width:'113px',display:"flex",alignItems:"center",justifyContent:'center',height:'24px', backgroundColor:'#FFFFFF',paddingLeft:"10px"}}>  
                                                                
                                                                <FaCirclePlus onClick={() => push(mileStoneInitialValues)} style={{color:'#436DA2', fontSize:'20px',backgroundColor:"white", borderRadius:'20px'}}/>

                                                                <span style={{fontSize:'12px', fontWeight:"400", color:'#505050',marginLeft:'5px'}}>Add Location</span>
                                                                
                                                            </div> 

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
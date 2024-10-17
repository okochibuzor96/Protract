import {Formik,Form,Field} from 'formik'

import project from './my-NewProject.module.css';
import { LiaSearchSolid } from "react-icons/lia";
import { useLocation } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import DataContext from '../../Context API/Create_Context';
import { useContext } from 'react';

function New_Project2({handleNext, fieldValues,handlePrev,editMutate}) {
 
   
    const {projects} = useContext(DataContext)

    const location = useLocation()
    const {id} = useParams()
    const data = projects.find((item)=> item.id === parseInt(id))

    const handleSubmit = (value) => {
        handleNext(value)
        console.log('Form12', value)
        // return editMutate(value)
    }

    return (
        <Formik
        initialValues={location.pathname === `/projects/project-details/${id}/edit-project`? data? data :'' || fieldValues:fieldValues}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        >
            {
                ({isValid,values}) =>{ 
                   
                    return(
                        <Form className={project.contractorContainer}>

                            <div className={project.NewProjectLayoutContent}>

                                <Field name='contractor'>
                                    {
                                        ({field}) =>{
                                            return(
                                                <div className={project.contractorFieldWrapper}>
                                                    
                                                    <label>Project Contractor*</label>
                                    
                                                    <div>
                                                        <input type="text" {...field} placeholder="Select Contractor" autoComplete='off'  />

                                                        <LiaSearchSolid size={20} color='#A8A8A8'/>
                                                    </div>
                                                </div>
                                                    
                                                
                                            )
                                        }
                                    }
                                </Field>

                                <div className={`${project.stepOverLay}`}></div>

                                <div className={`d-flex justify-content-between align-items-center px-4 ${project.stepButtonWrapper}`}>

                                    <button className={`rounded-1 ${project.prevButton}`} onClick={handlePrev} type='button'>
                                        Previous
                                    </button>

                                    <button type='submit' className={`rounded-1 text-center ${project.nextButton}`} >
                                        Next
                                    </button>

                                </div>

                            </div>
                        </Form>
                    )
                }
            }

        </Formik>

   
    )
}

export default New_Project2
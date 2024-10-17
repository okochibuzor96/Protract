

import {Field,Formik,Form} from 'formik'

import project from './my-NewProject.module.css';
import React, { useState } from 'react';

import { FaCheck } from "react-icons/fa6";

import imagea from '../../../Images/SDGGoala.svg'
import imagec from '../../../Images/SDGGoalc.svg'
import imaged from '../../../Images/SDGGoald.svg'
import imagef from '../../../Images/SDGGoalf.svg'
import imageg from '../../../Images/SDGGoalg.svg'
import imageh from '../../../Images/SDGGoalh.svg'
import imagei from '../../../Images/SDGGoali.svg'
import imagej from '../../../Images/SDGGoalj.svg'
import imagek from '../../../Images/SDGGoalk.svg'
import imagel from '../../../Images/SDGGoall.svg'
import imagem from '../../../Images/SDGGoalm.svg'
import imagen from '../../../Images/SDGGoaln.svg'
import imagep from '../../../Images/SDGGoalp.svg'
import imageq from '../../../Images/SDGGoalq.svg'
import { useLocation } from 'react-router-dom';


// const applyChecked = ({values, itemValues,handlePrev}) => {

  
 
//   return
  
// }



function New_Project3(props) {
  const {fieldValues, handlePrev, handleNext,data,id,editMutate} = props;

  const location = useLocation()

  const [itemValues, setItemValues] = useState([
    {
      image: imagea,
      value: 'imagea',
    },
    {
      image: imagec,
      value: 'imagec'
    },
    {
      image: imaged,
      value: 'imaged'
    },
    {
      image: imagef,
      value: 'imagef'
    },
    {
      image: imageg,
      value: 'imageg'
    },
    {
      image: imageh,
      value: 'imageh'
    },
    {
      image: imagei,
      value: 'imagei'
    },
    {
      image: imagej,
      value: 'imagej'
    },
    {
      image: imagek,
      value: 'imagek'
    },
    {
      image: imagel,
      value: 'imagel'
    },
    {
      image: imagem,
      value: 'imagem'
    },
    {
      image: imagen,
      value: 'imagen'
    },
    {
      image: imagep,
      value: 'imagep'
    },
    {
      image: imageq,
      value: 'imageq'
    }
    
  ])

  const onSubmit = (value) =>{
    handleNext(value)
    return editMutate(value)
  }

  // const validationSchema = Yup.object({})


  return (

    <Formik
    initialValues={location.pathname === `/projects/project-details/${id}/edit-project`?data?.data || fieldValues:fieldValues}
    enableReinitialize={true}
    onSubmit={onSubmit}
    >

      {
        ({values}) => {
          return(
            <Form>
              
              <div className={project.NewProjectLayoutContent}>

                <div className={project.SDGWrapper}>

                  

                  <Field name='imageValues'>

                    {
                      ({field}) => {
                        return(
                            itemValues.map((item,index)=>{
                              console.log('fieldvalues',field.values)
                              return(
                                  <div key={index}>
                                      

                                    <input id={item.value} type='checkbox' {...field} value={item.value} defaultChecked={data?.data.imageValues.includes(item.value)}/>

                                    <label  htmlFor={item.value}>

                                      <img src={item.image} alt='' style={{ width:'91px', height:'91px'}}/>
                                      
                                    </label>
                                  
                                  </div>
                              )
                            })
                        )
                        
                      } 
                    }

                  </Field>    



                </div>

                <div className={`${project.stepOverLay}`}></div>

                

                <div className={`d-flex justify-content-between align-items-center px-4 ${project.stepButtonWrapper}`}>
                  <button className={`rounded-1 ${project.prevButton}`} onClick={handlePrev} type='button'>Previous</button>
                  <button type='submit' className={`rounded-1 text-center ${project.nextButton}`} >Next</button>
                </div>

              </div>
               

            </Form>
          )
        }
      }

    </Formik> 

    
  )
}
 

export default New_Project3
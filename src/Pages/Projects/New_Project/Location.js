import {Formik,Form,Field,FieldArray} from 'formik'

import { MdOutlineCancel } from "react-icons/md";
import { FaCirclePlus, FaTruckFieldUn } from "react-icons/fa6";

import project from './my-NewProject.module.css';
import { useLocation, useParams } from 'react-router-dom';

function New_Project4({handleNext,handlePrev,fieldValues,locationInitialValues,data,editMutate}) {

  const locationRoute = useLocation()
  const {id} = useParams()
  const showLocation = () => {
   const show = data?.data.location.map((val,i) =>{
      return val.locationFederalConsistuency
    })

   return show
  }

  console.log('show', showLocation())

  const geopoliticalZone = [
    {key:data?.data && showLocation()?showLocation():'Select Sector', value:''},
    {key:'key 1', value:'key1'},
    {key:'key 2', value:'key2'},
    {key:'key 3', value:'key3'}
  ]
  // data?.data && data?.data.location[1].locationFederalConsistuency !==""?data?.data.location[1].locationFederalConsistuency

  const onSubmit = (value) => {
    handleNext(value)
    console.log('Form value', value)
    return editMutate(value)
  }
  return (
    <div> 
     
      <Formik
        initialValues={locationRoute.pathname === `/projects/project-details/${id}/edit-project`?data?.data || fieldValues:fieldValues}
        enableReinitialize={true}
        onSubmit={onSubmit}
      >
        {({values}) =>{
          console.log('L',values)
          return(
            <Form className={project.locationContainer}>

              <FieldArray name='location'>
                {
                  ({push, remove}) =>{
                    return(

                      <div className={project.NewProjectLayoutContent}>

                        <div className={project.locationFieldArray}>

                          {
                            values.location.map((val, index) =>{
                              
                              return(

                              <div key={index} className={project.locationFieldWrapper}>
            
                                <div>
                              
                                  <div>
                
                                    <label>Geopolitical Zone*</label>
                
                                    <div>
                                      <Field name={`location[${index}].locationGeopoliticalZone`} className={project.locationSelectInput} as='select'>
                                       
                                        <option  value="">{values.location[index].locationGeopoliticalZone?values.location[index].locationGeopoliticalZone:'Select Option'}</option>
                                          <option  value="option1">Option 1</option>
                                          <option  value="option2">Option 2</option>
                                          <option  value="option3">Option 3</option>
                                      </Field>
                                    </div>
                                    
                                  </div>
                
                                  <div>
                
                                    <label>State*</label>
                
                                    <div>
                                      <Field name={`location[${index}].locationState`} className={project.locationSelectInput} as='select'>
                                      
                                        <option  value="">{values.location[index].locationState?values.location[index].locationState:'Select Option'}</option>
                                        <option  value="option1">Option 1</option>
                                        <option  value="option2">Option 2</option>
                                        <option  value="option3">Option 3</option>

                                      </Field>
                                    </div>
                                  </div>
                
                                  <Field name={`location[${index}].locationGPSLocation`}>
                                    {({field}) =>(
                                      <div>
                                        <label>GPS Location</label>
                                        
                                        <div>
                                        <input type="text" placeholder="Enter project serial number" autoComplete='off'  {...field} />
                                        </div>
                                      </div>
                                    )}
                                  </Field>
                
                                </div>
                
                                <div>
                
                                  <div>
                
                                    <label>Federal Consistuency</label>
                
                                    <div>
                                      <Field name={`location[${index}].locationFederalConsistuency`} className={project.locationSelectInput} as='select'>
                                        
                                        <option  value="">{values.location[index].locationFederalConsistuency?values.location[index].locationFederalConsistuency:'Select Option'}</option>
                                        <option  value="option1">Option 1</option>
                                        <option  value="option2">Option 2</option>
                                        <option  value="option3">Option 3</option>

                                      </Field>
                                    </div>
                
                                  </div>
                
                                  <div>
                
                                    <label>Local Government*</label>
                
                                    <div>
                                      <Field name={`location[${index}].locationLG`} className={project.locationSelectInput} as='select'>
                                        {/* {
                                          geopoliticalZone.map((option) =>(
                                            <option key={option.value} value={option.value}>{option.key}</option>
                                          ))
                                        } */}
                                        <option  value="">{values.location[index].locationLG?values.location[index].locationLG:'Select Option'}</option>
                                        <option  value="option1">Option 1</option>
                                        <option  value="option2">Option 2</option>
                                        <option  value="option3">Option 3</option>
                                      </Field>
                                    </div>
                                  </div>
                
                                </div>
                
                                <MdOutlineCancel onClick={() => remove(index)} style={{marginTop:"36px", width:'22px', height:'22px', backgroundColor:'#FFFFFF',color:'#436DA2'}}/>
              
                              </div>

                            )})
                          }

                          
                          
                          <div style={{display:'flex', width:'100%', height:"20px", alignItems:'center', marginBottom:'15px'}}>
            
                            <div style={{alignItems:'center', justifyContent:'center', position:'relative', width:'100%'}}>
            
                              <hr/>
            
                              <div style={{width:'113px',height:'24px', backgroundColor:'#FFFFFF', position:'absolute', marginTop:'-30px', marginLeft:'230px',paddingLeft:"10px"}}>  
                                
                                <FaCirclePlus 
                                  onClick={() => push({locationGeopoliticalZone:'',
                                    locationState:'',
                                    locationGPSLocation:'',
                                    locationFederalConsistuency:'',
                                    locationLG:''})
                                  } 
                                  style={{color:'#436DA2', fontSize:'20px',backgroundColor:"white", borderRadius:'20px'}}
                                />
            
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
          
                          <button type='submit' className={`rounded-1 text-center ${project.nextButton}`} >
                            Next
                          </button>
          
                        </div>
        
                      </div>

                    )
                  }
                }
              </FieldArray>

              

            </Form>
          )
        }}

      </Formik> 

    </div>
  )
}

export default New_Project4
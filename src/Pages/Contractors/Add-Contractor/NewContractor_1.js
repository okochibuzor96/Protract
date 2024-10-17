import contractor from '../../../styles/my-contractors.module.css';
import AddContractorCard from '../../../Images/AddContractorCard.svg';

import {Link} from 'react-router-dom'
import {Formik,Form,Field} from 'formik'
import {useRef} from 'react';

function NewContractor1({handleNext,fieldValues,image,handleChange,setFieldValues}) {

  const inputRef = useRef()

  const handleRef = () =>{

    inputRef.current.click()

  }

  const onSubmit = (value) =>{

    handleNext(value)
   
  }

  return (

    <Formik
      initialValues={fieldValues}
      onSubmit={onSubmit}
    >
      {
        ({values}) => {
          

          return(
            <Form>

              <div className={contractor.AddContractorContainer2}>

                <div className={`${contractor.AddContractorWrapper} bg-white`}>

                  <div>
                  

                    <input 
                      
                      type="file" 
                      name='avarta'
                      ref={inputRef}
                      hidden   
                      onChange={(event) => {
                        handleChange(event.target.files[0])
                      }} 
                    />
                  
                    <div>
                      <img onClick={handleRef} src={image? image :AddContractorCard} alt="" className={contractor.companyDetailsImage}/>
                    </div>
                    
                    <label onClick={handleRef}  className={contractor.upDateBtn}>

                      Choose Picture

                    </label> 
                    
                  </div>

                </div>

                <div className={contractor.NewContractor1}>

                  <div className={contractor.formContainer}>

                    <div className={`${contractor.inputFieldWrapper}`}>

                    

                      <Field name='companyName'>
                        {
                          ({field}) => {
                            return(
                              <div>

                                <label htmlFor='inputForm' className={contractor.inputLabel}>

                                  Company Name

                                </label>


                                <input  type="text" placeholder="Enter Company Name" id="inputForm" className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                              
                              </div>
                              
                            )
                          } 
                        }
                      </Field>

                      <Field name='rcNumber'>
                        {
                          ({field}) => {
                            return(
                              <div>

                                <label htmlFor='inputForm' className={`${contractor.inputLabel}`}  >
                              
                                  RC Number
                            
                                </label>

                                <input  type="text" placeholder="Enter RC Number" 
                                id="inputForm" className={`${contractor.inputField} form-control`}  aria-describedby="text" {...field}/>
                          
                              </div>
                              
                            )
                          } 
                        }
                      </Field>

                      <Field name='contractorId'>
                      {
                        ({field}) => {
                          return(
                            <div>

                              <label className={`${contractor.inputLabel}`}  >
                                
                                Contractor ID
                              
                              </label>

                              <input type="text" placeholder="Enter contractor ID" 
                              className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                            
                            </div>
                          )
                        } 
                      }
                      </Field>
                      
                      <Field name='specialization'>
                      {
                        ({field}) => {
                          return(
                            <div>

                              <label className={`${contractor.inputLabel}`}  >
                                
                                Contractor Specialization
                              
                              </label>

                              <input type="text" placeholder="Enter contractor specialization" 
                              className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                            
                            </div>
                          )
                        } 
                      }
                      </Field>

                      <Field name='contactEmailAddress'>
                      {
                        ({field}) => {
                          return(
                            <div>

                              <label className={`${contractor.inputLabel}`}  >
                                
                                Contractor Email
                              
                              </label>

                              <input type="text" placeholder="Enter contractor Email" 
                              className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                            
                            </div>
                          )
                        } 
                      }
                      </Field>

                      <Field name='companyAddress'>
                      {
                        ({field}) => {
                          return(
                            <div >

                              <label className={`${contractor.inputLabel}`}  >
                              
                                Company Address
                            
                              </label>

                              <input  type="text" placeholder="Company Address" 
                              className={`${contractor.inputField} form-control`}  aria-describedby="text" {...field}/>
                            
                            </div>
                            
                          )
                        } 
                      }
                      </Field>

                      <Field name='contactPerson'>
                        {
                          ({field}) => {
                            return(
                              <div>

                                <label className={`${contractor.inputLabel}`}  >
                              
                                  Contact Person
                            
                                </label>

                                <input type="text" placeholder="Enter Name of Contat Person" className={`${contractor.inputField} form-control`}  aria-describedby="text" {...field}/>
                            
                              </div>
                            )
                          } 
                        }
                      </Field>

                      <Field name='phoneNumber'>
                        {
                          ({field}) => {
                            return(
                              <div>

                                <label className={`${contractor.inputLabel}`}  >
                              
                                  Phone Number
                            
                                </label>

                                <input type="text" placeholder="Enter email address" className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                            
                              </div>
                            )
                          } 
                        }
                      </Field>

                    </div>

                    <Field name='emailAddress'>
                      {
                        ({field}) => {
                          return(
                            <div style={{width:'375px',marginBottom:'20px'}}>

                              <label className={`${contractor.inputLabel}`}  >
                                
                                Email Address
                              
                              </label>

                              <input type="text" placeholder="Enter email address" 
                              className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                            
                            </div>
                          )
                        } 
                      }
                    </Field>
                    
                  </div>

                  <div className={contractor.positionAbsolute}></div>

                  <div className={contractor.positionRelative}>

                    <button disabled className={` ${contractor.previousBtn} rounded-1 text-center border border-light`} >Previous</button>
                      
                    <button type='submit' className={` ${contractor.nextBtn} rounded-1`}>Next</button>

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

export default NewContractor1
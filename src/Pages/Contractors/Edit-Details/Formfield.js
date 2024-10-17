import contractor from '../../../styles/my-contractors.module.css';import { BsFileEarmarkPlus } from "react-icons/bs";
import {Formik,Form,Field} from 'formik'
import {useMutation} from 'react-query'
import { useQuery, useQueryClient } from 'react-query';
import {getContractorDetails} from '../../hooks/useQuery/useProject'
import {upDateContractorDetails} from '../../hooks/useQuery/useProject'
import { useParams } from 'react-router-dom';

// import {postContractors} from '../../hooks/useQuery/useProject'


function Formfield({submitButton}) {

  const queryClient = useQueryClient()

  const {id} = useParams()

  const {data,isLoading} = useQuery(['editDetail', id], getContractorDetails, {
    initialData: () => {
      const contractorDetails = queryClient.getQueryData('contractorDetails')?.data?.find((details) => details.id === parseInt(id))

      if(contractorDetails){
        return{data: contractorDetails}
      }else{
        return undefined
      }
    }
  })


  const {mutate} = useMutation(upDateContractorDetails)

  
  const onSubmit = (value,helper) =>{

    console.log('final value', helper)

    return mutate(value)
  }

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    
    // <Formik
    //   initialValues={data?.data}
    //   onSubmit={onSubmit}
    // >
    //   {
    //     () => {
    //       return(
    //         <Form>

    //           <div className={`${contractor.inputFieldWrapper}`}>

    //             <Field name='companyName'>
    //               {
    //                 ({field}) => {
    //                   return(
    //                     <div>

    //                       <label htmlFor='inputForm' className={contractor.inputLabel}>

    //                         Company Name

    //                       </label>


    //                       <input  type="text" placeholder="Enter Company Name" id="inputForm" className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                        
    //                     </div>
                        
    //                   )
    //                 } 
    //               }
    //             </Field>

    //             <Field name='rcNumber'>
    //               {
    //                 ({field}) => {
    //                   return(
    //                     <div>

    //                       <label htmlFor='inputForm' className={`${contractor.inputLabel}`}  >
                        
    //                         RC Number
                      
    //                       </label>

    //                       <input  type="text" placeholder="Enter RC Number" 
    //                       id="inputForm" className={`${contractor.inputField} form-control`}  aria-describedby="text" {...field}/>
                    
    //                     </div>
                        
    //                   )
    //                 } 
    //               }
    //             </Field>

    //             <Field name='contractorId'>
    //             {
    //               ({field}) => {
    //                 return(
    //                   <div>

    //                     <label className={`${contractor.inputLabel}`}  >
                          
    //                       Contractor ID
                        
    //                     </label>

    //                     <input type="text" placeholder="Enter contractor ID" 
    //                     className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                      
    //                   </div>
    //                 )
    //               } 
    //             }
    //             </Field>

    //             <Field name='specialization'>
    //             {
    //               ({field}) => {
    //                 return(
    //                   <div>

    //                     <label className={`${contractor.inputLabel}`}  >
                          
    //                       Contractor Specialization
                        
    //                     </label>

    //                     <input type="text" placeholder="Enter contractor specialization" 
    //                     className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                      
    //                   </div>
    //                 )
    //               } 
    //             }
    //             </Field>

    //             <Field name='mailAddress'>
    //                 {
    //                   ({field}) => {
    //                     return(
    //                       <div>

    //                         <label className={`${contractor.inputLabel}`}  >
                              
    //                           Email Address
                            
    //                         </label>

    //                         <input type="text" placeholder="Enter email address" 
    //                         className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                          
    //                       </div>
    //                     )
    //                   } 
    //                 }
    //             </Field>

    //             <Field name='companyAddress'>
    //             {
    //               ({field}) => {
    //                 return(
    //                   <div >

    //                     <label className={`${contractor.inputLabel}`}  >
                        
    //                       Company Address
                      
    //                     </label>

    //                     <input  type="text" placeholder="Company Address" 
    //                     className={`${contractor.inputField} form-control`}  aria-describedby="text" {...field}/>
                      
    //                   </div>
                      
    //                 )
    //               } 
    //             }
    //             </Field>

    //             <Field name='contactPerson'>
    //               {
    //                 ({field}) => {
    //                   return(
    //                     <div>

    //                       <label className={`${contractor.inputLabel}`}  >
                        
    //                         Contact Person
                      
    //                       </label>

    //                       <input type="text" placeholder="Enter Name of Contat Person" className={`${contractor.inputField} form-control`}  aria-describedby="text" {...field}/>
                      
    //                     </div>
    //                   )
    //                 } 
    //               }
    //             </Field>

    //             <Field name='contactNumber'>
    //               {
    //                 ({field}) => {
    //                   return(
    //                     <div>

    //                       <label className={`${contractor.inputLabel}`}  >
                        
    //                         Phone Number
                      
    //                       </label>

    //                       <input type="text" placeholder="Enter email address" className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                      
    //                     </div>
    //                   )
    //                 } 
    //               }
    //             </Field>

    //             <Field name='contactEmailAddress'>
    //             {
    //               ({field}) => {
    //                 return(
    //                   <div>

    //                     <label className={`${contractor.inputLabel}`}  >
                          
    //                       Contractor Email
                        
    //                     </label>

    //                     <input type="text" placeholder="Enter contractor Email" 
    //                     className={`${contractor.inputField} form-control`} aria-describedby="text" {...field}/>
                      
    //                   </div>
    //                 )
    //               } 
    //             }
    //             </Field>

    //           </div>

    //           {/* <h6 className={`${contractor.docHeader} mb-2 mt-2`}>Upload Regulatory Compliance Documents</h6> */}


    //           {/* <div className={contractor.complianceDocWrapper}>

    //               <Field name='NSITF'>
    //                 {
    //                   ({field,setFieldValues}) => {
    //                     return(
    //                     <div>       

    //                       <div>
                                
    //                         <label htmlFor='file' className={`${contractor.FileEarmarkWrapper} d-flex align-items-center justify-content-center rounded-1`}>
    //                           <BsFileEarmarkPlus className={contractor.FileEarmark}/>
    //                         </label>

    //                         <input type='file' id='file' style={{display:'none'}} {...field}/>

    //                       </div>
                
    //                       <p className={`${contractor.docTitle} text-center`} >NSITF</p>
                                            
    //                     </div>
    //                     )
    //                   }
    //                 }
    //               </Field>
                  
    //               <Field name='PENCOM'>
    //                 {
    //                   ({field}) => {
    //                     return(
    //                       <div>       
            
    //                         <div>
                                
    //                           <label htmlFor='file' className={`${contractor.FileEarmarkWrapper} d-flex align-items-center justify-content-center rounded-1`}>
    //                             <BsFileEarmarkPlus className={contractor.FileEarmark}/>
    //                           </label>
    
    //                           <input type='file' id='file' style={{display:'none'}} {...field}/>
      
    //                         </div>

    //                         <p className={`${contractor.docTitle} text-center`} >PENCOM</p>
                              
    //                       </div>
    //                     )
    //                   }
    //                 }
    //               </Field>

    //               <Field name='BBP'>
    //                 {
    //                   ({field}) => {
    //                     return(
    //                       <div>
                        
    //                         <div>
                                
    //                           <label htmlFor='file' className={`${contractor.FileEarmarkWrapper} d-flex align-items-center justify-content-center rounded-1`}>
    //                             <BsFileEarmarkPlus className={contractor.FileEarmark}/>
    //                           </label>
    
    //                           <input type='file' id='file' style={{display:'none'}} {...field}/>
      
    //                         </div>

    //                         <p className={`${contractor.docTitle} text-center`} >BPP</p>
                                  
    //                       </div>
    //                     )
    //                   }
    //                 }
    //               </Field>

    //               <Field name='RC'>
    //                 {
    //                   ({field}) => {
    //                     return(
    //                       <div>
                        
    //                         <div>
                                
    //                           <label htmlFor='file' className={`${contractor.FileEarmarkWrapper} d-flex align-items-center justify-content-center rounded-1`}>
    //                             <BsFileEarmarkPlus className={contractor.FileEarmark}/>
    //                           </label>
    
    //                           <input type='file' id='file' style={{display:'none'}} {...field}/>
      
    //                         </div>

    //                         <p className={`${contractor.docTitle} text-center`} >RC</p>
                              
    //                       </div>
    //                     )
    //                   }
    //                 }
    //               </Field>

    //               <Field name='ITF'>
    //                 {
    //                   ({field}) => {
    //                     return(
    //                       <div>       
            
    //                       <div>
                                
    //                           <label htmlFor='file' className={`${contractor.FileEarmarkWrapper} d-flex align-items-center justify-content-center rounded-1`}>
    //                             <BsFileEarmarkPlus className={contractor.FileEarmark}/>
    //                           </label>
    
    //                           <input type='file' id='file' style={{display:'none'}} {...field}/>
      
    //                         </div>
                  
    //                         <p className={`${contractor.docTitle} text-center`} >ITF</p>
                
    //                       </div>
    //                     )
    //                   }
    //                 }
    //               </Field>

    //               <Field name='taxClearance'>
    //                 {
    //                   ({field}) => {
    //                     return(
    //                       <div>
                        
    //                         <div>
                                
    //                           <label htmlFor='file' className={`${contractor.FileEarmarkWrapper} d-flex align-items-center justify-content-center rounded-1`}>
    //                             <BsFileEarmarkPlus className={contractor.FileEarmark}/>
    //                           </label>
    
    //                           <input type='file' id='file' style={{display:'none'}} {...field}/>
      
    //                         </div>

    //                         <p className={`${contractor.docTitle} text-center`} >Tax Clearance</p>
                              
    //                       </div>
    //                     )
    //                   }
    //                 }
    //               </Field>

    //           </div>

    //           <button id={submitButton} type='submit' style={{display:"none"}}>form</button> */}
                
    //         </Form>
    //       )
    //     }
    //   }
    // </Formik>

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
                id="inputForm" className={`${contractor.inputField} form-control`}   {...field}/>
          
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

      <Field name='mailAddress'>
          {
            ({field}) => {
              return(
                <div>

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

      <Field name='contactNumber'>
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

    </div>
    
    
  )
}

export default Formfield
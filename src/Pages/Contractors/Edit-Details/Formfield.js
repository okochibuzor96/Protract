import contractor from '../../../styles/my-contractors.module.css';import { BsFileEarmarkPlus } from "react-icons/bs";
import {Formik,Form,Field} from 'formik'
import {useMutation} from 'react-query'
import { useQuery, useQueryClient } from 'react-query';
import {getContractorDetails} from '../../hooks/useQuery/useProject'
import {upDateContractorDetails} from '../../hooks/useQuery/useProject'
import { useParams } from 'react-router-dom';


function Formfield({submitButton}) {

  return (

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
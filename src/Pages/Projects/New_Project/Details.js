import {Formik,Form,Field} from 'formik'

import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation } from 'react-router-dom';

import project from './my-NewProject.module.css';

function NewProject1({handleNext, handlePrev, fieldValues,data,id,editMutate, ...rest}) {

  const location = useLocation()

  const sectorValue = [
  {key:data?.data && data?.data.projectSector !==""?data?.data.projectSector:'Select Sector', value:''},
    {key:'key 1', value:'key1'},
    {key:'key 2', value:'key2'},
    {key:'key 3', value:'key3'}
  ]
  const typeValue = [
    {key:data?.data && data?.data.projectType !==""?data?.data.projectType:'Select type of project', value:''},
    {key:'key 4', value:'key4'},
    {key:'key 5', value:'key5'},
    {key:'key 6', value:'key6'}
  ]
  const geoPoliticalZoneValue = [
    {key:data?.data && data?.data.geopoliticalZone !==""?data?.data.geopoliticalZone:'Select type of project', value:''},
    {key:'key 7', value:'key7'},
    {key:'key 8', value:'key8'},
    {key:'key 9', value:'key9'}
  ]
  const federalConsistuencyValue = [
    {key:data && data?.data.federalConsistuency !==""?.data?data?.data.federalConsistuency
      :'Select type of project', value:''},
    {key:'key 10', value:'key10'},
    {key:'key 11', value:'key11'},
    {key:'key 12', value:'key12'}
  ]
  const stateValue = [
    {key:data?.data && data?.data.state !==""?data?.data.state:'Select state', value:''},
    {key:'key 13', value:'key13'},
    {key:'key 14', value:'key14'},
    {key:'key 15', value:'key15'}
  ]
  const statusValue = [
    {key:data?.data && data?.data.status !==""?data?.data.status:'Select status', value:''},
    {key:'Pending', value:'pending'},
    {key:'Paid', value:'paid'},
    {key:'Ongoing', value:'ongoing'},
    {key:'Not Started', value:'not started'},
    {key:'Completed', value:'completed'},
    {key:'Resolved', value:'resolved'},
    {key:'Abandoned', value:'abandoned'}
  ]
  const localGovtValue = [
    {key:data?.data && data?.data.localGovernment !==""?data?.data.localGovernment:'Select project LGA', value:''},
    {key:'key 16', value:'key16'},
    {key:'key 17', value:'key17'},
    {key:'key 18', value:'key18'}
  ]

  

 

  const onSubmit = (value) => {
    
    console.log('Form value', value)
    handleNext(value)
    return editMutate(value)
  }
  return (
    
    <Formik
      initialValues={location.pathname === `/projects/project-details/${id}/edit-project`?data?.data || fieldValues:fieldValues}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >

      {
        ({values,handleChange}) =>{
      
          return(

            <Form className={project.detailsContainer}>

              <div className={project.NewProjectLayoutContent}>

                <Field name='projectTitle'>
                  {
                    ({field}) => {
                      return(
                        <div className={project.field}>
                          <label htmlFor='input1'>Project Title*</label>

                          <div>
                           <input type="text" {...field} placeholder="Enter project title" id="input1" />
                          </div>
                        </div>
                      )
                    }
                  }
                
                </Field>

               
                <div className={project.formColumn}>

                  <div className={project.detailsForm1}>

                    <Field name='projectReferenceNumber'>
                      {
                        ({field}) => {
                          return(
                            <div>

                              <label>Project Reference Number*</label>
                              <div>
                                <input type="text" placeholder="Enter project serial number" autoComplete='off'  {...field} />
                              </div>
                              
                            </div>
                          )
                        }
                      }
                    
                    </Field>

                    <div>

                      <label>Project Sector</label>

                      <div>
                        <Field className={project.form1Option} as='select' name='projectSector' >
                          {
                              
                            sectorValue.map((option) =>(
                              <option  key={option.value} >{option.key}</option>
                            ))
                              
                          }
                          {/* <option value="" label={values.projectSector} />
                          <option value="pending" label="Pending" />
                          <option value="approved" label="Approved" />
                          <option value="rejected" label="Rejected" /> */}
                      
                        </Field>
                      </div>
                    
                    </div>

                    <div>

                      <label>Geopolitical Zone*</label>

                      <div>
                        <Field className={project.form1Option} as='select' name='geopoliticalZone' >
                          {
                              
                            geoPoliticalZoneValue.map((option) =>(
                              <option key={option.value} value={option.value}>{option.key}</option>
                            ))
                              
                          }

                        </Field>
                      </div>

                    </div>

                    <div>

                      <label>State*</label>

                      <div>
                        <Field className={project.form1Option} as='select' name='state'>
                          {
                              
                            stateValue.map((option) =>(
                              <option key={option.value} value={option.value}>{option.key}</option>
                            ))
                              
                          }

                        </Field>
                      </div>

                    </div>

                    <Field name='GPSLocation'>
                      {
                        ({field}) => {
                          return(
                            <div>

                              <label>GPS Location</label>

                              <div>
                              <input type="text" placeholder="Enter GPS Location" id="inputPassword5" {...field}/>
                              </div>
                              
                            </div>
                          )
                        }
                      }
                    
                    </Field>

                    <Field name='projectYear'>
                      {
                        ({field}) => {
                          return(
                            <div>

                              <label>Project Year*</label>

                              <div>
                              <input type="text" placeholder="Enter GPS Location" id="inputPassword5" {...field}/>
                              </div>
                              
                            </div>
                          )
                        }
                      }
                    
                    </Field>
                  
                  </div>

                  <div className={project.detailsForm2}>

                    <Field name='projectValue'>
                      {
                        ({field}) => {
                          return(
                            <div>
                              <label>Project Value*</label>

                              <div>
                              <input type="text" placeholder="Enter project value"  {...field}/>
                              </div>
                            </div>
                          )
                        }
                      }
                  
                    </Field>

                    <div>

                      <label>Status*</label>

                      <div>
                        <Field className={project.form1Option} as='select' name='status'>
                          {
                              
                            statusValue.map((option) =>(
                              <option key={option.value} value={option.value}>{option.key}</option>
                            ))
                              
                          }

                        </Field>
                      </div>

                    </div>


                    <div>

                      <label>Project Type*</label>

                      <div>
                        <Field className={project.form2Option} as='select' name='projectType'>
                          {
                              
                            typeValue.map((option) =>(
                              <option key={option.value} value={option.value}>{option.key}</option>
                            ))
                              
                          }
                      
                        </Field>
                      </div>
                    
                    </div>

                    <div>

                      <label>Federal Consistuency</label>

                      <div>
                        <Field className={project.form2Option} as='select' name='federalConsistuency'>
                          {
                              
                            federalConsistuencyValue.map((option) =>(
                              <option key={option.value} value={option.value}>{option.key}</option>
                            ))
                              
                          }

                        </Field>
                      </div>

                    </div>

                    <div>

                      <label>Local Government*</label>

                      <div>
                        <Field className={project.form2Option} as='select' name='localGovernment'>
                          {
                              
                            localGovtValue.map((option) =>(
                              <option key={option.value} value={option.value}>{option.key}</option>
                            ))
                              
                          }

                        </Field>
                      </div>

                    </div>

                    <Field name='beneficiaryCommunities'>
                      {
                        ({field}) => {
                          return(
                            <div>

                              <label>Beneficiary Communities*</label>

                              <div>
                              <input type="text" placeholder="Enter project initiation year" id="inputPassword5" {...field}/>
                              </div>
                              
                            </div>
                          )
                        }
                      }
                    
                    </Field>
                    
                  </div>

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

export default NewProject1
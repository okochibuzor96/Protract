import {Field} from 'formik'
import newEvaluation2 from '../../Styles/my-new_evaluation_2.module.css'
import {useLocation, useParams} from 'react-router-dom'
import React from 'react'

function NinputType_PC({data}) {

  const location = useLocation()
  const {id} = useParams()

  return (
    <div className={newEvaluation2.formContainer}>

      <div>Project Characteristics / Attributes (Schools/PHC)</div>

      <hr/>

      <div className={newEvaluation2.NinputType2}>

        {
          [1,2,3,4].map((item) =>(

            <React.Fragment key={item}>
              {
                item === 1? <div>Total Number of Students/clients</div> :
                item === 2? <div>Total Number of Teachers in School/Health Workers in PHC/Others</div>:
                item === 3? <div>Total Number of Students per class/patients per month/Users</div>:
                <div>Total Number of Staff Required</div>
              }
              

              <div className={location.pathname === `/evaluation/evaluation-details/${id}`?(newEvaluation2.detailsLabel):newEvaluation2.fieldWrapper}>

                <Field name={`TNSbefore${item}`}>
                  {
                    ({field})=>{
                      return(
                        <div>
                          {
                            <label>Before</label>
                          }

                
                          {
                            location.pathname === `/evaluation/evaluation-details/${id}`?
                            <span>{data[`TNSbefore${item}`]}</span>:
                            <div>
                              <input type='number' placeholder='0' {...field}/>
                            </div>
                          }
                                    
                          
                        </div>
                      )
                    }
                  }
                </Field>

                <Field name={`TNSafter${item}`}>
                  {
                    ({field})=>{
                      return(
                        <div>

                          {   
                            <label>After</label>
                          }

                          {
                            location.pathname === `/evaluation/evaluation-details/${id}`?
                            <span className={newEvaluation2.fieldDetalValue}>{data[`TNSafter${item}`]}</span>:
                            <div

                            >
                              <input type='number' placeholder='0' {...field}/>
                            </div>
                          }

                        </div>
                      )
                      
                    }
                  }
                </Field>

              </div>

            </React.Fragment>

          ))
        }

      </div>

    </div>
  )
}

export default NinputType_PC
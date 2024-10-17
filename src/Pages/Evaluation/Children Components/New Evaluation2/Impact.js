import {ErrorMessage, Field} from 'formik'
import newEvaluation2 from '../../Styles/my-new_evaluation_2.module.css'
import {useLocation, useParams} from 'react-router-dom'
import Field_Error_Component from './Field_Error-Component'
import DataContext from '../../../Context API/Create_Context'
import { useContext } from 'react'

function Impact({data}) {

    const location = useLocation()
    const {id} = useParams()

    const {evaluation} = useContext(DataContext)

    const data2 = evaluation.find((evaluation)=> evaluation.id === parseInt(id))

  return (
    <div className={newEvaluation2.formContainer}>

        <div>Impact</div>

        <hr/>

        <div className={newEvaluation2.NinputType}>

            <div>

                <ErrorMessage name='NJC' component={Field_Error_Component}/>

                <div>

                    <div>Number of jobs created</div>

                    <Field name='NJC'>
                        {
                            ({field})=>{
                            return (
                            <>
                            {
                                location.pathname === `/evaluation/evaluation-details/${id}`?
                                <span className={newEvaluation2.fieldDetalValue}>{data2?.NJC}</span>:
                                <div><input {...field} type='number'  placeholder='Enter Number'/></div>
                            }
                            </>
                            )
                            }
                        }
                    </Field>

                </div>

            </div>

            <div>

                <ErrorMessage name='NPR' component={Field_Error_Component}/>

                <div>

                   

                    <div>Number of people reached/Empowered</div>

                    <Field name='NPR'>
                    {
                        ({field})=>{
                        return(
                            <>
                                {
                                    location.pathname === `/evaluation/evaluation-details/${id}`?
                                    <span className={newEvaluation2.fieldDetalValue}>{data2?.NPR}</span>:
                                    <div><input {...field} type='number'  placeholder='Enter Number'/></div>
                                }
                            </>
                        )
                        }
                    }
                    </Field>

                </div>

            </div>   

        </div>

    </div>

  )
}

export default Impact
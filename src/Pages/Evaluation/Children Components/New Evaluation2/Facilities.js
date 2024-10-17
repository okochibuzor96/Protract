import {Field} from 'formik'
import newEvaluation2 from '../../Styles/my-new_evaluation_2.module.css'
import {useLocation, useParams} from 'react-router-dom'

function Facilities({data}) {

    const location = useLocation()
    const {id} = useParams()

  return (
    <div className={newEvaluation2.formContainer}>

        <div>Facilities</div>

        <hr/>

        <div className={location.pathname === `/evaluation/evaluation-details/${id}`?(newEvaluation2.detailsWrapper):newEvaluation2.facilitiesWrapper}>

            <div>Total Number of Classrooms</div>
            
            <Field name='TNCbefore'>
                {
                ({field})=>{
                    return(
                    <div>

                        <label htmlFor='4'>Before</label>

                        {
                            location.pathname === `/evaluation/evaluation-details/${id}`?
                            <span className={newEvaluation2.fieldDetalValue}>{data?.data.TNCbefore}</span>:
                            <div>
                            <input {...field} type='number' placeholder='0' />
                            </div>
                        }

                    </div>
                    )
                    
                }
                }
            </Field>

            <Field name='TNCafter'>
                {
                ({field})=>{
                    return(
                    <div>

                        <label>After</label>

                        {
                            location.pathname === `/evaluation/evaluation-details/${id}`?
                            <span className={newEvaluation2.fieldDetalValue}>{data?.data.TNCafter}</span>:
                            <div>
                            <input type='number' placeholder='0' {...field}/>
                            </div>
                        }

                    </div>
                    )
                    
                }
                }
            </Field>

        </div>

        {
            [1,2].map((item) =>(

                <div key={item} className={location.pathname === `/evaluation/evaluation-details/${id}`?(newEvaluation2.detailsWrapper):newEvaluation2.facilitiesWrapper}>

                    {
                        item === 1?
                        <div>Total Number of Furniture in the School</div>:
                        <div>Furniture gaps</div>
                    }

                    

                    <Field name={item === 1?`TNFSgood${item}`:`FGgood${item}`}>
                        {
                        ({field})=>{
                            return(
                            <div>

                                <label>Good</label>

                                {
                                    location.pathname === `/evaluation/evaluation-details/${id}`?
                                    <span className={newEvaluation2.fieldDetalValue}>{item === 1?data?.data[`TNFSgood${item}`]:data?.data[`FGgood${item}`]}</span>:
                                    <div>
                                    <input type='number' placeholder='0' {...field}/>
                                    </div>
                                }

                            </div>
                            )
                            
                        }
                        }
                    </Field>

                    <Field name={item === 1?`TNFSbad${item}`:`FGbad${item}`}>
                        {
                        ({field})=>{
                            return(
                            <div>

                                <label>Bad</label>

                                {
                                    location.pathname === `/evaluation/evaluation-details/${id}`?
                                    <span className={newEvaluation2.fieldDetalValue}>
                                        {item === 1?data?.data[`TNFSbad${item}`]:data?.data[`FGbad${item}`]}
                                    </span>:
                                    <div>
                                    <input type='number' placeholder='0' {...field}/>
                                    </div>
                                }

                            </div>
                            )
                            
                        }
                        }
                    </Field>

                    <Field name={item === 1?`TNFStotal${item}`:`FGtotal${item}`}>
                        {
                        ({field})=>{
                            return(
                            <div>

                                <label>Total</label>

                                {
                                    location.pathname === `/evaluation/evaluation-details/${id}`?
                                    <span className={newEvaluation2.fieldDetalValue}>
                                        {item === 1?data?.data[`TNFStotal${item}`]:data?.data[`FGtotal${item}`]}
                                    </span>:
                                    <div>
                                    <input type='number' placeholder='0' {...field}/>
                                    </div>
                                }

                            </div>
                            )
                            
                        }
                        }
                    </Field>

                </div>

            ))
        }

    </div>
  )
}

export default Facilities
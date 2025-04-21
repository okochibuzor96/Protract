import { IoMdArrowDropdown } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import newEvaluation from '../../Styles/my-new_evaluation_1.module.css'
import {Formik,Form, Field,ErrorMessage} from 'formik'
import New_Evaluation_2 from "../New Evaluation2/New_Evaluation_2";
import * as yup from 'yup'

import {useQuery,useQueryClient} from 'react-query'
import {getProjects,getContractors} from '../../../hooks/useQuery/useProject'
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../Context API/Create_Context";
import contractor from '../../../../styles/my-contractors.module.css';

function New_Evaluation_1(props) {

    const [inputValue, setInputValue] = useState('')
    const [inputValue2, setInputValue2] = useState("")
    
    const {
        setIdValue,
        Idvalue,
        setIdValue2,
        Idvalue2,
        formValues,
        Next,
        setProjectNo,
        setProjectSector,
        filterValue,
        filterValue2,
        setfilterValue,
        setfilterValue2

    }=props
    const navigate = useNavigate()

    const contractorFormValue = [{
        formValues:'',
        id:""
    }]

    
    const {contractors:Contractor,projects:data} = useContext(DataContext)

    // const {data} = useQuery(
    //     'searchProject',
    //     getProjects
    // )

    // const {data:Contractor} = useQuery(
    //     'searchContractor',
    //     getContractors
    // )

    const handleChange = (e) =>{
        setInputValue(e.target.value)
        setfilterValue(e.target.value)
    }

    const handleChange2 = (e) =>{
        setInputValue2(e.target.value)
        setfilterValue2(e.target.value)
    }

    const searchItem = (value) =>{

        setInputValue('');
        setfilterValue(value.projectTitle)
        setIdValue(value.id)
        setProjectNo(value.projectReferenceNumber)
        setProjectSector(value.projectSector)
        
    }

    const searchItem2 = (value) =>{

        setInputValue2('');
        setfilterValue2(value.companyName)
        setIdValue2(value.id)
        
    }

    const inputFocus = useRef(null)
    const inputFocus2 = useRef(null)

    const handleFocus = () =>{
        inputFocus.current.focus()
    }

    const handleFocus2 = () =>{
        inputFocus2.current.focus()
    }

    const onSubmit = (value) =>{

        Next(value)
    }

    const validationSchema = yup.object({
        projectFormValue:yup.string().required('field is required'),
        contractorFormValue:yup.string().required('field is required')
    })

    const handleInputClear =() =>{
        setInputValue('');
    }

    const handleInputClear2 =() =>{
        setInputValue2('');
    }

  return (
    <div className={newEvaluation.newEvaluationConttainer}>

        <div>
            New Evaluation
        </div>

        <hr/>

        <Formik
          initialValues={formValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >

            {
                (props) =>{
                   
                   
                    return(

                        <Form>

                            <div className={newEvaluation.relativePosition}>

                                <Field name='projectFormValue'>
                                    {
                                        () =>{
                                           
                                            return(

                                                <>

                                                    <div className={newEvaluation.formWrapper}>

                                                        <label htmlFor="project">Select Project</label>
                    
                                                        <div id="project">
                    
                                                            <div>
                                                                <LiaSearchSolid onClick={handleFocus} className={newEvaluation.searchIcon}/>
                    
                                                                <input type='text' name='projectFormValue' placeholder="Search for Projects" ref={inputFocus} value={inputValue? inputValue: filterValue} onChange={handleChange} autoComplete='off' />
                                                            </div>
                    
                                                            <IoMdArrowDropdown onClick={handleFocus} className={newEvaluation.dropDownIcon}/>
                                                            
                                                        </div>
                    
                                                    </div>

                                                    <div className={newEvaluation.absolutePosition}> 

                                                        <div className={inputValue? newEvaluation.absolutePosition2:newEvaluation.hideAbsolutePosition2 }>            
                                                            
                                                            <div>
                                                                {
                                                                    data?(data.filter((value) =>{
                                                                    const Value = value.projectTitle.toLowerCase();
                                                                    const InputValue = inputValue.toLowerCase()
                        
                                                                    return InputValue && Value.includes(InputValue) && Value !== filterValue
                                                                    }).map((item,i) =>{

                                                                        return (
                                                                            
                                                                            <> 
                                                                              
                                                                                {   item?
                                                                                    (
                                                                                        <div  key={i} onClick={()=>searchItem(item)}>
                                                                                            {item.projectTitle}
                                                                                            </div>
                                                                                    ):
                                                                                    (
                                                                                        <div className={contractor.noDataWrapper}>

                                                                                            <h1>
                                                                                                No match from the input you entered
                                                                                            </h1> 
                                                                                            
                                                                                            <div onClick={handleInputClear}>
                                                                                                <span>Ok</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    )

                                                                                }

                                                                            </>
                                                                        
                                                                        )
                                                                        
                                                                    })
                                                                    ):
                                                                    (
                                                                        <div className={contractor.noDataWrapper}>

                                                                            <h2>Oops no data found!!!</h2>

                                                                            <div> 
                                                                                click on <span onClick={() => navigate('/projects/new-project')}> Add project</span>
                                                                            </div>

                                                                        </div>
                                                                    )
                                                                }

                                                            </div>
                    
                                                        </div>              
                
                                                    </div>

                                                </>
                                            )
                                        }
                                    }
                                </Field>
                              

                                
                                

                               <Field name="contractorFormValue">
                                    {
                                        () =>{
                                            
                                          
                                           
                                            return(
                                                <>
                                                    <div className={newEvaluation.formWrapper}>

                                                        <label htmlFor="evaluator">Select Evaluator</label>

                                                        <div id="evaluator">
                                                                
                                                            <div>

                                                                <LiaSearchSolid onClick={handleFocus2} className={newEvaluation.searchIcon}/>

                                                                <input type='text' placeholder="Search for Evaluator" ref={inputFocus2} value={inputValue2? inputValue2: filterValue2} onChange={handleChange2}/>

                                                            </div>

                                                            <IoMdArrowDropdown onClick={handleFocus2} className={newEvaluation.dropDownIcon}/>
                                                            
                                                        </div>

                                                        

                                                    </div>

                                                    <div className={newEvaluation.absolutePosition}> 

                                                        <div className={inputValue2?newEvaluation.absolutePosition2:newEvaluation.hideAbsolutePosition2}>   

                                                            <div>        

                                                                {
                                                                    Contractor?(

                                                                        Contractor.filter((value) =>{
                                                                        const Value = value.companyName.toLowerCase();
                                                                        
                                                                        const InputValue = inputValue2.toLowerCase()

                                                                        return InputValue && Value.includes(InputValue) && Value !== InputValue
                                                                        }).map((item,i) =>{

                                                                            return (
                                                                                
                                                                                <> 
                                                                                
                                                                                    {   item?
                                                                                        (
                                                                                            <div  key={i} onClick={()=>searchItem2(item)}>
                                                                                            {item.companyName}
                                                                                            </div>
                                                                                        ):
                                                                                        (
                                                                                            <div className={contractor.noDataWrapper}> 

                                                                                                <h1>
                                                                                                    No match from the input you entered
                                                                                                </h1>

                                                                                                <div onClick={handleInputClear2}>
                                                                                                <span>Ok</span> 
                                                                                                </div>

                                                                                            </div>
                                                                                        )

                                                                                    }

                                                                                </>
                                                                            
                                                                            )
                                                                            
                                                                        })

                                                                    ):(

                                                                        <div className={contractor.noDataWrapper}>

                                                                            <h2>Oops no data found!!!</h2>

                                                                            <div> 
                                                                                click on <span onClick={() => navigate('/contractors/new_contractor')}>
                                                                                    Add contractor
                                                                                </span>
                                                                            </div>

                                                                        </div>

                                                                    )
                                                                }

                                                            </div> 

                                                        </div> 

                                                    </div>
                                                </>
                                            )
                                        }
                                    }
                                </Field>

                               
                                

                                
                                            

                                

                            </div>


                            <hr/>

                            <div>

                                <button type="button" className={newEvaluation.cancelBtn} onClick={()=>navigate('/evaluation')}>Cancel</button>

                                {
                                    !Idvalue || !Idvalue2?
                                    <button 
                                    type="button" 
                                    onClick={()=> alert('Fill all the provided field!')}
                                    className={newEvaluation.proceedBtn}>
                                        Proceed
                                    </button>:
                                    <button 
                                        type="submit" 
                                        className={newEvaluation.proceedBtn}
                                    >
                                        Proceed
                                    </button>
                                }

                                

                            </div>

                        </Form>

                    )
                }
            }

            

        </Formik>

    </div>

  )
}

export default New_Evaluation_1
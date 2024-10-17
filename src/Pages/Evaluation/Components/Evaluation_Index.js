import contractor from '../../../styles/my-contractors.module.css'
import evaluation from '../Styles/my-Evaluation.module.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { TbCaretUpDownFilled } from "react-icons/tb";
import { LiaSearchSolid } from "react-icons/lia";
import {Link, useNavigate} from "react-router-dom"
import {useQuery} from 'react-query'
import {getEvaluation} from '../../hooks/useQuery/useProject'
import { ViewButtons } from '../../../Components/viewButtons'
import { Completed } from '../../../Components/Status/Completed';
import { Active } from '../../../Components/Status/Active';
import { InActive } from '../../../Components/Status/InActive';
import { Ongoing } from '../../../Components/Status/Ongoing';
import { Abandoned } from '../../../Components/Status/Abandon';
import newEvaluation2 from '../Styles/my-new_evaluation_2.module.css'
import React from 'react';


function Evaluation_Index() {

    const {data} = useQuery('evaluation', getEvaluation)

    const navigate = useNavigate()

  return (
    <div className={evaluation.evaluationContainer}>

        <div>

            <h6>Evaluation</h6>

           
            <button  onClick={()=> navigate('new-evaluation')}>New Evaluation</button>
            

        </div>

        <div className={contractor.block57}>

            <div className={contractor.block58}>

                <LiaSearchSolid size={18} color='#A8A8A8'/>

                <input 
                type='test' className={contractor.block61}  placeholder='Search'  style={{width:'160px', border:'none'}}
                />

            </div>



            <div className={contractor.block62}>

                <div>
                Duration
                </div>

                <div className={contractor.block63}>
                
                <a className={contractor.blocks63} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                    <IoMdArrowDropdown color='#A8A8A8' size={20} />

                </a>
                
                <ul className="dropdown-menu" >
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>

                </div>

                <div className={contractor.block64}>Rows</div>

            </div>

        </div>

        <div className={evaluation.tHeader}>

            <div>
                <TbCaretUpDownFilled/>
                <div>
                  Project No
                </div>
            </div>

            <div>Project Title</div>
            <div>SDG Sector</div>
            <div>Evaluator</div>
            <div>Date</div>

            <div>
                <TbCaretUpDownFilled/>
                <div>
                 Status
                </div>
            </div>
        </div>

        <div className={newEvaluation2.newEvaluation3Wrapper}>

            {
                data?.data.map((item, i) =>(

                    <React.Fragment key={i} >
                        {
                            item.status === 'Completed' || item.status === 'Active' || item.status === 'Ongoing' || item.status === 'Abandon'?
                            <div className={evaluation.tContent}>
                
                                <main>{item.projectNo}</main>
                                <main>{item.projectFormValue}</main>
                                <main>{item.SDGSector}</main>
                                <main>{item.contractorFormValue}</main>
                                <main></main>
                                
                                {
                            
                                    item.status === 'Completed'?
                                    <main>
                                        
                                        <Completed/> 
                                        <ViewButtons click={()=> navigate(`evaluation-details/${item.id}`)}/>

                                    </main>:
                                    item.status === 'Active'?
                                    <main>

                                        <Active/>
                                        <ViewButtons click={()=> navigate(`evaluation-details/${item.id}`)}/>

                                    </main>:
                                    item.status === 'Ongoing'?
                                    <main>

                                        <Ongoing/>  
                                        <ViewButtons click={()=> navigate(`evaluation-details/${item.id}`)}/>

                                    </main>:
                                    item.status === 'Abandon'?
                                    <main>

                                        <Abandoned/> 
                                        <ViewButtons click={()=> navigate(`evaluation-details/${item.id}`)}/>

                                    </main>: ""
            
                                        
                                }
                                
                                
            
                            </div>: ""
                        }
                    </React.Fragment>

                    
                ))
            }

</div>

    </div>
  )
}

export default Evaluation_Index
/*componenets*/
import Payment_Data from "./Payment_Data"

import NewProjectButton from "../../Projects/New_Project/NewProjectButton"
import Pagination from "../../../Components/Pagination/Pagination"

/*style module */
import project from '../../Projects/my-projects.module.css'
import contractor from '../../../styles/my-contractors.module.css'
import paymentDetail from '../Payment_CSS_folder/my-paymentDetails.module.css'
import {useQuery} from 'react-query'

/*react icons */
import { IoMdArrowDropdown } from "react-icons/io";
import { TbCaretUpDownFilled } from "react-icons/tb";

import {useNavigate} from 'react-router-dom'
import { useContext, useState } from "react"
import CRUDfunc from "../../hooks/useQuery/useProject"
import DataContext from "../../Context API/Create_Context"

function ProjectIndex() {

    // const {data, isLoading} = useQuery('payment',()=> CRUDfunc.get('projects'))

    const {projects} = useContext(DataContext)

    const handleNavigation = (item) =>navigate(`/projects/new-project`)

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)

    const totalPage = projects && Math.ceil(projects.length/limit)

//    const totalPage = data?.data && Math.ceil(data?.data.length/limit)

    const navigate = useNavigate();

    // if(isLoading) <div>...loading</div>

  return (
    <div className={paymentDetail.paymentIndexContainer}>

        <div className={paymentDetail.paymentIndexWrapper}>

            <div className={paymentDetail.pageTitle}> 
                Payments Advice
            </div>

            <div className={paymentDetail.block57}>
            
                <div className={contractor.block62}>

                    <div>
                         Duration
                    </div>

                    <div className={contractor.block63}>
                    
                        <a className={contractor.blocks63} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                            <IoMdArrowDropdown color='#A8A8A8' size={20} />

                        </a>
                        
                        <ul class="dropdown-menu" >
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>

                    </div>

                    <div class={contractor.block64}>Rows</div>

                </div>

            </div>

            <div className={paymentDetail.IndexTable}>

                <div>

                    <div className={paymentDetail.tableContainer}>
            
                        <div className={project.DataHeader}>

                            <div>

                                <TbCaretUpDownFilled/>

                                <div>Payment ID</div>

                            </div>

                            <div>Project Title</div>

                            <div>Milestone</div>

                            <div>Amount</div>

                            <div>Contractor</div>

                            <div>

                                <TbCaretUpDownFilled/>

                                <div>

                                    Status

                                </div>

                            </div>

                        </div>

                        <div className={`${paymentDetail.tableWrapper}`}>

                            {    
                                projects?
                                (

                                    <>   <div>

                                            <Payment_Data
                                            page={page}
                                            // data={data}
                                            handleNavigation={handleNavigation}
                                            limit={limit}
                                            />

                                        </div>

                                        {  
                                        
                                            (totalPage > 1) && <Pagination
                                                totalPage={totalPage}
                                                page={page}
                                                setPage={setPage}
                                                siblings={1}
                                            />
                                        }

                                    </>

                                ):(
                                    <div className={contractor.noDataWrapper}>

                                    <h2>Oops no data found!!!</h2>

                                    <div> 
                                        click on <span onClick={handleNavigation}> Add project</span> to add data
                                    </div>

                                    </div>
                                )

                            }

                            
                        </div>
    
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default ProjectIndex
/*componenets*/
import Payment_Data from "./Payment_Data"

import NewProjectButton from "../../Projects/New_Project/NewProjectButton"

/*style module */
import project from '../../Projects/my-projects.module.css'
import contractor from '../../../styles/my-contractors.module.css'
import paymentDetail from '../Payment_CSS_folder/my-paymentDetails.module.css'

/*react icons */
import { IoMdArrowDropdown } from "react-icons/io";
import { TbCaretUpDownFilled } from "react-icons/tb";

import {useNavigate} from 'react-router-dom'

function ProjectIndex() {
    const navigate = useNavigate();
  return (
    <main>

        <div className={contractor.block54}> 
        Payments Advice
            {/* <div class={contractor.block55}>
              Payments Advice
            </div> */}

        </div>

        <div>

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

            <div className={project.pageScroll}>

                <div className={project.verticalScroll}>

                    <Payment_Data/>

                    {/* <div className={project.paginationContainer}><PagePagination/></div> */}
                </div>
            </div>

        </div>

        

        <div>

        </div>

    </main>
  )
}

export default ProjectIndex
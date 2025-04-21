/*componenets*/
import ProjectNavbar from "./ProjectNavbar"
import DataHeader from "./DataHeader"
import ProjectData from "./ProjectData"

import NewProjectButton from "../New_Project/NewProjectButton"

/*style module */
import project from '../my-projects.module.css'


/*react icons */
import { IoMdArrowDropdown } from "react-icons/io";

import contractor from '../../../styles/my-contractors.module.css'
import {useQuery} from 'react-query'
import {getProjects} from '../../hooks/useQuery/useProject'
import {useNavigate} from 'react-router-dom'
import {useContext, useState, useEffect} from 'react'
import Pagination from "../../../Components/Pagination/Pagination"
import DataContext from "../../Context API/Create_Context"


function ProjectIndex() {

    // useEffect(()=>{
    //     localStorage.removeItem("projects")
        
    //   },[])

    const {projects} = useContext(DataContext)

    const [page,setPage] = useState(1)

    const [limit,setLimit] = useState(6)

    const navigate = useNavigate();

    // const {data,isLoading} = useQuery('project', getProjects)

    const totalPage = projects && Math.ceil(projects.length/limit)

    const handleNavigation = ()=> navigate('new-project')

  return (
    
    <div className={project.projectIndexContainer}>

        <div className={contractor.block54}> 

            <div className={contractor.block55}>
                Projects
            </div>

            <NewProjectButton
            handleNavigate={handleNavigation}
            />

        </div>

        <div>

            <div className={contractor.block57}>

               <div><ProjectNavbar/></div>
            
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

            <div className={project.pageScroll}>

                

                <div className={`${project.verticalScroll}`}>

                    <div>
                        <DataHeader/>
                    </div>

                    {
                        projects?
                        (
                            <> 
                               <ProjectData
                                    page={page}
                                    limit={limit}
                                    // data={data}
                                />

                                
                                {   

                                    (totalPage > 1) && <Pagination
                                        totalPage={totalPage}
                                        page={page}
                                        setPage={setPage}
                                        siblings={1}
                                    />

                                }
                            </>
                            
                        ):
                        (
                            <div className={contractor.noDataWrapper}>

                            <h2>Oops no data found!!!</h2>

                            <div> 
                                click on <span onClick={handleNavigation}> Add project</span> or on the  New Project button at the top right to add data
                            </div>

                            </div>
                        )
                    }

                </div>

            </div>

        </div>

    </div>
  )
}

export default ProjectIndex
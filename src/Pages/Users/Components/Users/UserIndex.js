import contractor from '../../../../styles/my-contractors.module.css'
import userStyle from '../../Users_Style_Folder/my-userIndex.module.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { TbCaretUpDownFilled } from "react-icons/tb";
import { LiaSearchSolid } from "react-icons/lia";
import {Link, useNavigate} from "react-router-dom"

import CRUDfunc from '../../../hooks/useQuery/useProject'
import {useQuery} from 'react-query'
import {ViewButtons} from '../../../../Components/viewButtons'
import {Active} from '../../../../Components/Status/Active'
import {InActive} from '../../../../Components/Status/InActive'
import {Pending} from '../../../../Components/Status/Pending'
import Pagination from '../../../../Components/Pagination/Pagination';
import { useContext, useState } from 'react';
import GetUsers from '../../../../Components/Pagination/GetUsers';
import DataContext from '../../../Context API/Create_Context';

function UserIndex() {

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)

    const navigate = useNavigate()

    // const {data, isLoading} = useQuery("users", ()=>CRUDfunc.get("users"))

    const {users} = useContext(DataContext)

    const totalPage = users && Math.ceil(users?.length/limit)

    const getUser = GetUsers.User({page,limit})

    // const getUser = GetUsers.User({page,limit,data})

    // if(isLoading) <div>...loading</div>

  return (
    <div className={userStyle.userLayoutContainer}>

        <div>

            <h6>User Management</h6>

            
            <button onClick={()=>navigate('new-staff')}>Add User</button>
            

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
                
                <a className={contractor.blocks63} href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                    <IoMdArrowDropdown color='#A8A8A8' size={20} />

                </a>
                
                <ul className="dropdown-menu" >
                    <li><a className="dropdown-item" href="">Action</a></li>
                    <li><a className="dropdown-item" href="">Another action</a></li>
                    <li><a className="dropdown-item" href="">Something else here</a></li>
                </ul>

                </div>

                <div className={contractor.block64}>Rows</div>

            </div>

        </div>

        <div className={userStyle.userTheader}>

            <div>
                <TbCaretUpDownFilled/>

                <div>
                   User ID
                </div>
            </div>

            <div>

                <TbCaretUpDownFilled/>

                <div>
                  Name
                </div>
            </div>

            <div>
               Email
            </div>

            <div>
              Phone
            </div>

            <div>
              Department
            </div>

            <div>
               Role
            </div>

            <div>

                <TbCaretUpDownFilled/>


                <div>
                   Status
                </div>
            </div>
                
        </div>

        <div className={userStyle.userTbodyWrapper}>

            <div>

                {
                    getUser.map((item,i) =>(

                        <div key={i} className={userStyle.userTbody}>

                            <div>{item.userId}</div>

                            <div>

                                <div>{item.userFname}</div>

                                <div>{item.userLname}</div>

                            </div>

                            <div>{item.userEmail}</div>

                            <div>{item.userNumber}</div>

                            <div>{item.userDepartment}</div>

                            <div>{item.userRole}</div>

                            <div>
                                {
                                item.userStatus ==="Active"? <Active/>:
                                item.userStatus ==="InActive"? <InActive/>:
                                item.userStatus ==="Pending"? <Pending/>:""
                                }
                            
                                <ViewButtons
                                click={()=>navigate(`user-details/${item.id}`)}
                                />
                            

                            </div>

                        </div>
                    ))
                }

            </div>

            {getUser &&  <Pagination
                totalPage={totalPage}
                page={page}
                setPage={setPage}
                siblings={1}
                />
            }

        </div>

    </div>
  )
}

export default UserIndex
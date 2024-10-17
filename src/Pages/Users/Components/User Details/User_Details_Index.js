import userDetails from '../../Users_Style_Folder/my-userDetails.module.css'
import detailAvatar from '../../../../Images/userMainIcon.png'
import contractor from '../../../../styles/my-contractors.module.css';
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import {useQuery, useQueryClient,useMutation} from 'react-query'
import CRUDfunc from '../../../hooks/useQuery/useProject'
import DeactiveBtn from './Modal/DeactiveBtn';
import { useParams } from 'react-router-dom'
import {useRef, useState} from 'react'

function User_Details_Index() {

  const navigate = useNavigate()
  const inputRef = useRef()
  const [image, setImage] = useState('')
  const {id} = useParams()
  const queryClient = useQueryClient()

  const {data} = useQuery(["user-details", id],()=> CRUDfunc.get(`users/${id}`),{
    initialData: () =>{
      const details = queryClient.getQueryData("users")?.data?.find((detail) => detail.id === parseInt(id))

      if(details){
        return{
          data:details
        }
      }
    }
  })

  const {mutate, isLoading:isUpdating} = useMutation((image) => CRUDfunc.update(`users/${id}`,image),
  {
    onSuccess: ()=>{
      queryClient.invalidateQueries('user-details')
    }
  }
  )

  if(isUpdating) <div>...Updating</div>

  const handleRef = () => {
    return inputRef.current.click()
  }

  const handleChange = (e) => {

    const file = new FileReader()
    file.readAsDataURL(e.target.files[0])
    file.onload = () =>{
      setImage(file.result)
    }
   

  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    const payload ={
      profileImg:''
    }
    payload.profileImg=image
   
    mutate(payload)
    setTimeout(()=>setImage('',[1000]))
  }

  return (

    <div>

      <div className={userDetails.hWrappper}>

        <div className={contractor.herosection1}>  
                
          <BsArrowLeftShort onClick={() => navigate("/users")} className={contractor.backArrow}/>

          <div>
            
            <p className={contractor.backArrowText1}>
            Back to All Users
            </p>

            <h6 className={userDetails.backArrowText2}> 

              {data?.data.userFname} <span>{data?.data.userLname}</span>

            </h6>

          </div>
                
        </div>

        <div className={userDetails.btnWrapper}>

          <DeactiveBtn 
            fName={data?.data.userFname}
            lName={data?.data.userLname}
            status={data?.data.userStatus}
            mutate={mutate}
          />

          <button disabled={data?.data.userStatus ==="InActive"} onClick={() => navigate("edit_user")} className={data?.data.userStatus ==="InActive"? userDetails.editDetailsBtnInActive : userDetails.editDetailsBtn}>
            Edit Details
          </button>
          
        </div>

      </div>
      <hr/>

      <div className={userDetails.userDetailsWrapper}>

        
        
        <form onSubmit={handleSubmit}>

          <div className={userDetails.imageWrapper}>

            <img className={data?.data.userStatus ==="Active"? userDetails.active: userDetails.InactiveDiv} onClick={handleRef} src={!image? data?.data.profileImg? data?.data.profileImg: detailAvatar: image} alt="User"/>

            {
              data?.data.userStatus ==="Active"?
              <div className={userDetails.activeDiv}>active</div>:
              <div className={userDetails.InactiveDiv}>Inactive</div>
            }
              
            

            <div>
              {data?.data.userFname} <span className='ms-1'>{data?.data.userLname}</span>
            </div>

            <div>{data?.data.userEmail}</div>

            <input type="file" accept='image/' ref={inputRef} hidden onChange={handleChange}/>

            {
              image? <button type="submit">Upload Picture</button>: <button type='button' onClick={handleRef}>Change Picture</button>
            }
            
          </div>

        </form>

        <div>

          <div>

            <h6>Phone</h6>

            <div>{data?.data.userNumber}</div>

          </div>

          <div>

            <h6>Alternate Phone</h6>

            <div>{data?.data.userAltNumber}</div>

          </div>

          <div>

            <h6>Email</h6>

            <div>{data?.data.userEmail}</div>

          </div>

          <div>

            <h6>Department</h6>

            <div>{data?.data.userDepartment}</div>

          </div>

          <div>

            <h6>Role</h6>

            <div>{data?.data.userRole}</div>

          </div>

          <div>

            <h6>Location</h6>

            <div>{data?.data.userLocation}</div>

          </div>
          
        </div>

      </div>

    </div>
  )
}

export default User_Details_Index
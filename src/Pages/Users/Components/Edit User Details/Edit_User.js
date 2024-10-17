import userDetails from '../../Users_Style_Folder/my-userDetails.module.css'
import addUser from '../../Users_Style_Folder/my-addUser.module.css'
import contractor from '../../../../styles/my-contractors.module.css';
import detailAvatar from '../../../../Images/userMainIcon.png'
import {useContext, useEffect, useRef, useState} from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query';
import CRUDfunc from '../../../hooks/useQuery/useProject';
import Update from './Modal/updateBtn'

import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import {Formik, Form, Field} from 'formik'
import DataContext from '../../../Context API/Create_Context';

function Edit_User() {

    const {id} = useParams()
    const inputRef = useRef()
    const [image, setImage] = useState('')
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const {users, setUsers} = useContext(DataContext)

    const data = users.find((item)=> item.id === parseInt(id))

    // const {data, isLoading} = useQuery(['edit-user-details', id], (payload)=>CRUDfunc.update(`users/${id}`,payload),{
    //     initialData: () => {
    //         const userDetails = queryClient.getQueryData('user')?.data?.find((details) => details.id === parseInt(id))

    //         if(userDetails){
    //             return{data: userDetails}
    //         }else{
    //             return undefined
    //         }
    //     }
    // } )

    // const {mutate} = useMutation((value)=> CRUDfunc.update(`users/${id}`,value),{
    //     onSuccess: () =>{
    //         queryClient.invalidateQueries('user-details')
    //     }
    // })

    const handleRef = () => {
        return inputRef.current.click()
    }

    const handleChange = (e) => {

        if(e.target.files[0]){
            const fileReader = new FileReader()
            fileReader.readAsDataURL(e.target.files[0])
            fileReader.onload = ()=>{
             setImage(fileReader.result)
            }
        }
        
        
    }

    useEffect(()=>{
        localStorage.setItem("users", JSON.stringify(users))
    },[users])

    const handleSubmit = (values) =>{

        setUsers((prev)=>
          prev.map((item)=>
            item.id === parseInt(id)?
            {
                ...item,
                userFname: values.userFname,
                userLname: values.userLname,
                userEmail: values.userEmail,
                userNumber: values.userNumber,
                userDepartment: values.userDepartment,
                userRole: values.userRole,
                // profileImg: image
            }:
            item
          )
        )
        
        navigate(`/users/user-details/${id}`)
    //    return mutate(values)
    }

    // if(isLoading){
    //     return <div>Loading...</div>
    //   }

  return (
   
    <Formik
       initialValues={data}
       onSubmit={handleSubmit}
    >
        {
            () => {
                return(
                    <Form>
                        <div className={addUser.addUserContainer}>

                            <div className={userDetails.hWrappper}>

                                <div className={contractor.herosection1}>  
                                        
                                    <BsArrowLeftShort onClick={() => navigate("/users")} className={contractor.backArrow}/>

                                    <div>
                                        
                                        <p className={contractor.backArrowText1}>
                                        Back to User Management
                                        </p>

                                        <h6 className={userDetails.backArrowText2}> 
                                            Edit Staff Details
                                        </h6>

                                    </div>
                                        
                                </div>

                                <div className={`${addUser.btnWrapper}`}>

                                    <button
                                     onClick={()=>navigate(`/users/user-details/${id}`)}
                                    >
                                        Cancel
                                    </button>

                                    <Update
                                      fName={data?.userFname}
                                      lName={data?.userLname}
                                    />

                                    {/* <button type='submit'>
                                        Update
                                    </button> */}
                                    
                                </div>

                            </div>

                            <hr/>

                            <div className={addUser.formWrapper}>
                                
                                <Field >
                                    {
                                        ({field}) => {
                                            return(
                                                <div className={addUser.imageWrapper}>

                                                    <img 
                                                        onClick={handleRef} 
                                                        src={
                                                            image?image:
                                                            data?.profileImg?
                                                            data?.profileImg:
                                                            detailAvatar
                                                        } 
                                                        alt="User"/>

                                                    <input type="file" accept='image/' ref={inputRef} hidden onChange={handleChange}/>

                                                    <button type='button' onClick={handleRef}>Change Picture</button>
                                                    

                                                </div>
                                            )
                                        }
                                    }
                                </Field>
                            

                                <div className={addUser.fieldWrapper}>

                                    <div>

                                        <Field name='userFname'>
                                            {
                                                ({field}) =>{
                                                    return(
                                                        
                                                        <div>
                                                            <label>First Name</label>
                                                            <div>
                                                                <input type='text' placeholder='' {...field}/>
                                                            </div>
                                                            
                                                        </div>
                                                    )
                                                }
                                            }
                                        </Field>
                                        
                                        <Field name='userLname'>
                                            {
                                                ({field}) =>{
                                                    return(
                                                        <div>
                                                            <label>Surname</label>
                                                            <div>
                                                                <input type='text' placeholder='' {...field}/>
                                                            </div>
                                                            
                                                        </div>
                                                    )
                                                }
                                            }
                                        </Field>    

                                    </div>

                                    <div>

                                        <Field name='userEmail'>
                                            {
                                                ({field}) =>{
                                                    return(
                                                        <div>
                                                            <label>Email Address</label>
                                                            <div>
                                                                <input type='text' placeholder='' {...field}/>
                                                            </div>
                                                            
                                                        </div>
                                                    )
                                                }
                                            }
                                        </Field>

                                        <Field name='userNumber'>
                                            {
                                                ({field}) =>{
                                                    return(
                                                        <div>
                                                            <label>Phone Number</label>
                                                            <div>
                                                                <input type='text' placeholder='' {...field}/>
                                                            </div>
                                                        
                                                        </div>
                                                    )
                                                }
                                            }
                                        </Field>

                                        <Field name='userAltNumber'>
                                            {
                                                ({field}) =>{
                                                    return(
                                                        <div>
                                                            <label>Alternate Phone Number</label>
                                                            <div>
                                                                <input type='text' placeholder='' {...field}/>
                                                            </div>
                                                            
                                                        </div>
                                                    )
                                                }
                                            }
                                        </Field>

                                        <Field name='userDepartment'>
                                            {
                                                ({field}) =>{
                                                    return(
                                                        <div>
                                                            <label>Department</label>
                                                            <div>
                                                                <input type='text' placeholder='' {...field}/>
                                                            </div>
                                                            
                                                        </div>
                                                    )
                                                }
                                            }
                                        </Field>

                                        <Field name='userRole'>
                                            {
                                                ({field}) =>{
                                                    return(
                                                        <div>
                                                            <label>Role</label>
                                                            <div>
                                                                <input type='text' placeholder='' {...field}/>
                                                            </div>
                                                            
                                                        </div>
                                                    )
                                                }
                                            }
                                        </Field>

                                        <Field name='userLocation'>
                                            {
                                                ({field}) =>{
                                                    return(
                                                        <div>
                                                            <label>Location</label>
                                                            <div>
                                                                <input type='text' placeholder='' {...field}/>
                                                            </div>
                                                            
                                                        </div>
                                                    )
                                                }
                                            }
                                        </Field>

                                    </div>
            
                                </div>

                            </div>
                        </div>
                    </Form>
                )
            }
        }
    </Formik>
        
  )
}

export default Edit_User
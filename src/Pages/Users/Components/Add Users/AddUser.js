import userDetails from '../../Users_Style_Folder/my-userDetails.module.css'
import addUser from '../../Users_Style_Folder/my-addUser.module.css'
import contractor from '../../../../styles/my-contractors.module.css';
import detailAvatar from '../../../../Images/userMainIcon.png'
import {useContext, useRef, useState} from 'react'

import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import {Formik, Form, Field} from 'formik'
import CRUDfunc from '../../../hooks/useQuery/useProject';
import {useMutation} from 'react-query'
import DataContext from '../../../Context API/Create_Context';

function AddUser() {

    const inputRef = useRef()
    const [image, setImage] = useState('')
    const navigate = useNavigate()

    // const {mutate} = useMutation((payload)=>CRUDfunc.create(`users`,payload))

    const {users,setUsers} = useContext(DataContext)

    const handleRef = () => {
        return inputRef.current.click()
    }

    const handleChange = (e) => {
        const file = e.target.files[0]

        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = ()=>{
            setImage(fileReader.result)
        }
       
    
      
    }

    const handleAddUser = () =>{
      setTimeout(()=>navigate("/users"),[1000])
    }

    const initialValues = {
        userFname:"",
        userLname:"",
        userEmail:"",
        userNumber: "",
        userAltNumber: "",
        userDepartment: "",
        userRole: "",
        userLocation: "",
        profileImg:''
    }

    const onSubmit = (value)=>{

        const Id = users.length? (users[users.length-1].id) + 1 : 1

        // const payload ={
        //     ...value,
        //     profileImg:''
        // }

        // payload.profileImg = image

        // return mutate(payload)

        const payload = {
            ...value,
            id:Id,
            userId: "002",
            userStatus: "InActive"
        }

        const newValue = [...users,payload]
        setUsers(newValue)
        localStorage.setItem('users', JSON.stringify(newValue))

       

        navigate('/users')


    }

  return (
   
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    >
        {
            ({values}) => {
                console.log('userV',values)
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
                                            Add User
                                        </h6>

                                    </div>
                                        
                                </div>

                                <div className={addUser.btnWrapper}>

                                    <button>Cancel</button>

                                    <button type='submit'>
                                        Add User
                                    </button>
                                    
                                </div>

                            </div>

                            <hr/>

                            <div className={addUser.formWrapper}> 
                            
                               
                                <div className={addUser.imageWrapper}>

                                    <img onClick={handleRef} src={!image?detailAvatar: image} alt="User"/>

                                    <input type="file" accept='image/' ref={inputRef} hidden onChange={handleChange}/>

                                    <button type='button' onClick={handleRef}>Change Picture</button>
                                
                                </div>

                                <div className={addUser.fieldWrapper}>

                                    <div>
                                        
                                        <div className={addUser.formContainer}>

                                            <div>

                                                <Field name='userFname'>
                                                    {
                                                        ({field}) =>{
                                                            return(
                                                                
                                                                <div>
                                                                    <label>First Name</label>
                                                                    <div>
                                                                        <input {...field} type='text' placeholder='' />
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
                                                                        <input type='text'  {...field} placeholder=''/>
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

                            </div>

                        </div>
                    </Form>
                )
            }
        }
    </Formik>
        
  )
}

export default AddUser
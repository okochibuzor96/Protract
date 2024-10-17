import {useNavigate} from 'react-router-dom';

import contractor from '../../../styles/my-contractors.module.css';
import Formfield from './Formfield';

import imageBadge from '../../../Images/lionhead.svg';
import AddContractorCard from '../../../Images/AddContractorCard.svg';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import {getContractorDetails} from '../../hooks/useQuery/useProject'
import {upDateContractorDetails} from '../../hooks/useQuery/useProject'
import {upDateContractorDetail} from '../../hooks/useQuery/useProject'
import { useParams } from 'react-router-dom';
import {Formik,Form} from 'formik'
import ComplianceDoc from './ComplianceDoc';

import { BsArrowLeftShort } from "react-icons/bs";
import { useRef, useState,useContext,useEffect } from 'react';
import DataContext from '../../Context API/Create_Context';

function EditDetails() {

  const {contractors, setContractors} = useContext( DataContext)
 

  const [image, setImage] = useState("")

  const inputRef = useRef()

  const handleRef = () =>{

    inputRef.current.click()

  }

  const handleChange = (event) =>{

    const file = event

      
    const fileRender = new FileReader()
    fileRender.readAsDataURL(file)
    fileRender.onload = () =>{
      setImage(fileRender.result)
      
    }

  }

  const navigate = useNavigate();

  const submitButton= 'submitButton'

  const queryClient = useQueryClient()

  const {id} = useParams()

  const data = contractors.find((item)=> item.id === parseInt(id))

  useEffect(() => {
    localStorage.setItem("contractors", JSON.stringify(contractors));
  }, [contractors])

  // const {data,isLoading} = useQuery(['editDetail', id], getContractorDetails, {
  //   initialData: () => {
  //     const contractorDetails = queryClient.getQueryData('contractorDetails')?.data?.find((details) => details.id === parseInt(id))

  //     if(contractorDetails){
  //       return{data: contractorDetails}
  //     }else{
  //       return undefined
  //     }
  //   }
  // })

  

  // const {mutate,isLoading:isUpdating} = useMutation(upDateContractorDetails,{
  //   onSuccess: ()=>{
  //     queryClient.invalidateQueries('editDetail')
  //   }
  // })

  const onSubmit = (value) =>{

    // const payload ={
    //   ...value,
    //   avarta:""
    // }

    // payload.avarta = image? image:data?.data.avarta

    // mutate(payload)

    

    setContractors((prev)=>
      prev.map((item)=>
      item.id === value.id?
      {
        ...item, 
        companyName:value.companyName,
        rcNumber:value.rcNumber,
        contractorId:value.contractorId,
        specialization:value.specialization,
        mailAddress:value.mailAddress,
        companyAddress:value.companyAddress,
        contactPerson:value.contactPerson,
        contactNumber:value.contactNumber,
        contactEmailAddress:value.contactEmailAddress
      } : item)
    )

    navigate(`/contractors/contractor_details/${id}`)
    
  }

  // if(isLoading || isUpdating){
  //   return <div>Loading...</div>
  // }


  return (

    <Formik
      initialValues={data}
      onSubmit={onSubmit}
    >
      {
        ({values, setFieldValue}) =>{
          return(
            <Form className={contractor.editContainer}>

              <div className={contractor.herosectionContainer}>

                <div className={contractor.herosection1}>

                  <BsArrowLeftShort onClick={() => navigate("/contractors")} className={contractor.backArrow}/>

                  <div>
                    
                    <p className={contractor.backArrowText1}>
                      Back to All Contractors
                    </p>

                    <h6 className={contractor.backArrowText2} >
                      Edit Contractor Details
                    </h6>

                  </div>

                </div>
                
                <div className={`${contractor.btnContainer}`}>

                  <button className={`${contractor.cancelBtn} rounded-2`}  onClick={() => navigate(-1)}>
                    Cancel
                  </button>

                  <button type='submit' className={`${contractor.updateBtn} rounded-2`}>
                    Update
                  </button>

                </div>

              </div>

              <hr/>

              <div className={`${contractor.companyDetailsWrapper} mt-2 pt-4 pb-3`}>

                <div>  

                  <div className={`${contractor.AddContractorWrapper} bg-white`}>

                    <div>
                    

                      <input 
                        
                        type="file" 
                        name='avarta'
                        ref={inputRef}
                        hidden   
                        onChange={(event) => {
                          handleChange(event.target.files[0])
                        }} 
                      />
                    
                      <div>
                        <img onClick={handleRef} src={image?image:data?.avarta?data?.avarta:imageBadge} alt="" className={contractor.companyDetailsImage}/>
                      </div>
                      
                      <label onClick={handleRef}  className={contractor.upDateBtn}>

                        Choose Picture

                      </label> 
                      
                    </div>

                  </div>  

                  <div className={contractor.NewContractor1}>

                    <div className={contractor.formContainer}>

                      <Formfield submitButton={submitButton}/>

                      <h6 className={`${contractor.docHeader} mb-3 mt-5`}>Upload Regulatory Compliance Documents</h6>

                      <ComplianceDoc
                        data={data}
                        values={values}
                        setFieldValue={setFieldValue}
                        // mutate={mutate}
                      />

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

export default EditDetails
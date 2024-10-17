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
import { useRef, useState } from 'react';

function EditDetails() {

  const [image, setImage] = useState("")

  const inputRef = useRef()

  const handleRef = () =>{

    inputRef.current.click()

  }

  const handleChange = (event) =>{

    const file = event

    console.log('file', file)
      
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

  const {data,isLoading} = useQuery(['editDetail', id], getContractorDetails, {
    initialData: () => {
      const contractorDetails = queryClient.getQueryData('contractorDetails')?.data?.find((details) => details.id === parseInt(id))

      if(contractorDetails){
        return{data: contractorDetails}
      }else{
        return undefined
      }
    }
  })

  console.log('final value', data?.data)

  const {mutate,isLoading:isUpdating} = useMutation(upDateContractorDetails,{
    onSuccess: ()=>{
      queryClient.invalidateQueries('editDetail')
    }
  })

  const onSubmit = (value) =>{

    console.log('final value', value)

    const payload ={
      ...value,
      avarta:""
    }

    payload.avarta = image? image:data?.data.avarta

    mutate(payload)

    navigate(`/contractors/contractor_details/${id}`)
    // return mutate({route: `users/${value.id}`, payload})
  }

  if(isLoading || isUpdating){
    return <div>Loading...</div>
  }


  return (

    <Formik
      initialValues={data?.data}
      onSubmit={onSubmit}
    >
      {
        ({values, setFieldValue}) =>{
          return(
            <Form>

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

              <div className={`${contractor.companyDetailsWrapper} mt-2 ps-4 pt-4 pb-3`}>  

                {/* <div className={contractor.companyDetailsImageWrapper}>

                  <img className={contractor.companyDetailsImage} src={data?.data.avarta !==""?data?.data.avarta:imageBadge} alt='Company Logo'/>

                  <input id="actual-btn" type="file"  hidden />

                  <label htmlFor="actual-btn" className={contractor.upDateBtn}>
                    Choose Picture
                  </label>

                </div> */}

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
                      <img onClick={handleRef} src={image?image:data?.data.avarta?data?.data.avarta:imageBadge} alt="" className={contractor.companyDetailsImage}/>
                    </div>
                    
                    <label onClick={handleRef}  className={contractor.upDateBtn}>

                      Choose Picture

                    </label> 
                    
                  </div>

                </div>

                    

                <div className={contractor.NewContractor1}>

                  <Formfield submitButton={submitButton}/>

                  <h6 className={`${contractor.docHeader} mb-3 mt-4`}>Upload Regulatory Compliance Documents</h6>

                  <ComplianceDoc
                    data={data}
                    values={values}
                    setFieldValue={setFieldValue}
                    mutate={mutate}
                  />

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
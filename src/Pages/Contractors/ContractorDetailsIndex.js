 
import {useNavigate,useParams} from 'react-router-dom';


import { BsArrowLeftShort } from "react-icons/bs";
import barsIcon from '../../Images/bars.svg';
import personIcon from '../../Images/person.svg';
import imageBadge from '../../Images/lionhead.svg';

import CompanyDetails from "./CompanyDetails";
import CompanyData from "./CompanyData";
import contractor from '../../styles/my-contractors.module.css';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {getContractorDetails, upDateContractorDetails} from '../hooks/useQuery/useProject'
import { useState } from 'react';

import {Formik,Form} from 'formik'
import Deny_Modal from '../Payments/Payment Details/Deny_Modal';
import Approve_Modal from '../Payments/Payment Details/Approve_Modal';




function ContractorDetailsIndex() {

  const {id} = useParams()

  const [preveiw, setPreveiw] = useState('')

  const navigate = useNavigate();

  const queryClient = useQueryClient()

    const {data, isLoading} = useQuery(['contractorDetails', id], getContractorDetails, {
        
      initialData: () => {
          const contractorDetails = queryClient.getQueryData('contractors')?.data?.find((contractors) => contractors.id === parseInt(id))
      
          if(contractorDetails){
          return{data: contractorDetails}
          }else{
          return undefined
          }
      }
    })

    const {mutate,isSuccess,isLoading:isLoadingImage} = useMutation(upDateContractorDetails,{
      onSuccess: ()=>{
        queryClient.invalidateQueries('contractorDetails')
      }
    })

    const handleImageChange = (e) =>{
      const File = e.target.files[0]

      if(File){
        const fileReader = new FileReader()
        fileReader.readAsDataURL(File)
        fileReader.onload = () =>{
          setPreveiw(fileReader.result)
        }
      }
    }

    const handleImageUpdate = ()=>{

      const payload ={
        avarta:''
      }
      payload.avarta=preveiw
      payload.id=id

      console.log('p',payload)
      mutate(payload)

      setTimeout(()=>setPreveiw(""),1000)
      
    }

    // if(isSuccess){
    //   setPreveiw('')
    // }

  
  

  return (
    <>
      <div className={contractor.herosectionWrapper}>

        <div className={contractor.herosection1}>
          
          
          <BsArrowLeftShort onClick={() => navigate("/contractors")} className={contractor.backArrow}/>
          

          <div>
            <p className={contractor.backArrowText1}>
              Back to All Contractors
            </p>
  
            <h6 className={contractor.backArrowText2}> 
              First City Monument Bank
            </h6>

          </div>
            
        </div>
        
        <div className={contractor.herosection2}>

          <Approve_Modal/>
          
          <Deny_Modal/>
        

          <div>
            
            <img src={barsIcon} />
            
            <button type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className="border border-0 p-0">
            <img src={personIcon} />

            </button>
            

            {/* modal */}
            <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              
              <div className="modal-dialog">

                <div className="modal-content">

                  <div className="modal-header">

                    <h1 className="modal-title fs-5 block105" id="staticBackdropLabel">

                      Reason for Account Suspension

                    </h1>

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                  </div>

                  <div className="modal-body">

                    <div className="mx-5 ">

                      <h6 className=" block106">What is your reason for banning this contractor</h6>

                      <div className="form-floating mb-5 mt-2 ">

                        <textarea className="form-control block107" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        
                      </div>

                    
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-center mb-5">

                    
                    <div>
                      <button type="button" className="btn btn-primary text-white  me-3 block108">Suspend Account</button>
                    </div>

                    <div>

                      <button type="button" className="btn btn-secondary rounded-2 block109" data-bs-dismiss="modal">Cancel</button>
                    </div>

                  </div>

                </div>

              </div>

            </div>
            
          </div>

          <button onClick={() => navigate(`edit_details`)} className={contractor.editDetailsBtn}>
          Edit Details
          </button>

        </div>

      </div>

      <hr/>

      <div className={contractor.companyDetailsWrapper}>
        
        <>
          

                
          
          {
            isLoadingImage?
            
            <div class={`${contractor.companyDetailsImageWrapper} d-flex justify-content-center`}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>:
              preveiw?
              <div className={contractor.companyDetailsImageWrapper}>
            <img className={contractor.companyDetailsImage} src={preveiw}/>
            <label onClick={handleImageUpdate} className={contractor.upDateBtn}>Update Logo</label>
            </div>:
             <div className={contractor.companyDetailsImageWrapper}>
             <img className={contractor.companyDetailsImage} src={data?.data.avarta||imageBadge}/>
             <label htmlFor="actual-btn" className={contractor.upDateBtn}>Change Logo</label>
             </div>
            
          

          
          }

          <input id="actual-btn" type="file" onChange={handleImageChange}  hidden />

         
          
        </>

        <div className={contractor.ScrollWrapper}>

          <div className={contractor.verticalScroll}>

            <div className={contractor.companyDetailsInfoWrapper}>

              <p>Company Details</p>
              
                <CompanyDetails 
                  id={id}
                  data={data?.data}
                  isLoading={isLoading}
                />

                <CompanyData />
              
            </div>

          </div>
          
        </div>

      
      </div>
    </>
  )
}

export default ContractorDetailsIndex
import React from 'react'
import { useNavigate } from 'react-router-dom';
import contractor from '../../../styles/my-contractors.module.css';
import settings from '../../Settings/Styles/my-settings.module.css'

function Approve_Modal() {

  const navigate =  useNavigate()
  
  return (
    <>

        <button 

            type="button"  
            data-bs-toggle="modal" 
            data-bs-target="#staticBackdrop1"
            className={contractor.approveBtn} 
           
         
        >
            Approve
        </button>

           
        {/* modal */}
        <div 
            className={`modal fade`} id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"aria-hidden="true"
        >
                
            <div className="modal-dialog">

                <div className={`${settings.deleteModalContent} modal-content`}>

                    <div className="modal-header">

                        <h1 
                            className="modal-title fs-5 block105" id="staticBackdropLabel"
                        >

                            Payment Approval
                        </h1>

                        <button 
                        type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className={`${settings.modalBody} modal-body d-flex justify-content-center`}>

                        <div>Are you sure you want to approve this payment?</div>

                    </div>
                    
                    <div className="d-flex justify-content-center mb-5">
                        
                        <button 
                        type="button" 
                        className={`${settings.addButton} btn btn-primary text-white  me-3`}
                        onClick={()=>setTimeout(()=> navigate('/payments'),[1000])}
                        data-bs-dismiss="modal"
                        
                        >
                            Approve
                        </button>

                        <button 
                            type="button" 
                            className={`${settings.cancelButton} btn btn-secondary rounded-2`} 
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </>
  )
}

export default Approve_Modal
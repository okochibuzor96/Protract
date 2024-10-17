import { useLocation, useNavigate, useParams } from 'react-router-dom';
import contractor from '../../../styles/my-contractors.module.css';
import settings from '../../Settings/Styles/my-settings.module.css'

function Deny_Modal() {

    const navigate =  useNavigate()
    const location = useLocation()
    const {id} = useParams()

  return (
    <>

        <button 
            type="button"  
            data-bs-toggle="modal" 
            data-bs-target="#staticBackdrop2"
            className={contractor.denyBtn} 
        >
          Deny
        </button>


        {/* modal */}
        <div 
        className={`modal fade`} id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"aria-hidden="true"
        >
            
        <div className="modal-dialog">

            <div className={`${settings.deleteModalContent} modal-content`}>

                <div className="modal-header">

                    <h1 
                        className="modal-title fs-5 block105" id="staticBackdropLabel"
                    >

                        Deny Payment
                    </h1>

                    <button 
                    type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                </div>

                <div className={`${settings.modalBody} modal-body d-flex justify-content-center`}>

                    <div>Are you sure you want to deny this payment?</div>

                </div>
                
                <div className="d-flex justify-content-center mb-5">
                    
                    <button 
                    type="button" 
                    className={`${settings.addButton} btn btn-primary text-white  me-3`}
                    onClick={
                        location.pathname === `/contractors/contractor_details/${id}`?
                        ()=>setTimeout(()=>navigate('/contractors'),[1000]):
                        ()=>setTimeout(()=>navigate('/payments'),[1000])}
                    data-bs-dismiss="modal"
                    
                    >
                       Deny
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

export default Deny_Modal
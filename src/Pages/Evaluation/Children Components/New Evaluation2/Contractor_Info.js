import { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import DataContext from '../../../Context API/Create_Context'
import paymentDetail from '../../../Payments/Payment_CSS_folder/my-paymentDetails.module.css'

function Contractor_Info({contractordetails,contractorFormId}) {

    const {id} = useParams()
    console.log(contractorFormId)

    const location = useLocation()

    const {contractors, evaluation} = useContext(DataContext)

    const data2 = evaluation.find((evaluation)=> evaluation.id === parseInt(id))

    const data = contractors.find((contractor)=> contractor.id === parseInt(contractorFormId))
    
  return (
    
    <div className={paymentDetail.contractInfoWrapper}>

        <div>

            <img src={contractordetails?.avarta} alt='company image'/>

        </div>

        <div  className={paymentDetail.contractInfo}>                    

            <div>
                { data?.companyName}  
            </div>

            <div>
        
                <div>
                
                    <h6>Contractor ID</h6>

                    <div>{ data?.contractorId}</div>
                    
                </div>

                <div>
                
                    <h6>Phone Number</h6>

                    <div>{ data?.phoneNumber}</div>

                </div>

                <div>
                
                    <h6>Email Address</h6>

                    <div>{ data?.mailAddress}</div>

                </div>

            </div>

        </div>  


    </div>

  )
}

export default Contractor_Info
import paymentDetail from '../../../Payments/Payment_CSS_folder/my-paymentDetails.module.css'

function Contractor_Info({contractordetails}) {
  return (
    <div className={paymentDetail.contractInfoWrapper}>

        <img src='' alt='Company Image'/>

        <div  className={paymentDetail.contractInfo}>                    

        <div>
            {contractordetails?.data.companyName}  
        </div>

        <div>
            
            <div>
            
            <h6>Contractor ID</h6>

            <div>{contractordetails?.data.contractorId}</div>
                
            </div>

            <div>
            
                <h6>Phone Number</h6>

                <div>{contractordetails?.data.phoneNumber}</div>

            </div>

            <div>
            
                <h6>Email Address</h6>

                <div>{contractordetails?.data.mailAddress}</div>

            </div>

        </div>

        </div>  

    </div>
  )
}

export default Contractor_Info
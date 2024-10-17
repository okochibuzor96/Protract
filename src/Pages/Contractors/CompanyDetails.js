import contractor from '../../styles/my-contractors.module.css';


function CompanyDetails({id, data, isLoading}) {

    if(isLoading){
        return <div>Loading...</div>
    }

  return (
    <div className={contractor.companyDetailsInfo}>

        <div className={contractor.dataTitle}> 
            <div>
                Company Name
            </div>

            <div className={contractor.dataContent}>
                {data.companyName}
            </div>

        </div>

        <div>
            <div className={contractor.dataTitle}>
                Mail Address
            </div>

            <div className={contractor.dataContent}>
                {data.mailAddress}
            </div>

        </div>

        <div>
            <div className={contractor.dataTitle}>
              Phone Number
            </div>

            <div className={contractor.dataContent}>
                {data.phoneNumber}
            </div>

        </div>
        
        <div>

            <div className={contractor.dataTitle}>
                Company Address
            </div>

            <div className={contractor.dataContent}>
                {data.companyAddress}
            </div>

        </div>

        <div>

            <div className={contractor.dataTitle}>
                RC Number
            </div>

            <div className={contractor.dataContent}>
                {data.rcNumber}
            </div>

        </div>

        <div>

            <div className={contractor.dataTitle}>
               Speccialization
            </div>

            <div className={contractor.dataContent}>
               {data.specialization}
            </div>

        </div>

        <div>

            <div className={contractor.dataTitle}>
               Contact Person
            </div>

            <div className={contractor.dataContent}>
               {data.contactPerson}
            </div>

        </div>

        <div>

            <div className={contractor.dataTitle}>
               Contact Number
            </div>

            <div className={contractor.dataContent}>
               {data.contactNumber}
            </div>

        </div>

        <div>

            <div className={contractor.dataTitle}>
               Email Address
            </div>

            <div className={contractor.dataContent}>
               {data.contactEmailAddress}
            </div>

        </div>
       
    </div>
  )
}

export default CompanyDetails
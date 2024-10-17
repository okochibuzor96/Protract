import contractor from '../../styles/my-contractors.module.css';
import { useContext } from "react";
import DataContext from '../Context API/Create_Context';
import { useParams } from 'react-router-dom';


function CompanyDetails({isLoading}) {

    const {id} = useParams()

    const {contractors} = useContext(DataContext)

    const data = contractors.find((contractor)=> contractor.id === parseInt(id))

    

    if(isLoading){
        return <div>Loading...</div>
    }

  return (
    <div className={contractor.companyDetailsInfo}>

        <div> 
            <div className={contractor.dataTitle}>
                Company Name
            </div>

            <div className={contractor.dataContent}>
                {data && data.companyName}
            </div>

        </div>

        <div>
            <div className={contractor.dataTitle}>
                Mail Address
            </div>

            <div className={contractor.dataContent}>
                {data && data.mailAddress}
            </div>

        </div>

        <div>
            <div className={contractor.dataTitle}>
              Phone Number
            </div>

            <div className={contractor.dataContent}>
                {data && data.phoneNumber}
            </div>

        </div>
        
        <div>

            <div className={contractor.dataTitle}>
                Company Address
            </div>

            <div className={contractor.dataContent}>
                {data && data.companyAddress}
            </div>

        </div>

        <div>

            <div className={contractor.dataTitle}>
                RC Number
            </div>

            <div className={contractor.dataContent}>
                {data && data.rcNumber}
            </div>

        </div>

        <div>

            <div className={contractor.dataTitle}>
               Speccialization
            </div>

            <div className={contractor.dataContent}>
               {data && data && data.specialization}
            </div>

        </div>

        <div>

            <div className={contractor.dataTitle}>
               Contact Person
            </div>

            <div className={contractor.dataContent}>
               {data && data.contactPerson}
            </div>

        </div>

        <div>

            <div className={contractor.dataTitle}>
               Contact Number
            </div>

            <div className={contractor.dataContent}>
               {data && data.contactNumber}
            </div>

        </div>

        <div>

            <div className={contractor.dataTitle}>
               Email Address
            </div>

            <div className={contractor.dataContent}>
               {data && data.contactEmailAddress}
            </div>

        </div>
       
    </div>
  )
}

export default CompanyDetails
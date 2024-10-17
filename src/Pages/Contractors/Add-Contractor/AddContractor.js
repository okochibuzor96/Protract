import contractor from '../../../styles/my-contractors.module.css';
import { BsArrowLeftShort } from 'react-icons/bs';

import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {postContractors} from '../../hooks/useQuery/useProject'
import {useMutation} from 'react-query'

import NewContractor1 from '../Add-Contractor/NewContractor_1';
import NewContractor2 from '../Add-Contractor/NewContractor_2';

function AddContractor() {

  const [page, setPage] = useState(0);
  const [image, setImage] = useState("")
  const navigate = useNavigate();

  const [fieldValues, setFieldValues] = useState({
    contractorId:'',
    specialization:'',
    companyName:'',
    rcNumber:'',
    companyAddress:'',
    contactPerson:'',
    phoneNumber:'',
    contactEmailAddress:'',
    mailAddress:'',
    NSITF:'',
    PENCOM:'',
    BBP:'',
    RC:'',
    ITF:'',
    taxClearance:'',
    status:"active",
    avarta:null,
    document:[]

  })

  const handleNext = (value) =>{
    setFieldValues((oldValues) =>({...oldValues, ...value}));
    setPage((current)=> current +1)
  }

  const handlePrev = (value) =>{
    setFieldValues((oldValues) =>({...oldValues, ...value}));
    setPage((current)=> current -1)
  }

  const handleChange = (event) =>{

    const file = event
      
    const fileRender = new FileReader()
    fileRender.readAsDataURL(file)
    fileRender.onload = () =>{
      setImage(fileRender.result)
      
    }

  }

  const PageDisplay = [
    <NewContractor1
      fieldValues={fieldValues}
      handleNext={handleNext}
      image={image}
      handleChange={handleChange}
      setFieldValues={setFieldValues}
    />,
    <NewContractor2
      fieldValues={fieldValues}
      handleNext={handleNext}
      handlePrev={handlePrev}
      image={image}
      handleChange={handleChange}
    />
  ]

  return (
    
    <main>

      <div className={contractor.AddContractorContainer1}>

        
        <div className={contractor.herosection1}>

          <BsArrowLeftShort  onClick={() => navigate('/contractors')} className={contractor.backArrow}/>

          <div>
            
            <p className={contractor.backArrowText1}>
              Back to All Contractors
            </p>

            <h6 className={contractor.backArrowText2} >
              Add Contractor
            </h6>

          </div>

        </div>
        
        <div className={`${contractor.btnContainer}`}>

          <label className={`${contractor.cancelBtn} rounded-2`}  onClick={() => navigate('/contractors')}>
            Cancel
          </label>
        </div>

      </div>

      <hr/>
        
      {PageDisplay[page]}

    </main>

  )
}

export default AddContractor
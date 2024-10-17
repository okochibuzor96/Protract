import { BsFilePlus } from "react-icons/bs";
import { BsFileEarmarkPlus } from "react-icons/bs";
import contractor from '../../../styles/my-contractors.module.css';
import {useNavigate} from 'react-router-dom';
import {Formik,Form,Field,FieldArray} from 'formik'
import {useMutation} from 'react-query'
import {postContractors} from '../../hooks/useQuery/useProject'
import AddContractorCard from '../../../Images/AddContractorCard.svg';
import Add_doc_modal from "./Add_doc_modal";
import {useRef,useState, useContext} from 'react';
import Doc from "../../../Components/Add Document/Doc";
import DataContext from "../../Context API/Create_Context";
import {useEffect} from 'react'

function NewContractors2(props) {

  const {contractors, setContractors} = useContext(DataContext)

  const {handlePrev,handleNext,fieldValues,image,handleChange} = props

  const inputRef = useRef()

  const handleRef = () =>{

    inputRef.current.click()

  }

  const [documentTitle, setDocumentTitle] = useState("");
  const [initials, setInitials] = useState("");
  const [docValue, setDocValue] = useState("");

  const {mutate} = useMutation(postContractors)

  

  const navigate = useNavigate();

  const handleDocChange = (event, index, setFieldValue) => {

    const file = event.target.files[0];

    const initial = getFileInitials(file.name)

    if (file) {
      setInitials(initial)
    }

    const docReader = new FileReader()
    docReader.readAsDataURL(file)
    docReader.onload = () =>{
      // setFieldValue(`document[${index}].doc`, docReader.result);
      setDocValue(docReader.result)
    }
  };

  const getFileInitials = (fileName) => {
    
    // Step 1: Remove the file extension
    const nameWithoutExtension = fileName.split('.').slice(0, 1).join('.');
    
    // Step 2: Split the name into words (by space, underscore, or hyphen)
    const words = nameWithoutExtension.split(/[\s_-]+/);
    
    // Step 3: Extract the first letter of each word
    const initials = words.map(word => word[0]?.toUpperCase()).join('');
  
    return initials;
  };

  // useEffect(()=>{
  //   localStorage.setItem('contractors', JSON.stringify(contractors))
  // },[contractors])

  const onSubmit = (value) =>{

    console.log('con', value)

    handleNext(value)
    const id = contractors.length? (contractors[contractors.length-1].id) + 1 : 1

    const payload={
      id,
      ...value,
      avarta:"",
    }

    // payload.avarta=image

   

    const newContractor = [...contractors,payload]

    setContractors(newContractor)
    localStorage.setItem('contractors', JSON.stringify(newContractor))
    navigate("/contractors")

    // return mutate(payload)
  }

  console.log('fcon', contractors)

  

  return (

    <Formik
     initialValues={fieldValues}
     onSubmit={onSubmit}
    >
      {
        ({values,setFieldValue,fieldValue}) => {
          return(
            <Form >

              <div className={contractor.AddContractorContainer2}>

                <div className={`${contractor.AddContractorWrapper} bg-white`}>

                  <div>

                    <input 
                      
                      type="file" 
                      ref={inputRef}
                      hidden   
                      onChange={(event) => {
                        handleChange(event.target.files[0])
                      }} 
                    />

                    <div>
                      <img onClick={handleRef} src={image? image :AddContractorCard} alt="" className={contractor.companyDetailsImage}/>
                    </div>
                    
                    <label onClick={handleRef}  className={contractor.upDateBtn}>

                      Choose Picture

                    </label>                 
                    
                  </div>

                </div>
              
                <div className={`${contractor.NewContractor2}`}>

                  
                  <div>
                    <Doc
                    values={values}
                    setFieldValue={setFieldValue}
                    addButtonClassName={contractor.FileEarmarkWrapper}
                    fileContainerClassName={contractor.complianceDocWrapper}
                    fileWrapperClassName={contractor.fileWrapper}
                    /> 

                  </div> 

                    
                    
                  
                  

                  <div className={contractor.positionAbsolute}></div>

                  <div className={contractor.positionRelative}>

                    <button onClick={handlePrev} className={` ${contractor.previousBtn} rounded-1 text-center border border-light`} >Previous</button>
                      
                    <button type="submit" className={` ${contractor.nextBtn} rounded-1`}>Submit</button>

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

export default NewContractors2
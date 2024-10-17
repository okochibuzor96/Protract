import contractor from '../../../styles/my-contractors.module.css';
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useNavigate} from 'react-router-dom'
import React from 'react'
import {Field, FieldArray} from 'formik'
import Doc from '../../../Components/Add Document/Doc';



function ComplianceDoc({data, values, setFieldValue,mutate}) {

  const navigate = useNavigate();

  const handleDocChange = (event, index, setFieldValue) => {

    const file = event.target.files[0];

    const initials = getFileInitials(file.name)

    if (file) {
      // Setting the document at the specific index

      setFieldValue(`document[${index}].docName`, initials);

    }

    const docReader = new FileReader()
    docReader.readAsDataURL(file)
    docReader.onload = () =>{
      setFieldValue(`document[${index}].doc`, docReader.result);
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
  
  return (
    <div>

      <Doc
      data={data}
      values={values}
      setFieldValue={setFieldValue}
      addButtonClassName={contractor.FileEarmarkWrapper}
      fileContainerClassName={contractor.complianceDocWrapper}
      fileWrapperClassName={contractor.fileWrapper}
      editMutate={mutate}
      />

      {/* <FieldArray name="document">
        {
          () =>{
            return(
              <>

                {

                  data?.data.document.map((value,index) =>(

                    <React.Fragment key={index}>
                     
                          

                        <div id="label">

                          {
                            !value.docName? 'You have not uploaded any document' :
                            <label 
                              htmlFor={`file-${index}`} 
                              className={`${contractor.FileEarmarkWrapper} d-flex align-items-center justify-content-center rounded-1`}
                            >
                              <BsFileEarmarkPlus className={contractor.FileEarmark}/>
                            </label>

                        
                          }

                          <input 
                            name={`document[${index}].doc`} 
                            type='file' 
                            id={`file-${index}`}  
                            hidden 
                            onChange={(event) =>handleDocChange(event,index,setFieldValue)} 
                          />
                    

                        </div>

                        

                        {
                          values.document[index]?.docName?
                          (<p className={`${contractor.docTitle} text-center`}>{values.document[index]?.docName}</p>):
                          (<p className={`${contractor.docTitle} text-center`}>{value.docName}</p>)
                        }
                      
                                          
                     
                  
                    </React.Fragment>
                  ))
                  
                }

              </>

            )
          }
        }
      </FieldArray> */}

     

    </div> 

  
    
  )
}

export default ComplianceDoc
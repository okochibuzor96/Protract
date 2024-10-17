import { FieldArray, Field } from "formik";
import Doc_Modal from "./Doc_Modal";
import React, {useState} from 'react'
import { BsFileEarmarkPlus } from "react-icons/bs";
import { IoDocumentOutline } from "react-icons/io5";
import contractor from '../../styles/my-contractors.module.css';
import { useLocation, useParams } from "react-router-dom";
import project from '../../Pages/Projects/New_Project/my-NewProject.module.css';
import Change_Doc_Modal from "./Change_Doc_Modal";

function Doc(props) {

  const {
    values,
    setFieldValue,
    fileContainerClassName,
    fileWrapperClassName,
    addButtonClassName,
    editMutate,
    docInitValue,
    deleteMutate,
    data
  } =props

  const {id} = useParams()
  const location = useLocation()

  

  const [documentTitle, setDocumentTitle] = useState("");
  const [initials, setInitials] = useState("");
  const [docValue, setDocValue] = useState("");
  // const [showChangeDoc, setShowChangeDoc] = useState(false)
  const [indexValue,setIndexValue] = useState()

  console.log('II', indexValue)
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

  const handleChangeDoc = (push) =>{
    return
  }

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
    <div className={fileContainerClassName}>

     <FieldArray name='document'>
        {
          ({push,remove}) =>{

            return(
              <>
                
                {
                  values.document.map((document,index) =>{
                   
                    
                    return(
                      <React.Fragment key={index}>
                        {
                          values.document[index]?.docTitle?
                          <div>
                            

                            <Field  name={`document[${index}].doc`}>
                              {
                                () => {
                                  return(
                                    <div onClick={()=>handleChangeDoc()} id={`${index}`} className={fileWrapperClassName}> 

                                     {
                                        location.pathname === '/projects/new-project' || location.pathname === '/contractors/new_contractor'?
                                        <div key={index}>
                                                
                                          <label className={`${location.pathname === '/contractors/new_contractor'?addButtonClassName:""} d-flex align-items-center justify-content-center rounded-1`}>
                                            <IoDocumentOutline  className={contractor.FileEarmark}/>
                                          </label>

                                        </div>:
          
                                        <Change_Doc_Modal
                                          index={indexValue}
                                          handleDocChange={handleDocChange}
                                          setFieldValue={setFieldValue}
                                          documentTitle={documentTitle}
                                          setDocumentTitle={setDocumentTitle}
                                          values={values}
                                          docValue={ docValue}
                                          initials={initials}
                                          setDocValue={setDocValue}
                                          setInitials={setInitials}
                                          addButtonClassName={addButtonClassName}
                                          Id={id}
                                          editMutate={editMutate}
                                          deleteMutate={deleteMutate}
                                          data={data}
                                          remove={remove}
                                        
                                        >

                                          <div key={index}>
                                                
                                            <label className={` d-flex align-items-center justify-content-center rounded-1`}  onClick={()=>setIndexValue(index)}>
                                              <IoDocumentOutline  className={contractor.FileEarmark}/>
                                            </label>

                                          </div>
                                        </Change_Doc_Modal>
                                      }


                                      {
                                      values.document[index]?.docName && (<p className={`${contractor.docTitle} text-center`}>{values.document[index].docName}</p>)}
                                    
                                                        
                                    </div>
                                  )
                                }
                              }

                            </Field>

                          </div>:""
                        }
                      </React.Fragment>
                    
                    )
                  })
                }

                <Doc_Modal
                  index={values.document.length}
                  handleDocChange={handleDocChange}
                  setFieldValue={setFieldValue}
                  push={push}
                  documentTitle={documentTitle}
                  setDocumentTitle={setDocumentTitle}
                  values={values}
                  docValue={ docValue}
                  initials={initials}
                  setDocValue={setDocValue}
                  setInitials={setInitials}
                  addButtonClassName={addButtonClassName}
                  docInitValue={docInitValue}
                  Id={id}
                />
                 
                
              </>
            )
          }
        }
    </FieldArray>   

    </div>
  )
}

export default Doc
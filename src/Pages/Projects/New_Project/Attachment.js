import {Formik,Form,Field,FieldArray} from 'formik'
import { useLocation } from 'react-router-dom';
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useState } from 'react';

import project from './my-NewProject.module.css';
import Doc from '../../../Components/Add Document/Doc';

function New_Project5({handlePrev,handleNext,fieldValues,data,editMutate,id,docInitValue,deleteMutate}) {

  const location = useLocation()

  const [documentTitle, setDocumentTitle] = useState("");
  const [initials, setInitials] = useState("");
  const [docValue, setDocValue] = useState("");


  const handleDocChange = (event, index, setFieldValue) => {

    const file = event.target.files[0];

    const initial = getFileInitials(file.name)

    if (file) {
      setInitials(initial)
    }

    // const docReader = new FileReader()
    
    // docReader.onload = (e) =>{

    //   const blob = new Blob([e.target.result])
    //   // setFieldValue(`document[${index}].doc`, docReader.result);

    //   // const formData = formData.append('file',file)
    //   setDocValue(docReader.result)
    // }

    // docReader.readAsArrayBuffer(file)

    const formData = new FormData()
    formData.append('file',file)

    setDocValue(formData)
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

  const onSubmit = (value) =>{
    handleNext(value)
   console.log('Form value', value)
    return editMutate(value)
  }

  return (
    <Formik
      initialValues={location.pathname === `/projects/project-details/${id}/edit-project`?data?.data||fieldValues:fieldValues}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >
      {
        ({values,setFieldValue}) => {
          console.log('att',values)
          return(
            <Form className={project.attachmentContainer}>

              <div className={project.NewProjectLayoutContent}>

               

                <Doc
                values={values}
                setFieldValue={setFieldValue}
                fileContainerClassName={project.fileContainer}
                fileWrapperClassName={project.fileWrapper}
                addButtonClassName={project.FileEarmarkWrapper}
                editMutate={editMutate}
                docInitValue={docInitValue}
                deleteMutate={deleteMutate}
                data={data}
                />

                <div className={`${project.stepOverLay}`}></div>

                

                <div className={`d-flex justify-content-between align-items-center px-4 ${project.stepButtonWrapper}`}>
                  <button className={`rounded-1 ${project.prevButton}`} onClick={handlePrev} type='button'>Previous</button>
                  <button type='submit' className={`rounded-1 text-center ${project.nextButton}`} >Next</button>
                </div>

              </div>

            </Form>
          )
        }
      }
     
            

    </Formik>

  )
}

export default New_Project5
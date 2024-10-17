import { BsFilePlus } from "react-icons/bs";
import contractor from '../../../styles/my-contractors.module.css';
import { BsFileEarmarkPlus } from "react-icons/bs";
import {useState} from 'react'
import { Field, Formik } from "formik";
import { Form } from "react-router-dom";

function Add_doc_modal(props) {

   const {
    push,
    index,
    handleDocChange,
    setFieldValue,
    documentTitle, 
    setDocumentTitle,
    docValue,
    initials,
    setDocValue
} = props
   
    const handleTitleOnchange =(event) =>{
        setDocumentTitle(event)
        
       
    }

    
    
//   return (
//     <div> 
            
//         <button 
//             type="button"  
//             data-bs-toggle="modal" 
//             data-bs-target="#staticBackdrop" 
//             className={`${contractor.FileEarmarkWrapper} d-flex align-items-center justify-content-center rounded-1  p-0`}
//         >

//             <BsFilePlus className={contractor.FileEarmark}/>

//         </button>

//         {/* modal */}
//         <div 
//             className={`${contractor.modal_fade} modal fade`} 
//             id="staticBackdrop" 
//             data-bs-backdrop="static" 
//             data-bs-keyboard="false" 
//             tabIndex="-1" 
//             aria-labelledby="staticBackdropLabel" 
//             aria-hidden="true" 
//         >
            
//             <div className={`${contractor.modal_dialog} modal-dialog`}>

//                 <div className="modal-content">

//                     <div className="modal-header">

//                         <h1 className={`${contractor.modal_title} modal-title`} id="staticBackdropLabel">

//                             Upload additional documents

//                         </h1>

//                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

//                     </div>

//                     <div className={`${contractor.modal_body} modal-body`}>



//                         <div>

//                             <div>
                                
//                                 <input type='file' id={`file-${index}`}  hidden onChange={(event) =>handleDocChange(event,index,setFieldValue)} />

//                                 <label htmlFor={`file-${index}`}>
//                                     <BsFileEarmarkPlus className={contractor.FileEarmark}/>
//                                 </label>

                                

//                             </div>
                            

//                             <div>
//                                 Click to browse for files or drag file to upload
//                             </div>

//                         </div>

//                         <div>

//                             <label htmlFor="doc">Document Title</label>

//                             <input 
//                                 value={documentTitle}
//                                 onChange={(e) => handleTitleOnchange(e.target.value)}
//                                 className="form-control block107" 
//                                 placeholder="Enter document title" id="doc"
//                             />
                            
//                         </div>




//                     </div>

//                     <div className="d-flex justify-content-center mb-5">


//                         <div>

//                             <button 
//                                 type="button" 
//                                 className="btn btn-primary text-white  me-3 block108"
//                                 onClick={() =>{
                                    
                                    
//                                     if(documentTitle && docValue && initials){

//                                         push({ doc:null, docName:'',documentTitle:''});
//                                         setFieldValue(`document[${index}].docTitle`, documentTitle);
//                                         setFieldValue(`document[${index}].doc`, docValue);
//                                         setFieldValue(`document[${index}].docName`, initials)
//                                         setDocumentTitle('')
//                                         setDocValue('')


//                                     }else{
//                                         alert('Please fill in all the fields')
//                                     }
                                    
//                                 }}
//                                 data-bs-dismiss="modal"
//                             >

//                                 Update

//                             </button>
//                         </div>

//                         <div>

//                             <button 
//                                 type="button" className="btn btn-secondary rounded-2 block109" data-bs-dismiss="modal"
//                             >

//                                 Cancel
                                
//                             </button>
//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </div>    
            
//     </div>
//   )
}

export default Add_doc_modal
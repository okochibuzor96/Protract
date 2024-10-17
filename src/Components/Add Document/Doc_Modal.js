import { BsFilePlus } from "react-icons/bs";
import contractor from '../../styles/my-contractors.module.css';
import { BsFileEarmarkPlus } from "react-icons/bs";
import { Children } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Doc_Modal(props) {

  const navigate =  useNavigate()
    const {
        push,
        index,
        handleDocChange,
        setFieldValue,
        documentTitle, 
        setDocumentTitle,
        docValue,
        initials,
        setInitials,
        setDocValue,
        addButtonClassName,
        Id,
        docInitValue
    } = props
       
        const handleTitleOnchange =(event) =>{
            setDocumentTitle(event)
            
           
        }
    
       const location = useLocation()
        
      return (
        <div> 
                
            <button 
                type="button"  
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdropm" 
                className={`${addButtonClassName} d-flex align-items-center justify-content-center rounded-1  p-0`}
            >
    
                <BsFilePlus className={contractor.FileEarmark}/>
    
            </button>

           
    
            {/* modal */}
            <div 
                className={`${contractor.modal_fade} modal fade`} 
                id="staticBackdropm" 
                data-bs-backdrop="static" 
                data-bs-keyboard="false" 
                tabIndex="-1" 
                aria-labelledby="staticBackdropLabel" 
                aria-hidden="true" 
            >
                
                <div className={`${contractor.modal_dialog} modal-dialog`}>
    
                    <div className="modal-content">
    
                        <div className="modal-header">
    
                            <h1 className={`${contractor.modal_title} modal-title`} id="staticBackdropLabel">
    
                                Upload additional documents
    
                            </h1>
    
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    
                        </div>
    
                        <div className={`${contractor.modal_body} modal-body`}>
    
                            <input type='file' id={`file-${index +1}`}  hidden onChange={(event) =>handleDocChange(event,index,setFieldValue)} />
    
    
                            <label htmlFor={`file-${index +1}`} className={initials?contractor.docUpload:contractor.docNotUpload}>
    
                                <div>
                                    
                                   
                                    <label htmlFor={`file-${index +1}`} >
                                        <BsFileEarmarkPlus className={contractor.FileEarmark}/>
                                    </label>
    
                                    
    
                                </div>
                                
    
                                <div className={contractor.docDescription}>
                                    Click to browse for files or drag file to upload
                                </div>
    
                            </label>
    
                            <div>
    
                                <label className={contractor.docTitle} htmlFor="doc">Document Title</label>
    
                                <input 
                                    value={documentTitle}
                                    onChange={(e) => handleTitleOnchange(e.target.value)}
                                    className="form-control block107" 
                                    placeholder="Enter document title" id="doc"
                                />
                                
                            </div>
    
    
    
    
                        </div>
    
                        <div className="d-flex justify-content-center mb-5">
    
    
                            <div>
    
                                <button 
                                    type={location.pathname === `/projects/project-details/${Id}/edit-project`?"submit":"button"}
                                    className="btn btn-primary text-white  me-3 block108"
                                    onClick={() =>{
                                        
                                        if(documentTitle && docValue && initials ){
    
                                            push({ doc:docValue, docName:initials,docTitle:documentTitle});
                                            setDocumentTitle('')
                                            setDocValue('')
                                            setInitials('')
    
    
                                        }else{
                                            // alert('Please fill in all the fields')
                                            navigate('/projects')

                                        }
                                        
                                    }}
                                    data-bs-dismiss="modal"
                                >
    
                                    Update
    
                                </button>
                            </div>
    
                            <div>
    
                                <button 
                                    type="button" className="btn btn-secondary rounded-2 block109" data-bs-dismiss="modal"
                                >
    
                                    Cancel
                                    
                                </button>
                            </div>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>    
                
        </div>
      )
}

export default Doc_Modal
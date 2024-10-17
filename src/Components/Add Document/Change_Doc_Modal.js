import { BsFilePlus } from "react-icons/bs";
import contractor from '../../styles/my-contractors.module.css';
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";



function Change_Doc_Modal(props) {
    const {
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
        editMutate,
        deleteMutate,
        values,
        data,
        remove,
        children
    } = props

    const location = useLocation()
    const {id} = useParams()
    // const Deletedoc = values.document.map((value,i)=>{
    //     console.log('del',value.docTitle)
    //     return i !== index
    // })

   
    console.log('delM', documentTitle)
    const [showChangeDoc, setShowChangeDoc] = useState(false)
       
    const handleTitleOnchange =(event) =>{
        setDocumentTitle(event)
        
        
    }

    

    
    
    const handleChangeDoc = (e) =>{
        
        return setShowChangeDoc(!showChangeDoc)
    }
        
      return (
        <div > 

            <label  
            className={location.pathname ===`/contractors/contractor_details/${id}/edit_details`?addButtonClassName:''} 
                htmlFor={index} 
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrope"
            >
                {children}
            </label>

            {/* modal */}
            <div 
                className={`${contractor.modal_fade} modal fade`} 
                id="staticBackdrope" 
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

                                {
                                    !showChangeDoc?
                                    'Delete document':
                                    'Change document'
                                }
    
                               
    
                            </h1>
    
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    
                        </div>
    
                        <div className={`${contractor.modal_body} modal-body`}>

                            {
                                !showChangeDoc?
                                <div className={`${contractor.docTitle} text-center`}>
                                    Want to change document? <span onClick={handleChangeDoc} className="text-primary h6">change document</span> else click on delete button to delete document
                                </div>:
                                <>

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
                                </>
                            }

                          
    
                           
    
    
    
    
                        </div>
    
                        <div className="d-flex justify-content-center mb-5">

                            {
                                !showChangeDoc?
                                <div>
    
                                    <button 
                                        type="button" 
                                        key={index}
                                        id={index}
                                        className="btn btn-primary text-white  me-3 block108"
                                        onClick={() =>{
                                            // deleteMutate(Deletedoc)
                                           console.log("d",props)
                                           
                                        }}
                                        data-bs-dismiss="modal"
                                    >
        
                                       Delete
        
                                    </button>

                                </div>:
                                <div>
    
                                    <button 
                                        type="button" 
                                        className="btn btn-primary text-white  me-3 block108"
                                        onClick={() =>{

                                            // const payload={
                                            //   id:'',
                                            //   document:[{docTitle:"",
                                            //   doc:"",
                                            //   docName:""}]
                                            // }

                                            // payload.id=Id
                                            // payload.document[index].docTitle=documentTitle
                                            // payload.document[index].doc=docValue
                                            // payload.document[index].docName=initials

                                            // console.log('log',payload)

                                            // editMutate(payload)

                                            if(documentTitle && docValue && initials){
    
                                               
                                                setFieldValue(`document[${index}].docTitle`, documentTitle);
                                                setFieldValue(`document[${index}].doc`, docValue);
                                                setFieldValue(`document[${index}].docName`, initials)
                                                setDocumentTitle('')
                                                setDocValue('')
                                                setInitials('')
                                                setShowChangeDoc(!showChangeDoc)
                                           
        
        
                                            }
                                            
                                           
                                            
                                        }}
                                        data-bs-dismiss="modal"
                                    >

                                        Update

                                    </button>

                                </div>
                            }
    
                            
    
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

export default Change_Doc_Modal
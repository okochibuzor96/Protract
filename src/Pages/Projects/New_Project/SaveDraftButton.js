import project from './my-NewProject.module.css';
import image from '../../../Images/checked.svg'

function SaveDraftButton() {
  return (
    <div>
                        
        {/*Button trigger modal*/}

        <button className={project.saveDraftButton} type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
        
        Save as draft

        </button>
    
        {/*Modal*/}
        <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >

            <div className="modal-dialog " >

                <div className={`${project.modal_content} modal-content`}>
                    
                    <div className="modal-header border-0 "  >

                        <div className="d-flex mb-2">

                            <div className="me-3">
                                <img src={image} alt=""/>
                            </div>

                            <div className="text-white">

                                <h2 className="modal-title fs-5" id="staticBackdropLabel">
                                Success
                                </h2>

                                <p>Project draft saved successfully</p>

                            </div>

                        </div>

                        <button type="button" className="btn-close btn-close-white mb-5" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>


                    
                </div>
            </div>

        </div> 

    </div>
  )
}

export default SaveDraftButton
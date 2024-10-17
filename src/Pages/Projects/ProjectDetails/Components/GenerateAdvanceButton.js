import generateButton from '../ProjectDetailStyle/my-GenerateButton.module.css'


function GenerateAdvanceButton() {
  return (
    <div>
        
        <button type="button" className={generateButton.advanceButton} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                
            Generate Advance
              
        </button>
            
           

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            
            <div className="modal-dialog">

                <div className={`${generateButton.modalContent} modal-content`}>

                    <div className="modal-header">

                        <h1 className="modal-title fs-5" id="staticBackdropLabel" >

                        Generate Payment

                        </h1>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className={`${generateButton.modalBody} modal-body`}>

                        <h6 className="mb-3" >
                        
                            Which milestone do you want to generate a payment advance for?
                            
                        </h6>

                        <div className="mb-2 ">
                          <div>1</div>
                          <input type="text" placeholder="Block laying up to lintel level" className="rounded-2 ps-4 fs-5 pb-1 stem5-8" />

                        </div>

                        <div className="mb-2 mt-2">

                           <div>2</div>

                          <input type="text" placeholder="Roofing and ceiling" className="ps-4 fs-5 pb-1 stem5-8" />

                        </div>

                        <div className="mb-5 mt-2">

                         <div>2</div>

                         <input type="text" placeholder="Finishing" className="rounded-2 ps-4 fs-5 pb-1 stem5-8" />

                        </div>

                    </div>

                    
                    
                    <div className="d-flex justify-content-center mb-5">

                        
                        

                        <button type="button" className={`${generateButton.paymentButton} text-white rounded-2`}>
                            
                            Generate Payment

                        </button>

                        

                       

                        <button type="button" className={`${generateButton.cancelButton} bg-white rounded-2`} data-bs-dismiss="modal" >
                            
                            Cancel

                        </button>

                        

                    </div>

                </div>

            </div>

        </div> 
  
    </div>
  )
}

export default GenerateAdvanceButton
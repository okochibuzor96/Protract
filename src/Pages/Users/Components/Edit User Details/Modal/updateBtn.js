import btn from '../../User Details/Modal/my-Dbtn.module.css'

function updateBtn({fName, lName, status}) {

  return (

    <>
        
      <button type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className={`${btn.Dbtn} border border-0 p-0`}>
        Update 
      </button>

      {/* modal */}
      <div 
        className={` modal fade`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"
      >
        
        <div className={` modal-dialog`}>

          <div className={`${btn.modalContent} modal-content`}>

            <div className="modal-header">

              <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Account</h1>

                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>

            <div className={`${btn.modalBody} modal-body`}>

              <h6> 
                Are you sure you want to Update {fName}<span className='ms-1'>{lName}’s</span> account?
              </h6>
          
            </div>
            
            <div className="d-flex justify-content-center mb-5">

              
              <div>

                <button 
                  type="submit" 
                  data-bs-dismiss="modal" 
                  className="btn btn-primary text-white  me-1"
                  >
                    Update
                  </button>
              
              </div>

              <div>

                <button 
                  type="button" 
                  className="btn btn-secondary rounded-2" data-bs-dismiss="modal"
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
        
    </>

  )
}

export default updateBtn
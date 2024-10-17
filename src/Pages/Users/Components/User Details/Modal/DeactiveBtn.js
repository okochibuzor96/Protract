import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../../../../Context API/Create_Context'
import btn from './my-Dbtn.module.css'

function DeactiveBtn({fName, lName, status,mutate}) {

  const {id} = useParams()
  const {users, setUsers} = useContext(DataContext)

  useEffect(()=>{
    localStorage.setItem('users', JSON.stringify(users))
  },[users])
  
  const handleStatausChange= (status)=>{
    const payload ={
      userStatus:''
    }
    payload.userStatus = status

    setUsers((prev)=>
      prev.map((item)=>
      item.id === parseInt(id)?
      {
        ...item,
        userStatus: status
      }:
      item
    ))

   
    // return mutate(payload)
  }
  

  return (

    <>
      {
        status === 'InActive'?
        <button type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className={`${btn.Dbtn} border border-0 p-0`}>
          Activate  
        </button>:
        <button type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className={`${btn.Dbtn} border border-0 p-0`}>
          Deactivate  
        </button>
      }
        
        

        {/* modal */}
        <div 
          className={`${btn.modalFade} modal fade`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"
        >
          
          <div className={`modal-dialog`}>

            <div className={`${btn.modalContent} modal-content`}>

                <div className="modal-header">

                {status ==="InActive"?
                  <h1 className="modal-title fs-5 block105" id="staticBackdropLabel">Activate Account</h1>:
                  <h1 className="modal-title fs-5 block105" id="staticBackdropLabel">Deactivate Account</h1>
                }

                    

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                </div>

              <div className={`${btn.modalBody} modal-body`}>

                
                {status ==='InActive'? <h6> Are you sure you want to Activate {fName}<span className='ms-1'>{lName}’s</span> account?</h6>: 
                <h6> Are you sure you want to Deactivate {fName}<span className='ms-1'>{lName}’s</span> account?</h6>
                } 
                
                
            
              </div>
              
              <div className="d-flex justify-content-center mb-5">

                
                <div>
                  {
                    status ==="InActive"?
                    <button 
                      type="button" 
                      className="btn btn-primary text-white  me-1"
                      data-bs-dismiss="modal"
                      onClick={()=>handleStatausChange('Active')}
                    >
                      Activate
                    </button>:
                    <button 
                      type="button" 
                      className="btn btn-primary text-white  me-1"
                      data-bs-dismiss="modal"
                      onClick={()=>handleStatausChange('InActive')}
                    >
                      Deactivate
                    </button>
                  }
                  
                </div>

                <div>

                  <button type="button" className="btn btn-secondary rounded-2" data-bs-dismiss="modal">Cancel</button>
                </div>

              </div>

            </div>

          </div>

        </div>
        
    </>
  
  )

}

export default DeactiveBtn
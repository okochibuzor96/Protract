import settings from '../../Styles/my-settings.module.css'
import { HiOutlineTrash } from "react-icons/hi2";
import { useMutation,useQueryClient } from 'react-query';
import CRUDfunc from '../../../hooks/useQuery/useProject';
import {useMutaion} from 'react-query'
import { Children } from 'react';

function Delete_Modal({Id, children,data}) {

    const queryClient = useQueryClient()

   const {mutate} = useMutation((Id)=>CRUDfunc.delete(`category/${Id}`),{
     onSuccess: ()=>{
        queryClient.invalidateQueries('settings_category')
     }
   })

console.log('de',Id)

  return (

    <>

        <span 
            type="button"  
            data-bs-toggle="modal" 
            data-bs-target="#staticBackdrop2" 
            
        >
            {children}
        </span>

       

        {/* modal */}
        <div 
            className={`modal fade`} id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"aria-hidden="true"
        >
                
            <div className="modal-dialog">

                <div className={`${settings.deleteModalContent} modal-content`}>

                    <div className="modal-header">

                        <h1 
                            className="modal-title fs-5 block105" id="staticBackdropLabel"
                        >

                            Delete Attribute Category

                        </h1>

                        <button 
                        type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className={`${settings.modalBody} modal-body d-flex justify-content-center`}>

                        <div>Are you sure you want to delete attribute category?</div>

                    </div>
                    
                    <div className="d-flex justify-content-center mb-5">
                        
                        <button 
                            type="button" 
                            className={`${settings.addButton} btn btn-primary text-white  me-3`}
                            data-bs-dismiss="modal"
                            onClick={()=>mutate(Id)}
                        >
                            Delete
                        </button>

                        <button 
                            type="button" 
                            className={`${settings.cancelButton} btn btn-secondary rounded-2`} 
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </>

  )
  
}

export default Delete_Modal

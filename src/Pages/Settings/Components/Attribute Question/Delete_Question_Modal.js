import { HiOutlineTrash } from "react-icons/hi2";
import settings from '../../Styles/my-settings.module.css'
import {useMutation,useQueryClient} from 'react-query'
import CRUDfunc from "../../../hooks/useQuery/useProject";
import DataContext from "../../../Context API/Create_Context";
import { useContext, useEffect } from "react";

function Delete_Question_Modal({children,Id}) {

    const {questions, setQuestions} = useContext(DataContext)

    useEffect(()=>{
        localStorage.setItem("questions", JSON.stringify(questions))
    },[questions])

    const handleDelete = ()=>{

        const newItem = questions.filter((item)=> item.id !== parseInt(Id))
        setQuestions(newItem)
    }

    const queryClient = useQueryClient()

    // const {mutate} = useMutation((Id)=>CRUDfunc.delete(`questions/${Id}`),{
    //     onSuccess: ()=>{
    //     queryClient.invalidateQueries('questions')
    //  }
    // })

  return (

    <>

        <div 
            type="button"  
            data-bs-toggle="modal" 
            data-bs-target="#staticBackdrop3" 
            className={settings.deleteIcon}
        >
          {children}
        </div>

       

        {/* modal */}
        <div 
            className={`modal fade`} id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"aria-hidden="true"
        >
                
            <div className="modal-dialog">

                <div className={`${settings.deleteModalContent} modal-content`}>

                    <div className="modal-header">

                        <h1 
                            className="modal-title fs-5 block105" id="staticBackdropLabel"
                        >

                            Delete Attribute Question
                        </h1>

                        <button 
                        type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className={`${settings.modalBody} modal-body d-flex justify-content-center`}>

                        <div>Are you sure you want to delete attribute question?</div>

                    </div>
                    
                    <div className="d-flex justify-content-center mb-5">
                        
                        <button 
                            type="button" 
                            className={`${settings.addButton} btn btn-primary text-white  me-3`}
                            data-bs-dismiss="modal"
                            onClick={handleDelete}
                            // onClick={()=>mutate(Id)}
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

export default Delete_Question_Modal
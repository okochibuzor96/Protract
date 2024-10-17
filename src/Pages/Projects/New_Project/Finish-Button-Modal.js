import project from './my-NewProject.module.css';

import icon from '../../../Images/finish-btnModal-Icon.png'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function Finish_Button_Modal(prop,nav) {

    const {children} =prop

    const {id} = useParams()

    const location = useLocation()
    const navigate = useNavigate()

  return (
    <div>    
        
        <div 
        data-bs-toggle="modal" 
        data-bs-target="#staticBackdropf"
        >
            {children}
        </div>
   
        {/* modal */}
        <div 
            className={`${project.modal_fade} modal fade`} 
            id="staticBackdropf" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabIndex="-1" 
            aria-labelledby="staticBackdropLabel" 
            aria-hidden="true" 
        >
            
            <div className={`${project.modal_dialog} modal-dialog`}>

                <div className="modal-content">

                    <div className="modal-header">

                        <h1 className={`${project.modal_title} modal-title`} id="staticBackdropLabel">

                            Confirmation

                        </h1>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className={`${project.modal_body} modal-body text-center`}>

                            <div>great Job</div>

                            <img src={icon}/>
                            
                        <div>You have successfully created a project. Clikck the dismiss button for details</div>

                    </div>

                    <div className="d-flex justify-content-center mb-5">
                       

                        <button 
                            type="submit" className="btn btn-primary
                            mt-4 rounded-2" data-bs-dismiss="modal"
                            onClick={()=>{
                                if(location.pathname === `/projects/project-details/${id}/edit-project`){
                                   navigate(`/projects/project-details/${id}`)
                                }else{
                                    navigate('/projects')
                                }
                            }}
                        >

                            Dismiss     
                            
                        </button>
                        
                    </div>

                </div>

            </div>

        </div>    
        
    </div>
  )
}

export default Finish_Button_Modal
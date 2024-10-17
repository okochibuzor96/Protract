import { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import imagea from '../../../../Images/SDGGoala.svg'
import imagec from '../../../../Images/SDGGoalc.svg'
import imaged from '../../../../Images/SDGGoald.svg'
import imagef from '../../../../Images/SDGGoalf.svg'
import imageg from '../../../../Images/SDGGoalg.svg'
import imageh from '../../../../Images/SDGGoalh.svg'
import imagei from '../../../../Images/SDGGoali.svg'
import imagej from '../../../../Images/SDGGoalj.svg'
import imagek from '../../../../Images/SDGGoalk.svg'
import imagel from '../../../../Images/SDGGoall.svg'
import imagem from '../../../../Images/SDGGoalm.svg'
import imagen from '../../../../Images/SDGGoaln.svg'
import imagep from '../../../../Images/SDGGoalp.svg'
import imageq from '../../../../Images/SDGGoalq.svg'
import DataContext from '../../../Context API/Create_Context'

import paymentDetail from '../../../Payments/Payment_CSS_folder/my-paymentDetails.module.css'

function Project_Info({project,projectFormId}) {

    const location = useLocation()

    const {id} = useParams()
    const {projects,evaluation} = useContext(DataContext)
    const data2 = evaluation.find((evaluation)=> evaluation.id === parseInt(id))

    const data = projects.find((project)=> project.id === parseInt(projectFormId))
   
    console.log(project)

  return (

    <div className={paymentDetail.projectContentWrapper}>

        <p>
        {data?.projectTitle}
        </p>

        <div className={`${paymentDetail.projectContent}`}>
        
            <div>
                
                <h6>Project Number</h6>

                <div >{data?.projectReferenceNumber}</div>

            </div>

            <div>
                
                <h6>Project Value</h6>
                
                <div>{data?.projectValue? 'N' : ''}{data?.projectValue}</div>

            </div>

            <div>
                
                <h6 className="">SDG Goals</h6>

                <div className={paymentDetail.imageWrapper}>
                    
                    <div>
                        {
        
                        data?.imageValues.includes("imagea") && <img src={imagea} alt=""/> 
        
                        }
                
                        {
                        
                        data?.imageValues.includes("imagec") && <img src={imagec} alt=""/>
                        
                        }
                
                        {
                        
                        data?.imageValues.includes("imaged") && <img src={imaged} alt=""/>
                        
                        }
                    
                        {
                        
                        data?.imageValues.includes("imagef") && <img src={imagef} alt=""/>
                        
                        }
                    
                        {
                        
                        data?.imageValues.includes("imageg") && <img src={imageg} alt=""/>
        
                        }
                    
                        { 
                        
                        data?.imageValues.includes("imageh") && <img src={imageh} alt=""/>
                        
                        }
                    
                        { 
                        
                        data?.imageValues.includes("imagei") && <img src={imagei} alt=""/>
                        
                        }
                    
                        {
        
                        data?.imageValues.includes("imagej") && <img src={imagej} alt=""/>
        
                        }
                    
                        { 
        
                        data?.imageValues.includes("imagek") && <img src={imagek} alt=""/>
        
                        }
                    
                        { 
        
                        data?.imageValues.includes("imagel") && <img src={imagel} alt=""/>
        
                        }
                    
                        { 
        
                        data?.imageValues.includes("imagem") && <img src={imagem} alt=""/>
        
                        }
                    
                        { 
        
                        data?.imageValues.includes("imagen") && <img src={imagen} alt=""/>
        
                        }
                    
                        { 
        
                        data?.imageValues.includes("imagep") && <img src={imagep} alt=""/>
        
                        }
                
                        { 
        
                        data?.imageValues.includes("imageq") && <img src={imageq} alt=""/>
        
                        }

                    </div>
    
                </div>

            </div>

            <div>
                
                <h6>Project Year</h6>

                <div>{data?.projectYear}</div>

            </div>

            <div>
                
                <h6>Geopolitical Zone</h6>

                <div>{data?.geopoliticalZone}</div>

            </div>

            <div>
                
                <h6>State</h6>

                <div>{data?.state}</div>

            </div>

            <div>
                
                <h6>Local Government</h6>

                <div>{data?.GPSLocation}</div>

            </div>

            <div>
                
                <h6>Federal Consistuency</h6>

                <div>{data?.federalConsistuency}</div>

            </div>

            <div>
                
                <h6>GPS Location</h6>

                <div>{data?.GPSLocation}</div>

            </div>
        
            <div>
                
                <h6>Project Type</h6>

                <div>{data?.projectType}</div>

            </div>

            <div>
                
                <h6>Project Sector</h6>

                <div>{data?.projectSector}</div>

            </div>
            
        </div>

     </div>

  )
}

export default Project_Info
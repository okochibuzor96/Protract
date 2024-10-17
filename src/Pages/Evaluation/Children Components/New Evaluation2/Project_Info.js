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

function Project_Info({project}) {

    const location = useLocation()

    const {id} = useParams()
    const {projects,evaluation} = useContext(DataContext)
    const data2 = evaluation.find((evaluation)=> evaluation.id === parseInt(id))

    const data = projects.find((project)=> project.id === parseInt(data2.projectFormId))
    

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

                {

                    data?.imageValues.includes("imagea") &&
                    <div>
                        <img src={imagea} alt="" style={{width:"40px",height:"40px"}}/> 
                    </div>
                }

                {
                    
                    data?.imageValues.includes("imagec") &&    
                    <div>
                        
                        <img src={imagec} alt="" style={{width:"40px",height:"40px"}}/>
                    
                    </div>
                }

                {
                    
                    data?.imageValues.includes("imaged") &&

                    <div>
                        <img src={imaged} alt="" style={{width:"40px",height:"40px"}}/>
                    
                    </div>
                }

                {
                    
                    data?.imageValues.includes("imagef") &&
                    <div>
                        <img src={imagef} alt="" style={{width:"40px",height:"40px"}}/>
                    </div>
                }

                {
                    
                    data?.imageValues.includes("imageg") && 

                    <div>
                        <img src={imageg} alt="" style={{width:"40px",height:"40px"}}/>
                    </div>
                }

                { 
                    
                    data?.imageValues.includes("imageh") && 

                    <div>
                        <img src={imageh} alt="" style={{width:"40px",height:"40px"}}/>
                    </div>

                }

                { 
                    
                    data?.imageValues.includes("imagei") &&

                    <div>
                        <img src={imagei} alt="" style={{width:"40px",height:"40px"}}/>
                    </div>

                }

                {

                    data?.imageValues.includes("imagej") &&

                    <div>
                        <img src={imagej} alt="" style={{width:"40px",height:"40px"}}/>
                    </div>

                }

                { 

                    data?.imageValues.includes("imagek") && 

                    <div>
                    <img src={imagek} alt="" style={{width:"40px",height:"40px"}}/>
                    </div>

                }

                { 

                    data?.imageValues.includes("imagel") &&

                    <div>
                        <img src={imagel} alt="" style={{width:"40px",height:"40px"}}/>
                    </div>

                }

                { 

                    data?.imageValues.includes("imagem") &&

                    <div>
                        <img src={imagem} alt="" style={{width:"40px",height:"40px"}}/>
                    </div>

                }

                { 

                    data?.imageValues.includes("imagen") &&

                    <div>
                        <img src={imagen} alt="" style={{width:"40px",height:"40px"}}/>
                    </div>

                }

                { 

                    data?.imageValues.includes("imagep") &&

                    <div>
                        <img src={imagep} alt="" style={{width:"40px",height:"40px"}}/>
                    </div>

                }

                { 

                    data?.imageValues.includes("imageq") &&

                    <div>
                        <img src={imageq} alt="" style={{width:"40px",height:"40px"}}/>
                    </div>

                }

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
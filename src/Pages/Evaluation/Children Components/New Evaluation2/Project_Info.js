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

import paymentDetail from '../../../Payments/Payment_CSS_folder/my-paymentDetails.module.css'

function Project_Info({project}) {
  return (

    <div className={paymentDetail.projectContentWrapper}>

        <p>
        {project?.data.projectTitle}
        </p>

        <div className={`${paymentDetail.projectContent}`}>
        
            <div>
                
                <h6>Project Number</h6>

                <div >{project?.data.projectReferenceNumber}</div>

            </div>

            <div>
                
                <h6>Project Value</h6>
                
                <div>{project?.data.projectValue? 'N' : ''}{project?.data.projectValue}</div>

            </div>

            <div>
                
                <h6 className="">SDG Goals</h6>

                <div className={paymentDetail.imageWrapper}>

                <div>
                    {

                        project?.data.imageValues.includes("imagea") && <img src={imagea} alt="" style={{width:"40px",height:"40px"}}/> 

                    }
                </div>
                    
                <div>
                    {
                    
                        project?.data.imageValues.includes("imagec") && <img src={imagec} alt="" style={{width:"40px",height:"40px"}}/>
                    
                    }
                </div>

                <div>
                    {
                    
                        project?.data.imageValues.includes("imaged") && <img src={imaged} alt="" style={{width:"40px",height:"40px"}}/>
                    
                    }
                </div>

                <div>
                    {
                    
                        project?.data.imageValues.includes("imagef") && <img src={imagef} alt="" style={{width:"40px",height:"40px"}}/>
                    
                    }
                </div>

                <div>
                    {
                    
                        project?.data.imageValues.includes("imageg") && <img src={imageg} alt="" style={{width:"40px",height:"40px"}}/>

                    }
                </div>

                <div>
                    { 
                    
                        project?.data.imageValues.includes("imageh") && <img src={imageh} alt="" style={{width:"40px",height:"40px"}}/>
                    
                    }
                </div>

                <div>
                    { 
                    
                        project?.data.imageValues.includes("imagei") && <img src={imagei} alt="" style={{width:"40px",height:"40px"}}/>
                    
                    }
                </div>

                <div>
                    {

                        project?.data.imageValues.includes("imagej") && <img src={imagej} alt="" style={{width:"40px",height:"40px"}}/>

                    }
                </div>

                <div>
                    { 

                        project?.data.imageValues.includes("imagek") && <img src={imagek} alt="" style={{width:"40px",height:"40px"}}/>

                    }
                </div>

                <div>
                    { 

                        project?.data.imageValues.includes("imagel") && <img src={imagel} alt="" style={{width:"40px",height:"40px"}}/>

                    }
                </div>

                <div>
                    { 

                        project?.data.imageValues.includes("imagem") && <img src={imagem} alt="" style={{width:"40px",height:"40px"}}/>

                    }
                </div>

                <div>
                    { 

                        project?.data.imageValues.includes("imagen") && <img src={imagen} alt="" style={{width:"40px",height:"40px"}}/>

                    }
                </div>

                <div>
                    { 

                        project?.data.imageValues.includes("imagep") && <img src={imagep} alt="" style={{width:"40px",height:"40px"}}/>

                    }
                </div>

                <div>
                    { 

                        project?.data.imageValues.includes("imageq") && <img src={imageq} alt="" style={{width:"40px",height:"40px"}}/>

                    }
                </div>

                </div>

            </div>

            <div>
                
                <h6>Project Year</h6>

                <div>{project?.data.projectYear}</div>

            </div>

            <div>
                
                <h6>Geopolitical Zone</h6>

                <div>{project?.data.geopoliticalZone}</div>

            </div>

            <div>
                
                <h6>State</h6>

                <div>{project?.data.state}</div>

            </div>

            <div>
                
                <h6>Local Government</h6>

                <div>{project?.data.GPSLocation}</div>

            </div>

            <div>
                
                <h6>Federal Consistuency</h6>

                <div>{project?.data.federalConsistuency}</div>

            </div>

            <div>
                
                <h6>GPS Location</h6>

                <div>{project?.data.GPSLocation}</div>

            </div>
        
            <div>
                
                <h6>Project Type</h6>

                <div>{project?.data.projectType}</div>

            </div>

            <div>
                
                <h6>Project Sector</h6>

                <div>{project?.data.projectSector}</div>

            </div>
            
        </div>

     </div>

  )
}

export default Project_Info
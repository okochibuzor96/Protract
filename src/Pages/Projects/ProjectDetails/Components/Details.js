import details from '../ProjectDetailStyle/my-Details.module.css'
import {Abandoned} from "../../../../Components/Status/Abandon"

import {useQuery,useQueryClient} from 'react-query'

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

import { useParams, } from 'react-router-dom'
import {getProjectDetails} from '../../../hooks/useQuery/useProject'
import DataContext from '../../../Context API/Create_Context'
import { useContext } from 'react'



function Details({}) {

  // const location = useLocation();
  // console.log(location.pathname)

  const {projects} = useContext(DataContext)

  const {id} = useParams()

  const data = projects.find((item)=> item.id === parseInt(id))

  

  return (

    <div className={`${details.detailsContainer}`}>

      <div className={details.titleWrapper}>
        <div>Project Details</div>
        <Abandoned/>
      </div>
          
      <div className={`${details.detailsContent} bg-white rounded-2`}>
      
        <div>
            
          <div>Project Number</div>

          <h6 >{data?.projectReferenceNumber}</h6>

        </div>

        <div>
            
          <div>Project Value</div>
          
          <h6>{data?.projectValue? 'N' : ''}{data?.projectValue}</h6>
          

        </div>

        <div>
            
          <div className="">SDG Goals</div>

          <div className={details.imageWrapper}>

            
            {

              data?.imageValues.includes("imagea") && <img src={imagea} alt="" style={{width:"40px",height:"40px"}}/> 

            }
          
            {
            
              data?.imageValues.includes("imagec") && <img src={imagec} alt="" style={{width:"40px",height:"40px"}}/>
              
            }
          
            {
            
              data?.imageValues.includes("imaged") && <img src={imaged} alt="" style={{width:"40px",height:"40px"}}/>
              
            }
          
            {
            
              data?.imageValues.includes("imagef") && <img src={imagef} alt="" style={{width:"40px",height:"40px"}}/>
              
            }
            {
            
              data?.imageValues.includes("imageg") && <img src={imageg} alt="" style={{width:"40px",height:"40px"}}/>

            }
          
            { 
            
              data?.imageValues.includes("imageh") && <img src={imageh} alt="" style={{width:"40px",height:"40px"}}/>
              
            }
          
            { 
            
              data?.imageValues.includes("imagei") && <img src={imagei} alt="" style={{width:"40px",height:"40px"}}/>
              
            }
          
            {

              data?.imageValues.includes("imagej") && <img src={imagej} alt="" style={{width:"40px",height:"40px"}}/>

              }
          
            { 

              data?.imageValues.includes("imagek") && <img src={imagek} alt="" style={{width:"40px",height:"40px"}}/>

            }
          
            { 

            data?.imageValues.includes("imagel") && <img src={imagel} alt="" style={{width:"40px",height:"40px"}}/>

            }
          
            { 

              data?.imageValues.includes("imagem") && <img src={imagem} alt="" style={{width:"40px",height:"40px"}}/>

            }
          
            { 

              data?.imageValues.includes("imagen") && <img src={imagen} alt="" style={{width:"40px",height:"40px"}}/>

            }
          
            { 

            data?.imageValues.includes("imagep") && <img src={imagep} alt="" style={{width:"40px",height:"40px"}}/>

            }
          
            { 

            data?.imageValues.includes("imageq") && <img src={imageq} alt="" style={{width:"40px",height:"40px"}}/>

            }
            

          </div>

        </div>

        <div>
            
          <div>Geopolitical Zone</div>

          <h6>{data?.geopoliticalZone}</h6>

        </div>

        <div>
            
          <div>State</div>

          <h6>{data?.state}</h6>

        </div>

        <div>
          
          <div>Local Government</div>

          <h6>{data?.GPSLocation}</h6>

        </div>

        <div>
            
          <div>Federal Consistuency</div>

          <h6 >{data?.federalConsistuency}</h6>

        </div>

        <div>
            
          <div>GPS Location</div>

          <h6>{data?.GPSLocation}</h6>
  
        </div>
  
        <div>
            
          <div>Project Type</div>

          <h6>{data?.projectType}</h6>

        </div>

        <div>
            
          <div>Project Sector</div>

          <h6>{data?.projectSector}</h6>

        </div>

        <div>
            
          <div>Project Year</div>

          <h6>{data?.projectYear}</h6>

        </div>
          
      </div>

    </div>

  )
}

export default Details
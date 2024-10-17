import details from '../../Projects/ProjectDetails/ProjectDetailStyle/my-Details.module.css'

import {useQuery,useQueryClient} from 'react-query'

import imagea from '../../../Images/SDGGoala.svg'
import imagec from '../../../Images/SDGGoalc.svg'
import imaged from '../../../Images/SDGGoald.svg'
import imagef from '../../../Images/SDGGoalf.svg'
import imageg from '../../../Images/SDGGoalg.svg'
import imageh from '../../../Images/SDGGoalh.svg'
import imagei from '../../../Images/SDGGoali.svg'
import imagej from '../../../Images/SDGGoalj.svg'
import imagek from '../../../Images/SDGGoalk.svg'
import imagel from '../../../Images/SDGGoall.svg'
import imagem from '../../../Images/SDGGoalm.svg'
import imagen from '../../../Images/SDGGoaln.svg'
import imagep from '../../../Images/SDGGoalp.svg'
import imageq from '../../../Images/SDGGoalq.svg'

import {useNavigate,useParams} from 'react-router-dom';
import {getProjectDetails} from '../../hooks/useQuery/useProject'
import{getContractorDetails} from '../../hooks/useQuery/useProject'
import contractor from '../../../styles/my-contractors.module.css';
import Approve_Modal from './Approve_Modal'
import Deny_Modal from './Deny_Modal'
import { BsArrowLeftShort } from "react-icons/bs";
import paymentDetail from '../Payment_CSS_folder/my-paymentDetails.module.css'
import {DownLoad} from '../../../Components/Status/DownLoad'



function Payment_Details() {

    const navigate = useNavigate()
    const {id} = useParams()

    const queryClient = useQueryClient()
  
    const {data} = useQuery(['details', id], getProjectDetails,{
      initialData: () => {
        
        const details = queryClient.getQueryData('project')?.data?.find((project) => project.id === parseInt(id))
  
        if(details){
          return{
            data:details
          }
        }else{
          return undefined
        }
      }
    })

    const contractorId = data?.data.id

    const {data:contractordetails} = useQuery(["contractorPaymentInfo", contractorId], getContractorDetails,{
        enabled:!!contractorId
    })
  
    return (
  
        <div className={`${details.detailsContainer}`}>

            <div className={contractor.herosectionWrapper}>

                <div className={contractor.herosection1}>
                
                
                    <BsArrowLeftShort onClick={() => navigate("/payments")} className={contractor.backArrow}/>
                

                    <div>
                        <p className={contractor.backArrowText1}>
                        Back to All Payments
                        </p>

                        <h6 className={contractor.backArrowText2}> 
                        {data?.data.projectReferenceNumber}
                        </h6>

                    </div>
                    
                </div>

                <div className={paymentDetail.herosection2}>

                    <Approve_Modal/>

                    <Deny_Modal/>

                    <DownLoad
                    DownLoadValue={data?.data}
                    docName={'Payment Details'}
                    />

                    {/* <button onClick={() => navigate(`edit_details`)} className={contractor.editDetailsBtn}>
                     Download
                    </button> */}

                </div>

            </div>

            <hr/>

            <div className={paymentDetail.paymentDetailContentWrapper}>

                <div className={paymentDetail.contractInfoWrapper}>

                    <img src={contractordetails?.data.avarta} alt='Company Image'/>

                    
                    <div  className={paymentDetail.contractInfo}>                    

                        <div>
                            {contractordetails?.data.companyName}  
                        </div>

                        <div>
                            
                            <div>
                            
                                <h6>Contractor ID</h6>

                                <div>{contractordetails?.data.contractorId}</div>
                                
                            </div>

                            <div>
                            
                                <h6>Phone Number</h6>

                                <div>{contractordetails?.data.phoneNumber}</div>

                            </div>

                            <div>
                            
                                <h6>Email Address</h6>

                                <div>{contractordetails?.data.mailAddress}</div>

                            </div>

                        </div>

                    </div>  

                </div>

                <div className={paymentDetail.projectContentWrapper}>

                    <p>
                        {data?.data.projectTitle}
                    </p>
                
                    <div className={`${paymentDetail.projectContent}`}>

                        
                    
                        <div>
                            
                            <h6>Project Number</h6>
                
                            <div >{data?.data.projectReferenceNumber}</div>
                
                        </div>
            
                        <div>
                            
                            <h6>Project Value</h6>
                            
                            <div>{data?.data.projectValue? 'N' : ''}{data?.data.projectValue}</div>
                            
                
                        </div>
            
                        <div>
                            
                            <h6 className="">SDG Goals</h6>
                
                            <div className={paymentDetail.imageWrapper}>
                
                                <div>
                                    {
                    
                                    data?.data.imageValues.includes("imagea") && <img src={imagea} alt=""/> 
                    
                                    }
                               
                                    {
                                    
                                    data?.data.imageValues.includes("imagec") && <img src={imagec} alt=""/>
                                    
                                    }
                               
                                    {
                                    
                                    data?.data.imageValues.includes("imaged") && <img src={imaged} alt=""/>
                                    
                                    }
                                
                                    {
                                    
                                    data?.data.imageValues.includes("imagef") && <img src={imagef} alt=""/>
                                    
                                    }
                                
                                    {
                                    
                                    data?.data.imageValues.includes("imageg") && <img src={imageg} alt=""/>
                    
                                    }
                                
                                    { 
                                    
                                    data?.data.imageValues.includes("imageh") && <img src={imageh} alt=""/>
                                    
                                    }
                                
                                    { 
                                    
                                    data?.data.imageValues.includes("imagei") && <img src={imagei} alt=""/>
                                    
                                    }
                                
                                    {
                    
                                    data?.data.imageValues.includes("imagej") && <img src={imagej} alt=""/>
                    
                                    }
                                   
                                    { 
                    
                                    data?.data.imageValues.includes("imagek") && <img src={imagek} alt=""/>
                    
                                    }
                                
                                    { 
                    
                                    data?.data.imageValues.includes("imagel") && <img src={imagel} alt=""/>
                    
                                    }
                                
                                    { 
                    
                                    data?.data.imageValues.includes("imagem") && <img src={imagem} alt=""/>
                    
                                    }
                                
                                    { 
                    
                                    data?.data.imageValues.includes("imagen") && <img src={imagen} alt=""/>
                    
                                    }
                                
                                    { 
                    
                                    data?.data.imageValues.includes("imagep") && <img src={imagep} alt=""/>
                    
                                    }
                               
                                    { 
                    
                                    data?.data.imageValues.includes("imageq") && <img src={imageq} alt=""/>
                    
                                    }

                                </div>
                
                            </div>
                
                        </div>

                        <div>
                            
                            <h6>Project Year</h6>
                
                            <div>{data?.data.projectYear}</div>
                
                        </div>
                
                        <div>
                            
                            <h6>Geopolitical Zone</h6>
                
                            <div>{data?.data.geopoliticalZone}</div>
                
                        </div>
                
                        <div>
                            
                            <h6>State</h6>
                
                            <div>{data?.data.state}</div>
                
                        </div>
                
                        <div>
                            
                            <h6>Local Government</h6>
                
                            <div>{data?.data.GPSLocation}</div>
                
                        </div>
                
                        <div>
                            
                            <h6>Federal Consistuency</h6>
                
                            <div>{data?.data.federalConsistuency}</div>
                
                        </div>
                
                        <div>
                            
                            <h6>GPS Location</h6>
                
                            <div>{data?.data.GPSLocation}</div>
                    
                        </div>
                    
                        <div>
                            
                            <h6>Project Type</h6>
                
                            <div>{data?.data.projectType}</div>
                
                        </div>
            
                        <div>
                            
                            <h6>Project Sector</h6>
                
                            <div>{data?.data.projectSector}</div>
                
                        </div>
                        
                    </div>

                </div>

                <div className={paymentDetail.adviceDetailWrapper}>

                    <p>Payment Advice Details</p>

                    <div className={paymentDetail.adviceDetailHeader}>

                        <div>S/N</div>

                        <div>Milestone</div>

                        <div>Status</div>

                        <div>Percentage</div>

                        <div>Amount</div>

                    </div>

                    {
                        data?.data.mileStone.map((item,index) =>(

                            <div key={index} className={paymentDetail.adviceDetailContent}>

                                <div>

                                    <div>{index +1}</div>

                                    <div>{item.description}</div>

                                    <div>{}</div>

                                    <div>{item.payment}</div>
                                    <div>{data?.data.projectValue}</div>

                                </div>
                                
                                <hr/>

                            </div>

                        ))
                    }

                    

                    <div className={paymentDetail.totalAmountWrapper}>

                        <div className={paymentDetail.totalAmount}>

                            <div>
                                payment due
                            </div>

                            <div>
                             Sum of Amount
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
    
        </div>
  
    )
}

export default Payment_Details
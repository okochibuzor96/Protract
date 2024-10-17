import dashboard from '../../styles/my-Dashboard.module.css';


function Projecthistory({data}) {

    const completedPro =data?.data.filter((value)=>value.status==='completed').length
    const upComingPro =data?.data.filter((value)=>value.status==='Ongoing').length
    

  return (
    
   
    <div className={dashboard.block9}>

        <div className={dashboard.block10} >
            

            <div>

                PROJECTS <br />
                COMPLETED

            </div>

            <div>{completedPro}</div>
            
        </div>

        <div className={dashboard.block10} >
            

            <div>

            ESTIMATED <br />
            SOCIAL IMPACT

            </div>
            <div>4.7m</div>
        </div>

    

    

        <div className={dashboard.block10} >
            

            <div>

            UPCOMING <br />
            PROJECTS

            </div>

            <div>{upComingPro}</div>

        </div>

        <div className={dashboard.block10} >
            

            <div >

                AMOUNT <br />
                (IN MILLIONS)

            </div>

            <div>489.5m</div>

        </div>

    </div>

  
  )
}

export default Projecthistory
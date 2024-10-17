import dashboard from '../../styles/my-Dashboard.module.css';


function Projecthistory() {
  return (
    
    <div className={dashboard.block8}>

        <div className={dashboard.block9}>

            <div className={dashboard.block10} >
                

                <div>

                    PROJECTS <br />
                    COMPLETED

                </div>

                <div>75</div>
                
            </div>

            <div className={dashboard.block10} >
                

                <div>

                ESTIMATED <br />
                SOCIAL IMPACT

                </div>
                <div>4.7m</div>
            </div>

        

        </div>

        <div className={dashboard.block9}>

            <div className={dashboard.block10} >
                

                <div>

                UPCOMING <br />
                PROJECTS

                </div>

                <div>14</div>

            </div>

            <div className={dashboard.block10} >
                

                <div >

                    AMOUNT <br />
                    (IN MILLIONS)

                </div>

                <div>489.5m</div>

            </div>

        </div>

  </div>
  )
}

export default Projecthistory
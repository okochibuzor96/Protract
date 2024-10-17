
import dashboard from '../../styles/my-Dashboard.module.css'
import map from '../../Images/map.svg'
import Dashboard from './Dashboard'
function Projecttablehistory() {
  return (
    
    <div className={dashboard.block36}>

        <div  className={dashboard.block37}>
            <img  className={dashboard.map} src={map} alt="map icon"/>
        </div>

        <div
            className=" ps-4 pt-5 rounded-end block38"
        >
            <div className="row">

                <div className="col" >

                    <p className={`${dashboard.block34} mb-5 pt-3 `}>

                        PROJECTS <br />
                        COMPLETED

                    </p>

                    <p className=" block39">11</p>

                </div>

                <div className="col"  >

                    <p className={`${dashboard.block34} mb-5 pt-3 `}>

                        AMOUNT <br />
                        (IN MILLIONS)

                    </p>

                    <p className=" block39">65.5</p>

                </div>

            </div>

            <div className="row">

                <div className="col">

                <p className={`${dashboard.block34} mb-5 pt-3 `}>

                    PROJECTS <br />
                    COMPLETED

                </p>

                <p className=" block39">6</p>

                </div>

                <div className="col">

                <p className={`${dashboard.block34} mb-5 pt-3 `}>

                    SOCIAL <br />
                    IMPACT 

                </p>

                <p className=" block39">5.3m</p>

                </div>
            </div>

            <div className="row">

                <div className="col">

                <p className={`${dashboard.block34} mb-5 pt-3 `} >

                    PROJECTS <br />
                    IN PROGRESS

                </p>

                <p className=" block39">4</p>

                </div>

                <div className="col">

                <p className={`${dashboard.block34} mb-5 pt-3 `} >

                    ABANDONED <br />
                    PROJECTS

                </p>

                <p className=" block39">3</p>

                </div>

            </div>

        </div>
        
    </div>

  )
}

export default Projecttablehistory
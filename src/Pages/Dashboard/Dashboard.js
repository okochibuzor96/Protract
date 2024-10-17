import dashboard from '../../styles/my-Dashboard.module.css';
import Barchart from '../Charts/barChart';
import Piechart from '../Charts/pieChart';
import 'bootstrap/dist/css/bootstrap.css';
import Projecthistory from './Projecthistory';
import Projecttablehistory from './Projecttablehistory';
import Dherosection from './Dherosection';
import RecentProjectlist from './RecentProjectlist';

function Dashboard() {

  return (
    <main>
      <Dherosection/>
        
      
      <div className={dashboard.block11}>

        <div className={dashboard.block12}>

          <div className={dashboard.block13}> 
  
            <div className={dashboard.block14}>

              <div className={dashboard.block15}>
               <Barchart/>
              </div>
              
              <div className={dashboard.block16}>
                <Piechart/>
              </div>
          
              <Projecthistory/>
            

            </div>
            
            <Projecttablehistory/> 

            <div className={dashboard.block17} >
              RECENT PROJECTS
            </div>

            <RecentProjectlist/>
              
              
  
          </div>

        </div>
      

      </div>

    </main>
  )
}

export default Dashboard
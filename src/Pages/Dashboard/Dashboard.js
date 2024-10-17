import dashboard from '../../styles/my-Dashboard.module.css';
import Barchart from '../Charts/barChart';
import Piechart from '../Charts/pieChart';
import 'bootstrap/dist/css/bootstrap.css';
import Projecthistory from './Projecthistory';
import Projecttablehistory from './Projecttablehistory';
import Dherosection from './Dherosection';
import RecentProjectlist from './RecentProjectlist';
import Pagination from '../../Components/Pagination/Pagination';
import {useQuery} from 'react-query'
import { useState, useEffect } from 'react';
import CRUDfunc from '../hooks/useQuery/useProject'
import GetUsers from '../../Components/Pagination/GetUsers';


function Dashboard() {

  const [page, setPage] = useState(2)
  const [limit, setLimit] = useState(5)
  const [projectStatus,setProjectStatus] = useState()

  const {data, isLoading,isFetching} = useQuery('contractorProject', ()=>CRUDfunc.get('projects')
  )

  if(isLoading || isFetching) <div>...Loading</div>

  const totalPage = data?.data && Math.ceil(data?.data.length/limit)

 

  useEffect(()=>{

    data?.data.map((item)=>setProjectStatus(item))

     

  },[data?.data])

  console.log('status', projectStatus)

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
          
              <Projecthistory
               data={data}
              />
            

            </div>
            
            <Projecttablehistory
             data={data}
            /> 

            <div className={dashboard.block17} >
              RECENT PROJECTS
            </div>

            <RecentProjectlist
             page={page}
             limit={limit}
             data={data}
             setProjectCompleted={setProjectStatus}
            />

            { 
              !isLoading &&  <Pagination
              totalPage={totalPage}
              page={page}
              setPage={setPage}
              siblings={1}
              />
            }      
              
              
  
          </div>

        </div>
      

      </div>

    </main>
  )
}

export default Dashboard
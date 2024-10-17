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
import { useState, useContext} from 'react';
import CRUDfunc from '../hooks/useQuery/useProject'
import DataContext from '../Context API/Create_Context';


function Dashboard() {

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)

  const {projects} = useContext(DataContext)

  const {data, isLoading,isFetching} = useQuery('contractorProject', ()=>CRUDfunc.get('projects')
  )

  if(isLoading || isFetching) <div>...Loading</div>

  const totalPage = projects && Math.ceil(projects.length/limit)

  return (

    <main>

      <div>

        <Dherosection/>
          
        <div className={dashboard.block11}>
    
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
            
          />

          { 
            (totalPage > 1) &&  <Pagination
            totalPage={totalPage}
            page={page}
            setPage={setPage}
            siblings={1}
            />
          }      

        </div>

      </div>

    </main>
  )
}

export default Dashboard
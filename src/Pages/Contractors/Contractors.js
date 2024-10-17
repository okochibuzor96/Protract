
import contractor from '../../styles/my-contractors.module.css';
import { ViewButtons } from '../../Components/viewButtons';
import {useQuery} from 'react-query'
import {getContractors} from '../hooks/useQuery/useProject'
import { useNavigate,Link} from "react-router-dom";

import { LiaSearchSolid } from "react-icons/lia";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbCaretUpDownFilled } from "react-icons/tb";

function ContractorsLayout() {

  const {data, isLoading} = useQuery('contractors',getContractors,{
    select: data =>{
      const contractors = data.data.sort((a,b) => b.id - a.id)
      return contractors
    }
  }) 
  
  const navigate = useNavigate();

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    
    <div>
      
      <div className={contractor.block54}> 

        <div className={contractor.block55}>Contractors</div>

        <button  onClick={() => navigate('/contractors/new_contractor')} className={contractor.block56}>
            
          Add Contractor
                
        </button>

      </div>

      <div className={contractor.block57}>

        <div className={contractor.block58}>

          <LiaSearchSolid size={18} color='#A8A8A8'/>

          <input 
          type='test' className={contractor.block61}  placeholder='Search'  style={{width:'160px', border:'none'}}
          />

        </div>

        <div>

          <div className={contractor.block62}>

            <div>
              Duration
            </div>

            <div className={contractor.block63}>
            
              <a className={contractor.blocks63} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                <IoMdArrowDropdown color='#A8A8A8' size={20} />

              </a>
            
              <ul className="dropdown-menu" >
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
        
            </div>

            <div className={contractor.block64}>Rows</div>

          </div>
        
        </div>

      </div>

      <div className={contractor.block65}>

        <div className={contractor.block66}>

          <TbCaretUpDownFilled/>

          <div>
            Contractor ID
          </div>
        
        </div>

        <div>Company Name</div>

        <div>Email</div>
        
        <div>Phone</div>

        <div className={contractor.block67}>

          <TbCaretUpDownFilled/>

          <div>

            Status

          </div>

        </div>

      </div>

      <div style={{height:'40vh'}}>

        <div style={{height:'46vh',overflowY:'scroll'}}>
          
          <div>

           {
              data.map((item,index)=>(
                <div key={index} className={contractor.block70}> 
                  <div>
                    {item.contractorId}
                  </div>

                  <div className={contractor.block71}>{item.companyName}</div>

                  <div className={contractor.block71}>{item.contactEmailAddress}</div>

                  <div className={contractor.block71}>{item.phoneNumber}</div>

                  <div className={contractor.block72}>

                    <div className={item.status ==='Pending'? contractor.block73: item.status === 'Active'? contractor.block74 : contractor.block75}>

              
              <input
                type="radio"
                value=""
                aria-label="Radio button for following text "
                className={contractor.block76}
              />

              {
               item.status.statusState === 'Pending'?
               <div className={contractor.block77}>{item.status}</div> :
               item.status === 'Active'?
               <div className={contractor.block77}>{item.status}</div> :
               <div className={contractor.block77}>{item.status}</div>
              }
              
                    </div>

                    <Link to={`/contractors/contractor_details/${item.id}`}>
                      <ViewButtons/>
                    </Link>
            
            
                  </div>

                </div>
              ))

            } 

          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default ContractorsLayout

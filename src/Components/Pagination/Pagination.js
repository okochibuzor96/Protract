import ReturnPaginationValues from "./ReturnPaginationValues"


function Pagination(props) {

    const pagValue = ReturnPaginationValues(props)

    
    function handlePageChange(value){
    
        if(value==="slaquo"){
      
          if(props.page > 1){
            props.setPage((prev)=>prev-1)
          }
        
        }else if(value === " ..."){
            props.setPage(1)
        }else if(value === "sraquo"){
    
          if(props.page < props.totalPage){
            props.setPage((prev)=>prev+1)
          }
          
        }else if(value === "... "){
            props.setPage(props.totalPage)
        }else{
            props.setPage(value)
        }  
    
    }
    
   
    return (
        <div>

            <ul className="pagination pagination-md justify-content-end">

                <li className="page-item">
            
                    <span className='page-link' onClick={()=>handlePageChange("slaquo")}>&lsaquo;</span>
                
                </li>

                {
                    pagValue.map((value,i)=>{
                
                        if(props.page === value)  {

                            return <li key={i} className="page-item active" ><span className='page-link' onClick={()=>handlePageChange(value)}>{value}</span></li>
                            
                        }else {
                            return <li key={i} className="page-item" ><span className='page-link' onClick={()=>handlePageChange(value)}>{value}</span></li>
                        }
                        
                    })
                }

                <li className="page-item" >
                
                    <span className='page-link' onClick={()=>handlePageChange("sraquo")}>&rsaquo;</span>
                
                </li>

            </ul>

        </div>
    )
}

export default Pagination
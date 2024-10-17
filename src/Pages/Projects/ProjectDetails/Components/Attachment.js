import project from '../../my-projects.module.css';

import {DownLoad} from "../../../../Components/Status/DownLoad"

import {ViewButtons} from "../../../../Components/viewButtons"

function Attachment({data}) {

  const handleViewDoc = (url) =>{
    window.open(url, '_blank');
  }

  return (
    <div>
     {
      data?.data.document.map((data,i) => (
        <div key={i} className={project.attachmenttbody}>
              
          <div>{data.docTitle}</div>

            <button className={project.viewbutton} onClick={()=>handleViewDoc(data.doc)}>
              View
            </button>
              
            <DownLoad 
              DownLoadValue={data.doc}
              docName={data.docName}
            />
          
          

        </div>
      ))
      }
    </div>
  )
}

export default Attachment
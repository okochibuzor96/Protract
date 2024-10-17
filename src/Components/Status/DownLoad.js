import Status from '../Status/my-status.module.css';

export function DownLoad({DownLoadValue,docName}) {
  

  const handleDownload = (Value) =>{
   
    const url = window.URL.createObjectURL(new Blob([JSON.stringify(Value, null, 2)]));
    let link = document.createElement('a')
    console.log('d',url)
    link.href = DownLoadValue
  
    link.setAttribute('Download', `${docName}.pdf`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(Value)
    
  
  
  }
    
  return(
     
    <button type='button' onClick={()=>handleDownload(DownLoadValue)} className={Status.download}>
      Download
    </button>
  
  )
}
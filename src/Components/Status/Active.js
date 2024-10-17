import Status from '../Status/my-status.module.css';

export function Active() {
  
  return(
      
    <div className={Status.active}>
      <input
        className={Status.radioInput}
        type="radio"
        value=""
        aria-label="Radio button for following text "
      />
      <div>Active</div>
     
    </div>
  
  )
}
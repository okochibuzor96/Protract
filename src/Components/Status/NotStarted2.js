import Status from '../Status/my-status.module.css';

export function NotStarted2() {
  
  return(
        <>
        <div className={Status.notStarted2}>
        
            <input
            className={Status.radioInput}
            type="radio"
            value=""
            aria-label="Radio button for following text "
            />
        
            Not Started
        </div>
        </>
    )
}

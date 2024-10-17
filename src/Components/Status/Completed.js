import Status from '../Status/my-status.module.css';

export function Completed() {
    
  return(
      <>
        <div className={Status.completed}>
          <input
            className={Status.radioInput}
            type="radio"
            value=""
            aria-label="Radio button for following text "
          />
          Completed
        </div>
      </>
  )
}
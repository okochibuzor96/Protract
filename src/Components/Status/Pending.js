import Status from '../Status/my-status.module.css';

export function Pending() {

  return(
      
    <div className={Status.pending}>

      <input
        className={Status.radioInput}
        type="radio"
        value=""
        aria-label="Radio button for following text "
      />

      Pending

    </div>
      
  )
}
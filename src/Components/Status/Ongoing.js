import Status from '../Status/my-status.module.css';

export function Ongoing() {

  return(
      
    <div className={Status.ongoing}>
      <input
        className={Status.radioInput}
        type="radio"
        value=""
        aria-label="Radio button for following text "
      />
      Ongoing
    </div>
      
  )
}
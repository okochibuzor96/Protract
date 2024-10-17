import Status from '../Status/my-status.module.css';

export function InActive() {

  return(
    <div className={Status.inactive}>
      <input
        className={Status.radioInput}
        type="radio"
        value=""
        aria-label="Radio button for following text "
      />
      <div>InActive</div>
  </div>
  )
}
import Status from '../Status/my-status.module.css';

function Resolved() {
  return (
    <div className={Status.resolved}>

      <input
        className={Status.radioInput}
        type="radio"
        value=""
        aria-label="Radio button for following text "
      />

      Resolved
      
    </div>
  )
}

export default Resolved
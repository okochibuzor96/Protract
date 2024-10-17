import Status from '../Status/my-status.module.css';

function Paid() {
  return (
    <div className={Status.paid}>
        <input
        className={Status.radioInput}
        type="radio"
        value=""
        aria-label="Radio button for following text "
        />
        Paid
    </div>
  )
}

export default Paid
import Status from '../Status/my-status.module.css';

function High() {
  return (
    <div className={Status.high}>
      <input
        className={Status.radioInput}
        type="radio"
        value=""
        aria-label="Radio button for following text "
      />
      High
    </div>
  )
}

export default High
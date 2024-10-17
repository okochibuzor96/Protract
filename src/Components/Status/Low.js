import Status from '../Status/my-status.module.css';

function Low() {
  return (
    <div className={Status.low}>
      <input
        className={Status.radioInput}
        type="radio"
        value=""
        aria-label="Radio button for following text "
      />
        Low
    </div>
  )
}

export default Low
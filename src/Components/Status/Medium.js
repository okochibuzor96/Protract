import Status from '../Status/my-status.module.css';

function Medium() {
  return (
    <>
        <div className={Status.medium}>
        <input
            className={Status.radioInput}
            type="radio"
            value=""
            aria-label="Radio button for following text "
        />
            Medium
        </div>
    </>
  )
}

export default Medium
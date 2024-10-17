import Status from '../Status/my-status.module.css';

export function InProgres() {

   
    return(
        <>
          <div className={Status.inProgres}>
            <input
                className={Status.radioInput}
                type="radio"
                value=""
                aria-label="Radio button for following text "
            />
           In Progress
          </div>
        </>
    )
}

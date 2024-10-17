import { TbCaretUpDownFilled } from "react-icons/tb";

/*style module */
import project from '../my-projects.module.css'

function DataHeader() {
  return (
   
    <div className={project.DataHeader}>

        <div>

            <TbCaretUpDownFilled/>

            <div>
                Project No
            </div>

        </div>

        <div>Project Title</div>

        <div>Project Type</div>

        <div>SDG Sector</div>

        <div>Contractor</div>

        <div>

            <TbCaretUpDownFilled/>

            <div>

                Status

            </div>

        </div>

    </div>
    
  )
}

export default DataHeader
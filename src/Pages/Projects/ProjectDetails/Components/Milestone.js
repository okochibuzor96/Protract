import MilestonesData from "./milestonesData"
import project from '../../my-projects.module.css';


function Milestone() {
  return (
    <div className={project.mileStonetContainer}>
      <MilestonesData/>
    </div>
  )
}

export default Milestone
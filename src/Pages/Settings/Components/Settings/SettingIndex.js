import { useState } from "react"
import settings from '../../Styles/my-settings.module.css'
import Attribute_Category from "../Attribute Category/Attribute_Category"
import Attribute_Question from "../Attribute Question/Attribute_Question"

const SettingIndex = () => {
 const [page,setPage] = useState(0)

 const pageDisplay = [
  <Attribute_Category/>,
  <Attribute_Question />

 ]
  return (
    <main className={settings.settingsWrapper}>

      <div>

        <button className={page === 0? settings.activeButton: settings.notActiveButton} onClick={()=> setPage(0)}>Manage Attribute Category</button>
        
        <button className={page === 1? settings.activeButton: settings.notActiveButton} onClick={()=> setPage(1)}>Manage Attribute Question</button>

      </div>

      <div>
        {pageDisplay[page]}
      </div>

    </main>
  )
}

export default SettingIndex
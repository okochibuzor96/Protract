import { useState } from "react"
import settings from '../../Styles/my-settings.module.css'
import Attribute_Category from "../Attribute Category/Attribute_Category"
import Attribute_Question from "../Attribute Question/Attribute_Question"
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const SettingIndex = () => {
 const [page,setPage] = useState(0)

 const pageDisplay = [
  <Attribute_Category
   setPage={setPage}
   page={page}
  />,
  <Attribute_Question
    setPage={setPage} 
    page={page} 
  />

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

      <div className={settings.mobile}>

        {(page !== 0) && <button onClick={()=> setPage(0)}><IoChevronBackOutline /></button>}

        <button onClick={()=> setPage(1)}> <IoChevronForward className={page === 1? settings.forwardBtn : ''}/></button> 

      </div>

    </main>
  )
}

export default SettingIndex
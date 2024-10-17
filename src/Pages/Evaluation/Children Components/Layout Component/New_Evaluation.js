import { useState } from "react"
import New_Evaluation_2 from "../New Evaluation2/New_Evaluation_2"
import New_Evaluation_1 from "../New Evaluation1/New_Evaluation_1"
import { useNavigate } from "react-router-dom"

function New_Evaluation() {
    const [pages, setPages] = useState(0)
    const [Idvalue, setIdValue] = useState(0)
    const [Idvalue2, setIdValue2] = useState(0)
    const [filterValue,setfilterValue] = useState("")
    const [filterValue2,setfilterValue2] = useState("")
    const [projectNo, setProjectNo] = useState('')
    const [projectSector, setProjectSector] = useState('')
    const [formValues, setFormValues] = useState([{}])


    // const navigate = useNavigate()

    const Next = (value) =>{
      setFormValues((prev) =>({prev, ...value}))

     
        setPages((prev) => prev +1)
      
      console.log('next',value)
    }
    
    const Prev = () =>{
      setPages((prev) => prev -1)
      setIdValue(0)
      setIdValue2(0)
      setFormValues([{}])

    }

    const displayPages = [
      <New_Evaluation_1
        setPages={setPages}
        setIdValue={setIdValue}
        setIdValue2={setIdValue2}
        formValues={formValues}
        Idvalue={Idvalue}
        Idvalue2={Idvalue2}
        Next={Next}
        filterValue={filterValue}
        filterValue2={filterValue2}
        setfilterValue={setfilterValue}
        setfilterValue2={setfilterValue2}
        setProjectNo={setProjectNo}
        setProjectSector={setProjectSector}
      />,
        <New_Evaluation_2
          Idvalue={Idvalue}
          Idvalue2={Idvalue2}
          formValues={formValues}
          Next={Next}
          Prev={Prev}  
          filterValue={filterValue}
          filterValue2={filterValue2}
          projectSector={projectSector}
          projectNo={projectNo}
        />
    ]
  return (
    <>
       {displayPages[pages]}
    </>
  )
}

export default New_Evaluation
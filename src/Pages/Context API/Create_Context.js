import {createContext, useState} from 'react'

import defaultContractorsData from "../HardCode Data/ContractorData"
import defaultProjectsData from "../HardCode Data/ProjectsData"

const DataContext = createContext({})

export function DataProvider({children}) {

  const [projects, setProjects] = useState(() => {
    
    const storedData = localStorage.getItem('projects');
    // const parsedData = storedData ? JSON.parse(storedData) : [];
    // const combinedData = [...defaultProjectsData, ...parsedData];
    
    // const uniqueData = Array.from(
    //   new Map(combinedData.map((item) => [item.id, item])).values()
    // );
    // return uniqueData;

    return storedData
  })

  const [contractors, setContractors] = useState(() => {
    const storedData = localStorage.getItem('contractors');
    // const parsedData = storedData ? JSON.parse(storedData) : [];
    // const combinedData = [...defaultContractorsData, ...parsedData];
    
    // const uniqueData = Array.from(
    //   new Map(combinedData.map((item) => [item.id, item])).values()
    // );
    // return uniqueData;
    console.log('context2',storedData)

    return storedData
  })

  // const [evaluation, setEvaluation] = useState([
  //     {
  //       contractorFormId: "1",
  //       projectFormId: "1",
  //       projectNo: "8656436",
  //       SDGSector: "Education",
  //       projectFormValue: "Building board ready women",
  //       contractorFormValue: "Norwood Builders",
  //       PRinput1: "selected",
  //       PRinput2: "deselected",
  //       PRinput3: "deselected",
  //       PRinput4: "deselected",
  //       PRinput5: "selected",
  //       PRinput6: "selected",
  //       PRinput7: "deselected",
  //       PRinput8: "selected",
  //       CRinput1: "selected",
  //       CRinput2: "deselected",
  //       CRinput3: "selected",
  //       CRinput4: "deselected",
  //       CRinput5: "selected",
  //       CRinput6: "selected",
  //       CRinput7: "selected",
  //       NJC: "450",
  //       NPR: "7810",
  //       TNSafter1: "1640",
  //       TNSafter2: "50",
  //       TNSafter3: "40",
  //       TNSafter4: "37",
  //       TNSbefore1: "5790",
  //       TNSbefore2: "190",
  //       TNSbefore3: "480",
  //       TNSbefore4: "24",
  //       TNCafter: "43",
  //       TNCbefore: "58",
  //       TNFSgood1: "895",
  //       TNFSbad1: "230",
  //       TNFStotal1: "1127",
  //       FGgood2: "894",
  //       FGbefore2: "67",
  //       FGtotal2: "971",
  //       status: "Active",
  //       id: "1" 
  //     },
  //     {
  //       contractorFormId: "1",
  //       projectFormId: "1",
  //       projectNo: "8656436",
  //       SDGSector: "Education",
  //       projectFormValue: "Building board ready women",
  //       contractorFormValue: "Norwood Builders",
  //       PRinput1: "selected",
  //       PRinput2: "deselected",
  //       PRinput3: "deselected",
  //       PRinput4: "deselected",
  //       PRinput5: "selected",
  //       PRinput6: "selected",
  //       PRinput7: "deselected",
  //       PRinput8: "selected",
  //       CRinput1: "selected",
  //       CRinput2: "deselected",
  //       CRinput3: "selected",
  //       CRinput4: "deselected",
  //       CRinput5: "selected",
  //       CRinput6: "selected",
  //       CRinput7: "selected",
  //       NJC: "450",
  //       NPR: "7810",
  //       TNSafter1: "1640",
  //       TNSafter2: "50",
  //       TNSafter3: "40",
  //       TNSafter4: "37",
  //       TNSbefore1: "5790",
  //       TNSbefore2: "190",
  //       TNSbefore3: "480",
  //       TNSbefore4: "24",
  //       TNCafter: "43",
  //       TNCbefore: "58",
  //       TNFSgood1: "895",
  //       TNFSbad1: "230",
  //       TNFStotal1: "1127",
  //       FGgood2: "894",
  //       FGbefore2: "67",
  //       FGtotal2: "971",
  //       status: "Active",
  //       id: "2"
  //     },
  //     {
  //       contractorFormId: "1",
  //       projectFormId: "1",
  //       projectNo: "8656436",
  //       SDGSector: "Education",
  //       projectFormValue: "Building board ready women",
  //       contractorFormValue: "Norwood Builders",
  //       PRinput1: "selected",
  //       PRinput2: "deselected",
  //       PRinput3: "deselected",
  //       PRinput4: "deselected",
  //       PRinput5: "selected",
  //       PRinput6: "selected",
  //       PRinput7: "deselected",
  //       PRinput8: "selected",
  //       CRinput1: "selected",
  //       CRinput2: "deselected",
  //       CRinput3: "selected",
  //       CRinput4: "deselected",
  //       CRinput5: "selected",
  //       CRinput6: "selected",
  //       CRinput7: "selected",
  //       NJC: "450",
  //       NPR: "7810",
  //       TNSafter1: "1640",
  //       TNSafter2: "50",
  //       TNSafter3: "40",
  //       TNSafter4: "37",
  //       TNSbefore1: "5790",
  //       TNSbefore2: "190",
  //       TNSbefore3: "480",
  //       TNSbefore4: "24",
  //       TNCafter: "43",
  //       TNCbefore: "58",
  //       TNFSgood1: "895",
  //       TNFSbad1: "230",
  //       TNFStotal1: "1127",
  //       FGgood2: "894",
  //       FGbefore2: "67",
  //       FGtotal2: "971",
  //       status: "Active",
  //       id: "3"
  //     },
  //     {
  //       contractorFormId: "1",
  //       projectFormId: "1",
  //       projectNo: "8656436",
  //       SDGSector: "Education",
  //       projectFormValue: "Building board ready women",
  //       contractorFormValue: "Norwood Builders",
  //       PRinput1: "selected",
  //       PRinput2: "deselected",
  //       PRinput3: "deselected",
  //       PRinput4: "deselected",
  //       PRinput5: "selected",
  //       PRinput6: "selected",
  //       PRinput7: "deselected",
  //       PRinput8: "selected",
  //       CRinput1: "selected",
  //       CRinput2: "deselected",
  //       CRinput3: "selected",
  //       CRinput4: "deselected",
  //       CRinput5: "selected",
  //       CRinput6: "selected",
  //       CRinput7: "selected",
  //       NJC: "450",
  //       NPR: "7810",
  //       TNSafter1: "1640",
  //       TNSafter2: "50",
  //       TNSafter3: "40",
  //       TNSafter4: "37",
  //       TNSbefore1: "5790",
  //       TNSbefore2: "190",
  //       TNSbefore3: "480",
  //       TNSbefore4: "24",
  //       TNCafter: "43",
  //       TNCbefore: "58",
  //       TNFSgood1: "895",
  //       TNFSbad1: "230",
  //       TNFStotal1: "1127",
  //       FGgood2: "894",
  //       FGbefore2: "67",
  //       FGtotal2: "971",
  //       status: "Active",
  //       id: "4"
  //     },
  //     {
  //       contractorFormId: "1",
  //       projectFormId: "1",
  //       projectNo: "8656436",
  //       SDGSector: "Education",
  //       projectFormValue: "Building board ready women",
  //       contractorFormValue: "Norwood Builders",
  //       PRinput1: "selected",
  //       PRinput2: "deselected",
  //       PRinput3: "deselected",
  //       PRinput4: "deselected",
  //       PRinput5: "selected",
  //       PRinput6: "selected",
  //       PRinput7: "deselected",
  //       PRinput8: "selected",
  //       CRinput1: "selected",
  //       CRinput2: "deselected",
  //       CRinput3: "selected",
  //       CRinput4: "deselected",
  //       CRinput5: "selected",
  //       CRinput6: "selected",
  //       CRinput7: "selected",
  //       NJC: "450",
  //       NPR: "7810",
  //       TNSafter1: "1640",
  //       TNSafter2: "50",
  //       TNSafter3: "40",
  //       TNSafter4: "37",
  //       TNSbefore1: "5790",
  //       TNSbefore2: "190",
  //       TNSbefore3: "480",
  //       TNSbefore4: "24",
  //       TNCafter: "43",
  //       TNCbefore: "58",
  //       TNFSgood1: "895",
  //       TNFSbad1: "230",
  //       TNFStotal1: "1127",
  //       FGgood2: "894",
  //       FGbefore2: "67",
  //       FGtotal2: "971",
  //       status: "Active",
  //       id: "5"
  //     },
  //     {
  //       contractorFormId: "1",
  //       projectFormId: "1",
  //       projectNo: "8656436",
  //       SDGSector: "Education",
  //       projectFormValue: "Building board ready women",
  //       contractorFormValue: "Norwood Builders",
  //       PRinput1: "selected",
  //       PRinput2: "deselected",
  //       PRinput3: "deselected",
  //       PRinput4: "deselected",
  //       PRinput5: "selected",
  //       PRinput6: "selected",
  //       PRinput7: "deselected",
  //       PRinput8: "selected",
  //       CRinput1: "selected",
  //       CRinput2: "deselected",
  //       CRinput3: "selected",
  //       CRinput4: "deselected",
  //       CRinput5: "selected",
  //       CRinput6: "selected",
  //       CRinput7: "selected",
  //       NJC: "450",
  //       NPR: "7810",
  //       TNSafter1: "1640",
  //       TNSafter2: "50",
  //       TNSafter3: "40",
  //       TNSafter4: "37",
  //       TNSbefore1: "5790",
  //       TNSbefore2: "190",
  //       TNSbefore3: "480",
  //       TNSbefore4: "24",
  //       TNCafter: "43",
  //       TNCbefore: "58",
  //       TNFSgood1: "895",
  //       TNFSbad1: "230",
  //       TNFStotal1: "1127",
  //       FGgood2: "894",
  //       FGbefore2: "67",
  //       FGtotal2: "971",
  //       status: "Active",
  //       id: "6"
  //     },
  //     {
  //       contractorFormId: "1",
  //       projectFormId: "1",
  //       projectNo: "8656436",
  //       SDGSector: "Education",
  //       projectFormValue: "Building board ready women",
  //       contractorFormValue: "Norwood Builders",
  //       PRinput1: "selected",
  //       PRinput2: "deselected",
  //       PRinput3: "deselected",
  //       PRinput4: "deselected",
  //       PRinput5: "selected",
  //       PRinput6: "selected",
  //       PRinput7: "deselected",
  //       PRinput8: "selected",
  //       CRinput1: "selected",
  //       CRinput2: "deselected",
  //       CRinput3: "selected",
  //       CRinput4: "deselected",
  //       CRinput5: "selected",
  //       CRinput6: "selected",
  //       CRinput7: "selected",
  //       NJC: "450",
  //       NPR: "7810",
  //       TNSafter1: "1640",
  //       TNSafter2: "50",
  //       TNSafter3: "40",
  //       TNSafter4: "37",
  //       TNSbefore1: "5790",
  //       TNSbefore2: "190",
  //       TNSbefore3: "480",
  //       TNSbefore4: "24",
  //       TNCafter: "43",
  //       TNCbefore: "58",
  //       TNFSgood1: "895",
  //       TNFSbad1: "230",
  //       TNFStotal1: "1127",
  //       FGgood2: "894",
  //       FGbefore2: "67",
  //       FGtotal2: "971",
  //       status: "Active",
  //       id: "7"
  //     },
  //   ])
    

  const [evaluation, setEvaluation] = useState(JSON.parse(localStorage.getItem('evaluation')))



  // const [users, setUsers] = useState([
  //   {
  //     userId: "002",
  //     userFname: "Khadijah",
  //     userLname: "Olawaleeee",
  //     userEmail: "sara.cruz@example.com",
  //     userNumber: "0807 219 5150",
  //     userDepartment: "Procurement",
  //     userRole: "Admin",
  //     profileImg: "",
  //     userStatus: "InActive",
  //     id: 1
  //   },
  //   {
  //     userId: "003",
  //     userFname: "Olawale",
  //     userLname: "Isreal",
  //     profileImg: "",
  //     userEmail: "tanya.hill@example.com",
  //     userNumber: "0807 219 5150",
  //     userDepartment: "Projects",
  //     userRole: "Evaluator",
  //     userStatus: "Active",
  //     id: 2
  //   },
  //   {
  //     userId: "004",
  //     userFname: "Farida",
  //     userLname: "Aliyu",
  //     profileImg: "",
  //     userEmail: "alma.lawson@example.com",
  //     userNumber: "0807 219 5150",
  //     userDepartment: "M&E",
  //     userRole: "Management",
  //     userStatus: "InActive",
  //     id: 3
  //   },
  //   {
  //     userId: "005",
  //     userFname: "Sadiq",
  //     profileImg: "",
  //     userLname: "Akinola",
  //     userEmail: "michael.mitc@example.com",
  //     userNumber: "0807 219 5150",
  //     userDepartment: "Procurement",
  //     userRole: "Evaluator",
  //     userStatus: "Active",
  //     id: 4
  //   },
  //   {
  //     userId: "006",
  //     userFname: "Vivian",
  //     profileImg: "",
  //     userLname: "Aguoma",
  //     userEmail: "kenzi.lawson@example.com",
  //     userNumber: "0807 219 5150",
  //     userDepartment: "Projects",
  //     userRole: "Staff",
  //     userStatus: "Pending",
  //     id: 5
  //   },
  //   {
  //     userId: "007",
  //     userFname: "James",
  //     profileImg: "",
  //     userLname: "Bakare",
  //     userEmail: "nathan.roberts@example.com",
  //     userNumber: "0807 219 5150",
  //     userDepartment: "M&E",
  //     userRole: "Staff",
  //     userStatus: "InActive",
  //     id: 6
  //   },
  //   {
  //     userId: "007",
  //     userFname: "James",
  //     profileImg: "",
  //     userLname: "Bakare",
  //     userEmail: "nathan.roberts@example.com",
  //     userNumber: "0807 219 5150",
  //     userDepartment: "M&E",
  //     userRole: "Staff",
  //     userStatus: "InActive",
  //     id: 7
  //   }
  // ])
  
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')))

  // const [questions,setQuestions] = useState( [
  //   {
  //     category: "Compliance to Specification",
  //     qstn: "Is the project fenced",
  //     answerType: "Yes/No",
  //     id: 1
  //   },
  //   {
  //     category: "Compliance to Specification",
  //     qstn: "Is the project fenced",
  //     answerType: "Yes/No",
  //     id: 2
  //   },
  //   {
  //     category: "Compliance to Specification",
  //     qstn: "Total number of students before the project",
  //     answerType: "Number Field",
  //     id: 3
  //   },
  //   {
  //     category: "Compliance to Specification",
  //     qstn: "Number of students after the project",
  //     answerType: "Number Field",
  //     id: 4
  //   },
  //   {
  //     category: "Compliance to Specification",
  //     qstn: "How many equipments were purchased for the project.",
  //     answerType: "Text Field",
  //     id: 5
  //   }  
  // ])

  const [questions,setQuestions] = useState(JSON.parse(localStorage.getItem('questions')))

  // const [category,setCategory] = useState([
  //   {
  //     projectNature: "Civil Engineering",
  //     attributeCategory: "Impact",
  //     id: 1
  //   },
  //   {
  //     projectNature: "Civil Engineering",
  //     attributeCategory: "Impact",
  //     id: 1
  //   },
  //   {
  //     projectNature: "Civil Engineering",
  //     attributeCategory: "Impact",
  //     id: 1
  //   },
  //   {
  //     projectNature: "Empowerment / Training",
  //     attributeCategory: "Facilities",
  //     id: 2
  //   },
  //   {
  //     projectNature: "Water",
  //     attributeCategory: "Compliance to Specification",
  //     id: 3
  //   },
  //   {
  //     projectNature: "Civil Engineering",
  //     attributeCategory: "General Impression about the project",
  //     id: 4
  //   },
  //   {
  //     projectNature: "Civil Engineering",
  //     attributeCategory: "Financials",
  //     id: 5
  //   }
  // ])

  const [category,setCategory] = useState(JSON.parse(localStorage.getItem('category')))


  return (
    <DataContext.Provider 
      value={{
        projects,setProjects,
        contractors,setContractors,
        evaluation, setEvaluation,
        users,setUsers,
        category,setCategory,
        questions,setQuestions
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;



import {createContext, useState} from 'react'

const DataContext = createContext({})

// [
//   {
//     contractorId: "9232731",
//     id: "1",
//     companyName: "United Nigeria Consortium Company",
//     mailAddress: "debbie.baker@example.com",
//     phoneNumber: "09155782876",
//     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
//     rcNumber: "HJ8993",
//     specialization: "General Contractors",
//     contactPerson: "Tobenna Okafor-Oraeki",
//     contactNumber: "07013847560",
//     contactEmailAddress: "michael.mitc@example.com",
//     NSITF: "",
//     PENCOM: "",
//     BBP: "",
//     RC: "",
//     ITF: "",
//     taxClearance: "",
//     status: "Active",
//     document: [
//       {
//         doc: "",
//         docName: "",
//         docTitle: ""
//       }
//     ],
//     avarta: ""
//   },
//   {
//     contractorId: "9232732",
//     id: "2",
//     companyName: "United Nigeria Consortium Company",
//     mailAddress: "debbie.baker@example.com",
//     phoneNumber: "09155782876",
//     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
//     rcNumber: "HJ8993",
//     specialization: "General Contractors",
//     contactPerson: "Tobenna Okafor-Oraeki",
//     contactNumber: "07013847560",
//     contactEmailAddress: "michael.mitc@example.com",
//     NSITF: "",
//     PENCOM: "",
//     BBP: "",
//     RC: "",
//     ITF: "",
//     taxClearance: "",
//     status: "Active",
//     document: [
//       {
//         doc: "",
//         docName: "",
//         docTitle: ""
//       }
//     ],
//     avarta: ""
//   },
//   {
//     contractorId: "9232733",
//     id: "3",
//     companyName: "United Nigeria Consortium Company",
//     mailAddress: "debbie.baker@example.com",
//     phoneNumber: "09155782876",
//     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
//     rcNumber: "HJ8993",
//     specialization: "General Contractors",
//     contactPerson: "Tobenna Okafor-Oraeki",
//     contactNumber: "07013847560",
//     contactEmailAddress: "michael.mitc@example.com",
//     NSITF: "",
//     PENCOM: "",
//     BBP: "",
//     RC: "",
//     ITF: "",
//     taxClearance: "",
//     status: "Active",
//     document: [
//       {
//         doc: "",
//         docName: "",
//         docTitle: ""
//       }
//     ],
//     avarta: ""
//   },
//   {
//     contractorId: "9232734",
//     id: "4",
//     companyName: "United Nigeria Consortium Company",
//     mailAddress: "debbie.baker@example.com",
//     phoneNumber: "09155782876",
//     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
//     rcNumber: "HJ8993",
//     specialization: "General Contractors",
//     contactPerson: "Tobenna Okafor-Oraeki",
//     contactNumber: "07013847560",
//     contactEmailAddress: "michael.mitc@example.com",
//     NSITF: "",
//     PENCOM: "",
//     BBP: "",
//     RC: "",
//     ITF: "",
//     taxClearance: "",
//     status: "Active",
//     document: [
//       {
//         doc: "",
//         docName: "",
//         docTitle: ""
//       }
//     ],
//     avarta: ""
//   },
//   {
//     contractorId: "9232734",
//     id: "5",
//     companyName: "United Nigeria Consortium Company",
//     mailAddress: "debbie.baker@example.com",
//     phoneNumber: "09155782876",
//     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
//     rcNumber: "HJ8993",
//     specialization: "General Contractors",
//     contactPerson: "Tobenna Okafor-Oraeki",
//     contactNumber: "07013847560",
//     contactEmailAddress: "michael.mitc@example.com",
//     NSITF: "",
//     PENCOM: "",
//     BBP: "",
//     RC: "",
//     ITF: "",
//     taxClearance: "",
//     status: "Active",
//     document: [
//       {
//         doc: "",
//         docName: "",
//         docTitle: ""
//       }
//     ],
//     avarta: ""
//   },
//   {
//     contractorId: "9232734",
//     id: "6",
//     companyName: "United Nigeria Consortium Company",
//     mailAddress: "debbie.baker@example.com",
//     phoneNumber: "09155782876",
//     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
//     rcNumber: "HJ8993",
//     specialization: "General Contractors",
//     contactPerson: "Tobenna Okafor-Oraeki",
//     contactNumber: "07013847560",
//     contactEmailAddress: "michael.mitc@example.com",
//     NSITF: "",
//     PENCOM: "",
//     BBP: "",
//     RC: "",
//     ITF: "",
//     taxClearance: "",
//     status: "Active",
//     document: [
//       {
//         doc: "",
//         docName: "",
//         docTitle: ""
//       }
//     ],
//     avarta: ""
//   },
//   {
//     contractorId: "9232734",
//     id: "7",
//     companyName: "United Nigeria Consortium Company",
//     mailAddress: "debbie.baker@example.com",
//     phoneNumber: "09155782876",
//     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
//     rcNumber: "HJ8993",
//     specialization: "General Contractors",
//     contactPerson: "Tobenna Okafor-Oraeki",
//     contactNumber: "07013847560",
//     contactEmailAddress: "michael.mitc@example.com",
//     NSITF: "",
//     PENCOM: "",
//     BBP: "",
//     RC: "",
//     ITF: "",
//     taxClearance: "",
//     status: "Active",
//     document: [
//       {
//         doc: "",
//         docName: "",
//         docTitle: ""
//       }
//     ],
//     avarta: ""
//   },
//   {
//     contractorId: "9232734",
//     id: "8",
//     companyName: "United Nigeria Consortium Company",
//     mailAddress: "debbie.baker@example.com",
//     phoneNumber: "09155782876",
//     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
//     rcNumber: "HJ8993",
//     specialization: "General Contractors",
//     contactPerson: "Tobenna Okafor-Oraeki",
//     contactNumber: "07013847560",
//     contactEmailAddress: "michael.mitc@example.com",
//     NSITF: "",
//     PENCOM: "",
//     BBP: "",
//     RC: "",
//     ITF: "",
//     taxClearance: "",
//     status: "Active",
//     document: [
//       {
//         doc: "",
//         docName: "",
//         docTitle: ""
//       }
//     ],
//     avarta: ""
//   },
//   {
//     contractorId: "9232734",
//     id: "9",
//     companyName: "United Nigeria Consortium Company",
//     mailAddress: "debbie.baker@example.com",
//     phoneNumber: "09155782876",
//     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
//     rcNumber: "HJ8993",
//     specialization: "General Contractors",
//     contactPerson: "Tobenna Okafor-Oraeki",
//     contactNumber: "07013847560",
//     contactEmailAddress: "michael.mitc@example.com",
//     NSITF: "",
//     PENCOM: "",
//     BBP: "",
//     RC: "",
//     ITF: "",
//     taxClearance: "",
//     status: "Active",
//     document: [
//       {
//         doc: "",
//         docName: "",
//         docTitle: ""
//       }
//     ],
//     avarta: ""
//   },
//   {
//     contractorId: "9232734",
//     id: "10",
//     companyName: "United Nigeria Consortium Company",
//     mailAddress: "debbie.baker@example.com",
//     phoneNumber: "09155782876",
//     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
//     rcNumber: "HJ8993",
//     specialization: "General Contractors",
//     contactPerson: "Tobenna Okafor-Oraeki",
//     contactNumber: "07013847560",
//     contactEmailAddress: "michael.mitc@example.com",
//     NSITF: "",
//     PENCOM: "",
//     BBP: "",
//     RC: "",
//     ITF: "",
//     taxClearance: "",
//     status: "Active",
//     document: [
//       {
//         doc: "",
//         docName: "",
//         docTitle: ""
//       }
//     ],
//     avarta: ""
//   },
// ]

export function DataProvider({children}) {

  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')))

  // const [projects, setProjects] = useState( [
  //   {
  //     projectReferenceNumber: "8656436",
  //     evaluator: "Freeland Construction",
  //     projectTitle: "Building board ready women",
  //     projectType: "Empowerment",
  //     projectSector: "Education",
  //     contractor: "Wakawaka Travel Industries",
  //     status: "completed",
  //     projectValue: "",
  //     geopoliticalZone: "",
  //     federalConsistuency: "",
  //     state: "",
  //     localGovernment: "",
  //     GPSLocation: "",
  //     beneficiaryCommunities: "",
  //     projectYear: "",
  //     document: [
  //       {
  //         docTitle: "",
  //         doc: "",
  //         docName: ""
  //       },
  //       {
  //         doc: "",
  //         docName: "ITC",
  //         docTitle: "Project award letter"
  //       }
  //     ],
  //     location: [
  //       {
  //         locationGeopoliticalZone: "option1",
  //         locationState: "option2",
  //         locationGPSLocation: "GPS",
  //         locationFederalConsistuency: "qw1",
  //         locationLG: ""
  //       },
  //       {
  //         locationGeopoliticalZone: "",
  //         locationState: "",
  //         locationGPSLocation: "GPS",
  //         locationFederalConsistuency: "qw3",
  //         locationLG: "option1"
  //       },
  //       {
  //         locationGeopoliticalZone: "option2",
  //         locationState: "option2",
  //         locationGPSLocation: "qwee",
  //         locationFederalConsistuency: "option3",
  //         locationLG: "option2"
  //       }
  //     ],
  //     imageValues: [
  //       "imagek",
  //       "imagea"
  //     ],
  //     mileStone: [
  //       {
  //         title: "",
  //         description: "Foundation Laying id 2",
  //         payment: "5",
  //         dueDate: "21 Sep, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Block laying up to lintel level",
  //         payment: "25",
  //         dueDate: "24 May, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Roofing and ceiling",
  //         payment: "45",
  //         dueDate: "1 Feb, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Finishing",
  //         payment: "75",
  //         dueDate: "22 Oct, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Completion & Handover",
  //         payment: "100%",
  //         dueDate: "8 Sep, 2020"
  //       }
  //     ],
  //     description: "",
  //     payment: "",
  //     projectContractor: "",
  //     id: 1
  //   },
  //   {
  //     projectReferenceNumber: "8656436",
  //     evaluator: "Freeland Construction",
  //     projectTitle: "Building board ready women",
  //     projectType: "Empowerment",
  //     projectSector: "Education",
  //     contractor: "Wakawaka Travel Industries",
  //     status: "completed",
  //     projectValue: "",
  //     geopoliticalZone: "",
  //     federalConsistuency: "",
  //     state: "",
  //     localGovernment: "",
  //     GPSLocation: "",
  //     beneficiaryCommunities: "",
  //     projectYear: "",
  //     document: [
  //       {
  //         docTitle: "",
  //         doc: "",
  //         docName: ""
  //       },
  //       {
  //         doc: "",
  //         docName: "ITC",
  //         docTitle: "Project award letter"
  //       }
  //     ],
  //     location: [
  //       {
  //         locationGeopoliticalZone: "option1",
  //         locationState: "option2",
  //         locationGPSLocation: "GPS",
  //         locationFederalConsistuency: "qw1",
  //         locationLG: ""
  //       },
  //       {
  //         locationGeopoliticalZone: "",
  //         locationState: "",
  //         locationGPSLocation: "GPS",
  //         locationFederalConsistuency: "qw3",
  //         locationLG: "option1"
  //       },
  //       {
  //         locationGeopoliticalZone: "option2",
  //         locationState: "option2",
  //         locationGPSLocation: "qwee",
  //         locationFederalConsistuency: "option3",
  //         locationLG: "option2"
  //       }
  //     ],
  //     imageValues: [
  //       "imagek",
  //       "imagea"
  //     ],
  //     mileStone: [
  //       {
  //         title: "",
  //         description: "Foundation Laying id 2",
  //         payment: "5",
  //         dueDate: "21 Sep, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Block laying up to lintel level",
  //         payment: "25",
  //         dueDate: "24 May, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Roofing and ceiling",
  //         payment: "45",
  //         dueDate: "1 Feb, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Finishing",
  //         payment: "75",
  //         dueDate: "22 Oct, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Completion & Handover",
  //         payment: "100%",
  //         dueDate: "8 Sep, 2020"
  //       }
  //     ],
  //     description: "",
  //     payment: "",
  //     projectContractor: "",
  //     id: 2
  //   },
  //   {
  //     projectReferenceNumber: "8656436",
  //     evaluator: "Freeland Construction",
  //     projectTitle: "Building board ready women",
  //     projectType: "Empowerment",
  //     projectSector: "Education",
  //     contractor: "Wakawaka Travel Industries",
  //     status: "completed",
  //     projectValue: "",
  //     geopoliticalZone: "",
  //     federalConsistuency: "",
  //     state: "",
  //     localGovernment: "",
  //     GPSLocation: "",
  //     beneficiaryCommunities: "",
  //     projectYear: "",
  //     document: [
  //       {
  //         docTitle: "",
  //         doc: "",
  //         docName: ""
  //       },
  //       {
  //         doc: "",
  //         docName: "ITC",
  //         docTitle: "Project award letter"
  //       }
  //     ],
  //     location: [
  //       {
  //         locationGeopoliticalZone: "option1",
  //         locationState: "option2",
  //         locationGPSLocation: "GPS",
  //         locationFederalConsistuency: "qw1",
  //         locationLG: ""
  //       },
  //       {
  //         locationGeopoliticalZone: "",
  //         locationState: "",
  //         locationGPSLocation: "GPS",
  //         locationFederalConsistuency: "qw3",
  //         locationLG: "option1"
  //       },
  //       {
  //         locationGeopoliticalZone: "option2",
  //         locationState: "option2",
  //         locationGPSLocation: "qwee",
  //         locationFederalConsistuency: "option3",
  //         locationLG: "option2"
  //       }
  //     ],
  //     imageValues: [
  //       "imagek",
  //       "imagea"
  //     ],
  //     mileStone: [
  //       {
  //         title: "",
  //         description: "Foundation Laying id 2",
  //         payment: "5",
  //         dueDate: "21 Sep, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Block laying up to lintel level",
  //         payment: "25",
  //         dueDate: "24 May, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Roofing and ceiling",
  //         payment: "45",
  //         dueDate: "1 Feb, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Finishing",
  //         payment: "75",
  //         dueDate: "22 Oct, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Completion & Handover",
  //         payment: "100%",
  //         dueDate: "8 Sep, 2020"
  //       }
  //     ],
  //     description: "",
  //     payment: "",
  //     projectContractor: "",
  //     id: 3
  //   },
  //   {
  //     projectReferenceNumber: "8656436",
  //     evaluator: "Freeland Construction",
  //     projectTitle: "Building board ready women",
  //     projectType: "Empowerment",
  //     projectSector: "Education",
  //     contractor: "Wakawaka Travel Industries",
  //     status: "completed",
  //     projectValue: "",
  //     geopoliticalZone: "",
  //     federalConsistuency: "",
  //     state: "",
  //     localGovernment: "",
  //     GPSLocation: "",
  //     beneficiaryCommunities: "",
  //     projectYear: "",
  //     document: [
  //       {
  //         docTitle: "",
  //         doc: "",
  //         docName: ""
  //       },
  //       {
  //         doc: "",
  //         docName: "ITC",
  //         docTitle: "Project award letter"
  //       }
  //     ],
  //     location: [
  //       {
  //         locationGeopoliticalZone: "option1",
  //         locationState: "option2",
  //         locationGPSLocation: "GPS",
  //         locationFederalConsistuency: "qw1",
  //         locationLG: ""
  //       },
  //       {
  //         locationGeopoliticalZone: "",
  //         locationState: "",
  //         locationGPSLocation: "GPS",
  //         locationFederalConsistuency: "qw3",
  //         locationLG: "option1"
  //       },
  //       {
  //         locationGeopoliticalZone: "option2",
  //         locationState: "option2",
  //         locationGPSLocation: "qwee",
  //         locationFederalConsistuency: "option3",
  //         locationLG: "option2"
  //       }
  //     ],
  //     imageValues: [
  //       "imagek",
  //       "imagea"
  //     ],
  //     mileStone: [
  //       {
  //         title: "",
  //         description: "Foundation Laying id 2",
  //         payment: "5",
  //         dueDate: "21 Sep, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Block laying up to lintel level",
  //         payment: "25",
  //         dueDate: "24 May, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Roofing and ceiling",
  //         payment: "45",
  //         dueDate: "1 Feb, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Finishing",
  //         payment: "75",
  //         dueDate: "22 Oct, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Completion & Handover",
  //         payment: "100%",
  //         dueDate: "8 Sep, 2020"
  //       }
  //     ],
  //     description: "",
  //     payment: "",
  //     projectContractor: "",
  //     id: 4
  //   },
  //   {
  //     projectReferenceNumber: "8656436",
  //     evaluator: "Freeland Construction",
  //     projectTitle: "Building board ready women",
  //     projectType: "Empowerment",
  //     projectSector: "Education",
  //     contractor: "Wakawaka Travel Industries",
  //     status: "completed",
  //     projectValue: "",
  //     geopoliticalZone: "",
  //     federalConsistuency: "",
  //     state: "",
  //     localGovernment: "",
  //     GPSLocation: "",
  //     beneficiaryCommunities: "",
  //     projectYear: "",
  //     document: [
  //       {
  //         docTitle: "",
  //         doc: "",
  //         docName: ""
  //       },
  //       {
  //         doc: "",
  //         docName: "ITC",
  //         docTitle: "Project award letter"
  //       }
  //     ],
  //     location: [
  //       {
  //         locationGeopoliticalZone: "option1",
  //         locationState: "option2",
  //         locationGPSLocation: "GPS",
  //         locationFederalConsistuency: "qw1",
  //         locationLG: ""
  //       },
  //       {
  //         locationGeopoliticalZone: "",
  //         locationState: "",
  //         locationGPSLocation: "GPS",
  //         locationFederalConsistuency: "qw3",
  //         locationLG: "option1"
  //       },
  //       {
  //         locationGeopoliticalZone: "option2",
  //         locationState: "option2",
  //         locationGPSLocation: "qwee",
  //         locationFederalConsistuency: "option3",
  //         locationLG: "option2"
  //       }
  //     ],
  //     imageValues: [
  //       "imagek",
  //       "imagea"
  //     ],
  //     mileStone: [
  //       {
  //         title: "",
  //         description: "Foundation Laying id 2",
  //         payment: "5",
  //         dueDate: "21 Sep, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Block laying up to lintel level",
  //         payment: "25",
  //         dueDate: "24 May, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Roofing and ceiling",
  //         payment: "45",
  //         dueDate: "1 Feb, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Finishing",
  //         payment: "75",
  //         dueDate: "22 Oct, 2020"
  //       },
  //       {
  //         title: "",
  //         description: "Completion & Handover",
  //         payment: "100%",
  //         dueDate: "8 Sep, 2020"
  //       }
  //     ],
  //     description: "",
  //     payment: "",
  //     projectContractor: "",
  //     id: 5
  //   }
    
  // ])

  const [contractors, setContractors] = useState(JSON.parse(localStorage.getItem('contractors')) )
  
  // const [contractors, setContractors] = useState([
  //   {
  //     contractorId: "9232734",
  //     id: 1,
  //     companyName: "United Nigeria Consortium Company",
  //     mailAddress: "debbie.baker@example.com",
  //     phoneNumber: "09155782876",
  //     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
  //     rcNumber: "HJ8993",
  //     specialization: "General Contractors",
  //     contactPerson: "Tobenna Okafor-Oraeki",
  //     contactNumber: "07013847560",
  //     contactEmailAddress: "michael.mitc@example.com",
  //     NSITF: "",
  //     PENCOM: "",
  //     BBP: "",
  //     RC: "",
  //     ITF: "",
  //     taxClearance: "",
  //     status: "Active",
  //     document: [
  //       {
  //         doc: ""
  //       }
  //     ]
  //   },
  //   {
  //     contractorId: "9232734",
  //     id: 2,
  //     companyName: "United Nigeria Consortium Company",
  //     mailAddress: "debbie.baker@example.com",
  //     phoneNumber: "09155782876",
  //     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
  //     rcNumber: "HJ8993",
  //     specialization: "General Contractors",
  //     contactPerson: "Tobenna Okafor-Oraeki",
  //     contactNumber: "07013847560",
  //     contactEmailAddress: "michael.mitc@example.com",
  //     NSITF: "",
  //     PENCOM: "",
  //     BBP: "",
  //     RC: "",
  //     ITF: "",
  //     taxClearance: "",
  //     status: "Active",
  //     document: [
  //       {
  //         doc: ""
  //       }
  //     ]
  //   },
  //   {
  //     contractorId: "9232734",
  //     id: 3,
  //     companyName: "United Nigeria Consortium Company",
  //     mailAddress: "debbie.baker@example.com",
  //     phoneNumber: "09155782876",
  //     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
  //     rcNumber: "HJ8993",
  //     specialization: "General Contractors",
  //     contactPerson: "Tobenna Okafor-Oraeki",
  //     contactNumber: "07013847560",
  //     contactEmailAddress: "michael.mitc@example.com",
  //     NSITF: "",
  //     PENCOM: "",
  //     BBP: "",
  //     RC: "",
  //     ITF: "",
  //     taxClearance: "",
  //     status: "Active",
  //     document: [
  //       {
  //         doc: ""
  //       }
  //     ]
  //   },
  //   {
  //     contractorId: "9232734",
  //     id: 4,
  //     companyName: "United Nigeria Consortium Company",
  //     mailAddress: "debbie.baker@example.com",
  //     phoneNumber: "09155782876",
  //     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
  //     rcNumber: "HJ8993",
  //     specialization: "General Contractors",
  //     contactPerson: "Tobenna Okafor-Oraeki",
  //     contactNumber: "07013847560",
  //     contactEmailAddress: "michael.mitc@example.com",
  //     NSITF: "",
  //     PENCOM: "",
  //     BBP: "",
  //     RC: "",
  //     ITF: "",
  //     taxClearance: "",
  //     status: "Active",
  //     document: [
  //       {
  //         doc: ""
  //       }
  //     ]
  //   },
  //   {
  //     contractorId: "9232734",
  //     id: 5,
  //     companyName: "United Nigeria Consortium Company",
  //     mailAddress: "debbie.baker@example.com",
  //     phoneNumber: "09155782876",
  //     companyAddress: "5 Ebimpejo Lane, off Iweka road, Idumota, Lagos",
  //     rcNumber: "HJ8993",
  //     specialization: "General Contractors",
  //     contactPerson: "Tobenna Okafor-Oraeki",
  //     contactNumber: "07013847560",
  //     contactEmailAddress: "michael.mitc@example.com",
  //     NSITF: "",
  //     PENCOM: "",
  //     BBP: "",
  //     RC: "",
  //     ITF: "",
  //     taxClearance: "",
  //     status: "Active",
  //     document: [
  //       {
  //         doc: ""
  //       }
  //     ]
  //   }
  // ])

  // const [evaluation, setEvaluation] = useState([
  //   {
  //     contractorFormId: "1",
  //     projectFormId: "1",
  //     projectNo: "8656436",
  //     SDGSector: "Education",
  //     projectFormValue: "Building board ready women",
  //     contractorFormValue: "Norwood Builders",
  //     PRinput1: "selected",
  //     PRinput2: "deselected",
  //     PRinput3: "deselected",
  //     PRinput4: "deselected",
  //     PRinput5: "selected",
  //     PRinput6: "selected",
  //     PRinput7: "deselected",
  //     PRinput8: "selected",
  //     CRinput1: "selected",
  //     CRinput2: "deselected",
  //     CRinput3: "selected",
  //     CRinput4: "deselected",
  //     CRinput5: "selected",
  //     CRinput6: "selected",
  //     CRinput7: "selected",
  //     NJC: "450",
  //     NPR: "7810",
  //     TNSafter1: "1640",
  //     TNSafter2: "50",
  //     TNSafter3: "40",
  //     TNSafter4: "37",
  //     TNSbefore1: "5790",
  //     TNSbefore2: "190",
  //     TNSbefore3: "480",
  //     TNSbefore4: "24",
  //     TNCafter: "43",
  //     TNCbefore: "58",
  //     TNFSgood1: "895",
  //     TNFSbad1: "230",
  //     TNFStotal1: "1127",
  //     FGgood2: "894",
  //     FGbefore2: "67",
  //     FGtotal2: "971",
  //     status: "Active",
  //     id: 1
  //   },
  //   {
  //     contractorFormId: "1",
  //     projectFormId: "1",
  //     projectNo: "8656436",
  //     SDGSector: "Education",
  //     projectFormValue: "Building board ready women",
  //     contractorFormValue: "Norwood Builders",
  //     PRinput1: "selected",
  //     PRinput2: "deselected",
  //     PRinput3: "deselected",
  //     PRinput4: "deselected",
  //     PRinput5: "selected",
  //     PRinput6: "selected",
  //     PRinput7: "deselected",
  //     PRinput8: "selected",
  //     CRinput1: "selected",
  //     CRinput2: "deselected",
  //     CRinput3: "selected",
  //     CRinput4: "deselected",
  //     CRinput5: "selected",
  //     CRinput6: "selected",
  //     CRinput7: "selected",
  //     NJC: "450",
  //     NPR: "7810",
  //     TNSafter1: "1640",
  //     TNSafter2: "50",
  //     TNSafter3: "40",
  //     TNSafter4: "37",
  //     TNSbefore1: "5790",
  //     TNSbefore2: "190",
  //     TNSbefore3: "480",
  //     TNSbefore4: "24",
  //     TNCafter: "43",
  //     TNCbefore: "58",
  //     TNFSgood1: "895",
  //     TNFSbad1: "230",
  //     TNFStotal1: "1127",
  //     FGgood2: "894",
  //     FGbefore2: "67",
  //     FGtotal2: "971",
  //     status: "Active",
  //     id: 2
  //   },
  //   {
  //     contractorFormId: "1",
  //     projectFormId: "1",
  //     projectNo: "8656436",
  //     SDGSector: "Education",
  //     projectFormValue: "Building board ready women",
  //     contractorFormValue: "Norwood Builders",
  //     PRinput1: "selected",
  //     PRinput2: "deselected",
  //     PRinput3: "deselected",
  //     PRinput4: "deselected",
  //     PRinput5: "selected",
  //     PRinput6: "selected",
  //     PRinput7: "deselected",
  //     PRinput8: "selected",
  //     CRinput1: "selected",
  //     CRinput2: "deselected",
  //     CRinput3: "selected",
  //     CRinput4: "deselected",
  //     CRinput5: "selected",
  //     CRinput6: "selected",
  //     CRinput7: "selected",
  //     NJC: "450",
  //     NPR: "7810",
  //     TNSafter1: "1640",
  //     TNSafter2: "50",
  //     TNSafter3: "40",
  //     TNSafter4: "37",
  //     TNSbefore1: "5790",
  //     TNSbefore2: "190",
  //     TNSbefore3: "480",
  //     TNSbefore4: "24",
  //     TNCafter: "43",
  //     TNCbefore: "58",
  //     TNFSgood1: "895",
  //     TNFSbad1: "230",
  //     TNFStotal1: "1127",
  //     FGgood2: "894",
  //     FGbefore2: "67",
  //     FGtotal2: "971",
  //     status: "Active",
  //     id: 3
  //   },
  //   {
  //     contractorFormId: "1",
  //     projectFormId: "1",
  //     projectNo: "8656436",
  //     SDGSector: "Education",
  //     projectFormValue: "Building board ready women",
  //     contractorFormValue: "Norwood Builders",
  //     PRinput1: "selected",
  //     PRinput2: "deselected",
  //     PRinput3: "deselected",
  //     PRinput4: "deselected",
  //     PRinput5: "selected",
  //     PRinput6: "selected",
  //     PRinput7: "deselected",
  //     PRinput8: "selected",
  //     CRinput1: "selected",
  //     CRinput2: "deselected",
  //     CRinput3: "selected",
  //     CRinput4: "deselected",
  //     CRinput5: "selected",
  //     CRinput6: "selected",
  //     CRinput7: "selected",
  //     NJC: "450",
  //     NPR: "7810",
  //     TNSafter1: "1640",
  //     TNSafter2: "50",
  //     TNSafter3: "40",
  //     TNSafter4: "37",
  //     TNSbefore1: "5790",
  //     TNSbefore2: "190",
  //     TNSbefore3: "480",
  //     TNSbefore4: "24",
  //     TNCafter: "43",
  //     TNCbefore: "58",
  //     TNFSgood1: "895",
  //     TNFSbad1: "230",
  //     TNFStotal1: "1127",
  //     FGgood2: "894",
  //     FGbefore2: "67",
  //     FGtotal2: "971",
  //     status: "Active",
  //     id: 4
  //   },
  //   {
  //     contractorFormId: "1",
  //     projectFormId: "1",
  //     projectNo: "8656436",
  //     SDGSector: "Education",
  //     projectFormValue: "Building board ready women",
  //     contractorFormValue: "Norwood Builders",
  //     PRinput1: "selected",
  //     PRinput2: "deselected",
  //     PRinput3: "deselected",
  //     PRinput4: "deselected",
  //     PRinput5: "selected",
  //     PRinput6: "selected",
  //     PRinput7: "deselected",
  //     PRinput8: "selected",
  //     CRinput1: "selected",
  //     CRinput2: "deselected",
  //     CRinput3: "selected",
  //     CRinput4: "deselected",
  //     CRinput5: "selected",
  //     CRinput6: "selected",
  //     CRinput7: "selected",
  //     NJC: "450",
  //     NPR: "7810",
  //     TNSafter1: "1640",
  //     TNSafter2: "50",
  //     TNSafter3: "40",
  //     TNSafter4: "37",
  //     TNSbefore1: "5790",
  //     TNSbefore2: "190",
  //     TNSbefore3: "480",
  //     TNSbefore4: "24",
  //     TNCafter: "43",
  //     TNCbefore: "58",
  //     TNFSgood1: "895",
  //     TNFSbad1: "230",
  //     TNFStotal1: "1127",
  //     FGgood2: "894",
  //     FGbefore2: "67",
  //     FGtotal2: "971",
  //     status: "Active",
  //     id: 5
  //   },
  //   {
  //     contractorFormId: "1",
  //     projectFormId: "1",
  //     projectNo: "8656436",
  //     SDGSector: "Education",
  //     projectFormValue: "Building board ready women",
  //     contractorFormValue: "Norwood Builders",
  //     PRinput1: "selected",
  //     PRinput2: "deselected",
  //     PRinput3: "deselected",
  //     PRinput4: "deselected",
  //     PRinput5: "selected",
  //     PRinput6: "selected",
  //     PRinput7: "deselected",
  //     PRinput8: "selected",
  //     CRinput1: "selected",
  //     CRinput2: "deselected",
  //     CRinput3: "selected",
  //     CRinput4: "deselected",
  //     CRinput5: "selected",
  //     CRinput6: "selected",
  //     CRinput7: "selected",
  //     NJC: "450",
  //     NPR: "7810",
  //     TNSafter1: "1640",
  //     TNSafter2: "50",
  //     TNSafter3: "40",
  //     TNSafter4: "37",
  //     TNSbefore1: "5790",
  //     TNSbefore2: "190",
  //     TNSbefore3: "480",
  //     TNSbefore4: "24",
  //     TNCafter: "43",
  //     TNCbefore: "58",
  //     TNFSgood1: "895",
  //     TNFSbad1: "230",
  //     TNFStotal1: "1127",
  //     FGgood2: "894",
  //     FGbefore2: "67",
  //     FGtotal2: "971",
  //     status: "Active",
  //     id: 6
  //   },
  //   {
  //     contractorFormId: "1",
  //     projectFormId: "1",
  //     projectNo: "8656436",
  //     SDGSector: "Education",
  //     projectFormValue: "Building board ready women",
  //     contractorFormValue: "Norwood Builders",
  //     PRinput1: "selected",
  //     PRinput2: "deselected",
  //     PRinput3: "deselected",
  //     PRinput4: "deselected",
  //     PRinput5: "selected",
  //     PRinput6: "selected",
  //     PRinput7: "deselected",
  //     PRinput8: "selected",
  //     CRinput1: "selected",
  //     CRinput2: "deselected",
  //     CRinput3: "selected",
  //     CRinput4: "deselected",
  //     CRinput5: "selected",
  //     CRinput6: "selected",
  //     CRinput7: "selected",
  //     NJC: "450",
  //     NPR: "7810",
  //     TNSafter1: "1640",
  //     TNSafter2: "50",
  //     TNSafter3: "40",
  //     TNSafter4: "37",
  //     TNSbefore1: "5790",
  //     TNSbefore2: "190",
  //     TNSbefore3: "480",
  //     TNSbefore4: "24",
  //     TNCafter: "43",
  //     TNCbefore: "58",
  //     TNFSgood1: "895",
  //     TNFSbad1: "230",
  //     TNFStotal1: "1127",
  //     FGgood2: "894",
  //     FGbefore2: "67",
  //     FGtotal2: "971",
  //     status: "Active",
  //     id: 7
  //   },
  // ])

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

  const [questions,setQuestions] = useState( [
    {
      category: "Compliance to Specification",
      qstn: "Is the project fenced",
      answerType: "Yes/No",
      id: 1
    },
    {
      category: "Compliance to Specification",
      qstn: "Is the project fenced",
      answerType: "Yes/No",
      id: 2
    },
    {
      category: "Compliance to Specification",
      qstn: "Total number of students before the project",
      answerType: "Number Field",
      id: 3
    },
    {
      category: "Compliance to Specification",
      qstn: "Number of students after the project",
      answerType: "Number Field",
      id: 4
    },
    {
      category: "Compliance to Specification",
      qstn: "How many equipments were purchased for the project.",
      answerType: "Text Field",
      id: 5
    }  
  ])

  // const [questions,setQuestions] = useState(JSON.parse(localStorage.getItem('questions')))

  const [category,setCategory] = useState([
    {
      projectNature: "Civil Engineering",
      attributeCategory: "Impact",
      id: 1
    },
    {
      projectNature: "Civil Engineering",
      attributeCategory: "Impact",
      id: 1
    },
    {
      projectNature: "Civil Engineering",
      attributeCategory: "Impact",
      id: 1
    },
    {
      projectNature: "Empowerment / Training",
      attributeCategory: "Facilities",
      id: 2
    },
    {
      projectNature: "Water",
      attributeCategory: "Compliance to Specification",
      id: 3
    },
    {
      projectNature: "Civil Engineering",
      attributeCategory: "General Impression about the project",
      id: 4
    },
    {
      projectNature: "Civil Engineering",
      attributeCategory: "Financials",
      id: 5
    }
  ])

   // const [category,setCategory] = useState(JSON.parse(localStorage.getItem('category')))

  JSON.parse(localStorage.getItem('contractor'))

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



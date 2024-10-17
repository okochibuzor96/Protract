import { createBrowserRouter } from "react-router-dom";
  import { lazy,Suspense } from "react";
  import Login from '../Pages/Login';
  import { Navigate } from "react-router-dom";
  import SettingLayout from "../Pages/Settings/Components/Settings/Setting_Layout";
  import DashboardLayout from "../Pages/Dashboard/Dashboard_Layout";
  import ContractorsLayout from "../Pages/Contractors/ContractorsLayout";
  import ProjectLayout from "../Pages/Projects/Projects-Components/ProjectLayout";
  import PaymentLayout from "../Pages/Payments/Payment Component/Payment_Layout";
  import UserLayout from "../Pages/Users/Components/Users/UserLayout";
  import EvaluationLayout from "../Pages/Evaluation/Components/Evaluation_Layout";
  
  // const Homepage = lazy(()=> import("../Pages/Homepage/Homepage"))
  const Dashboard = lazy(()=> import("../Pages/Dashboard/Dashboard"))
  // const Dashboard_Layout = lazy(()=> import("../Pages/Dashboard/Dashboard_Layout"))
  
  const Contractors = lazy(()=> import("../Pages/Contractors/Contractors"))
  const ContractorDetails = lazy(()=> import("../Pages/Contractors/ContractorDetails"))
  const ContractorDetailsIndex = lazy(()=> import("../Pages/Contractors/ContractorDetailsIndex"))
  const EditDetails= lazy(()=> import("../Pages/Contractors/Edit-Details/EditDetails"))
  const AddContractor = lazy(()=> import("../Pages/Contractors/Add-Contractor/AddContractor"))
  // const ContractorsLayout = lazy(()=> import("../Pages/Contractors/ContractorsLayout"))
  
  const ProjectIndex = lazy(()=> import("../Pages/Projects/Projects-Components/ProjectsIndex"))
  const ProjectDetailsIndex = lazy(()=> import("../Pages/Projects/ProjectDetails/Components/projectDetailsIndex"))
  const ProjectDetailsLayout = lazy(()=> import("../Pages/Projects/ProjectDetails/Components/Project-Details-Layout"))
  const NewProjectLayout = lazy(()=> import("../Pages/Projects/New_Project/NewProjectLayout"))
  const EditProjectLayout = lazy(()=> import("../Pages/Projects/Edit_Project/Edit_ProjectLayout"))
  // const ProjectLayout = lazy(()=> import("../Pages/Projects/Projects-Components/ProjectLayout"))
  
  const PaymentIndex = lazy(() => import("../Pages/Payments/Payment Component/Payment_Index"))
  const PaymentDetails = lazy(() => import("../Pages/Payments/Payment Details/Payment_Details"))
  // const Payment_Layout  = lazy(() => import("../Pages/Payments/Payment Component/Payment_Layout"))
  
  
  const UserIndex = lazy(() => import("../Pages/Users/Components/Users/UserIndex"))
  const UserDetailsLayout = lazy(() => import("../Pages/Users/Components/User Details/User_Details_Layout"))
  const UserDetailsIndex = lazy(() => import("../Pages/Users/Components/User Details/User_Details_Index"))
  const AddUser = lazy(() => import("../Pages/Users/Components/Add Users/AddUser"))
  const EditUser = lazy(() => import("../Pages/Users/Components/Edit User Details/Edit_User"))
  // const UserLayout = lazy(() => import("../Pages/Users/Components/Users/UserLayout"))
  
  const EvaluationIndex = lazy(() => import("../Pages/Evaluation/Components/Evaluation_Index"))
  const NewEvaluation= lazy(() => import("../Pages/Evaluation/Children Components/Layout Component/New_Evaluation"))
  const DetailsLayout= lazy(() => import("../Pages/Evaluation/Children Components/Evaluation Details/Details_Layout"))
  // const Evaluation_Layout= lazy(() => import("../Pages/Evaluation/Components/Evaluation_Layout"))
  
  const SettingIndex = lazy(() => import("../Pages/Settings/Components/Settings/SettingIndex"))
  // const Setting_Layout = lazy(() => import("../Pages/Settings/Components/Settings/Setting_Layout"))
  
  
  
  const passWords = window.localStorage.getItem('Pw')
  const resolvedPwd = JSON.parse(passWords)
  const userInfo = window.localStorage.getItem('users')
  const resolvedUser = JSON.parse(userInfo)

  const routerMain = createBrowserRouter([
    {
      path: "/",
      element:  !resolvedPwd && !resolvedUser ?<Navigate to='/login'/> : <Navigate to='/dashboard'/>
    },
    {
        path:"/dashboard",
        element:!resolvedPwd && !resolvedUser ?<Navigate to='/login'/> : <DashboardLayout/>,
        children: [
          {
            index:true,
            element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><Dashboard/></Suspense>
          }
        ]
    },
    {
      path: "/contractors",
      element: <ContractorsLayout/>,
      children: [
        {
          index:true,
          element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><Contractors/></Suspense>
        },
        {
          path: "contractor_details/:id",
          element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><ContractorDetails/></Suspense>,
          children: [
            {
              index:true,
              element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><ContractorDetailsIndex/></Suspense>
            },
            {
              path:"edit_details",
              element: <EditDetails/>
            }
          ]
          
        },
        {
          path:"new_contractor",
          element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><AddContractor/></Suspense>
        }
      ]
    },
    {
      path:"projects",
      element: <ProjectLayout/>,
      children: [
        {
          index: true,
          element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'80vh', backgroundColor:"gray"}}>Loading...</div>}><ProjectIndex/></Suspense>
        },
        {
          path:"project-details/:id",
          element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'80vh', backgroundColor:"gray"}}>Loading...</div>}><ProjectDetailsLayout/></Suspense>,
          children:[
            {
              index: true,
              element: <ProjectDetailsIndex/>
            },
            {
              path:"edit-project",
              element: <EditProjectLayout/>
            }
          ]
        },
        {
          path:"new-project",
          element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'80vh', backgroundColor:"gray"}}>Loading...</div>}><NewProjectLayout/></Suspense>
        }
      ]
    },
    {
      path:"payments",
      element: <PaymentLayout/>,
      children: [
        {
          index:true,
          element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><PaymentIndex/></Suspense>
        },
        {
          path:"payment_details/:id",
          element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><PaymentDetails/></Suspense>
        }
      ]
    },
    {
      path:"users",
      element: <UserLayout/>,
      children:[
        {
          index:true,
          element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><UserIndex/></Suspense>
        },
        {
          path:"user-details/:id",
          element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><UserDetailsLayout/></Suspense>,
          children:[
            {
                index:true,
                element:<UserDetailsIndex/>
            },
            {
              path:"edit_user",
              element:<EditUser/>
            }
          ]
        },
        {
          path:"new-staff",
          element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><AddUser/></Suspense>
        }
      ]
    },
    {
      path:"evaluation",
      element: <EvaluationLayout/>,
      children: [
        {
          index: true,
          element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><EvaluationIndex/></Suspense>
        },
        {
          path: "new-evaluation",
          element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><NewEvaluation/></Suspense>
        },
        {
          path:"evaluation-details/:id",
          element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><DetailsLayout/></Suspense>
        }
      ]
    },
    {
      path:'settings',
      element:<SettingLayout/>,
      children:[
        {
          index:true,
          element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'70vh', backgroundColor:"gray"}}>Loading...</div>}><SettingIndex/></Suspense>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    }
  ])

  export default routerMain
  
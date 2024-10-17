
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { lazy,Suspense,useEffect } from "react";
import Login from './Pages/Login';
import { Navigate } from "react-router-dom";
import Setting_Layout from "./Pages/Settings/Components/Settings/Setting_Layout";
import Dashboard_Layout from "./Pages/Dashboard/Dashboard_Layout";
import ContractorsLayout from "./Pages/Contractors/ContractorsLayout";
import ProjectLayout from "./Pages/Projects/Projects-Components/ProjectLayout";
import Payment_Layout from "./Pages/Payments/Payment Component/Payment_Layout";
import UserLayout from "./Pages/Users/Components/Users/UserLayout";
import Evaluation_Layout from "./Pages/Evaluation/Components/Evaluation_Layout";

const Homepage = lazy(()=> import("./Pages/Homepage/Homepage"))
const Dashboard = lazy(()=> import("./Pages/Dashboard/Dashboard"))
// const Dashboard_Layout = lazy(()=> import("./Pages/Dashboard/Dashboard_Layout"))

const Contractors = lazy(()=> import("./Pages/Contractors/Contractors"))
const ContractorDetails = lazy(()=> import("./Pages/Contractors/ContractorDetails"))
const ContractorDetailsIndex = lazy(()=> import("./Pages/Contractors/ContractorDetailsIndex"))
const EditDetails= lazy(()=> import("./Pages/Contractors/Edit-Details/EditDetails"))
const AddContractor = lazy(()=> import("./Pages/Contractors/Add-Contractor/AddContractor"))
// const ContractorsLayout = lazy(()=> import("./Pages/Contractors/ContractorsLayout"))

const ProjectIndex = lazy(()=> import("./Pages/Projects/Projects-Components/ProjectsIndex"))
const ProjectDetailsIndex = lazy(()=> import("./Pages/Projects/ProjectDetails/Components/projectDetailsIndex"))
const ProjectDetailsLayout = lazy(()=> import("./Pages/Projects/ProjectDetails/Components/Project-Details-Layout"))
const NewProjectLayout = lazy(()=> import("./Pages/Projects/New_Project/NewProjectLayout"))
const Edit_ProjectLayout = lazy(()=> import("./Pages/Projects/Edit_Project/Edit_ProjectLayout"))
// const ProjectLayout = lazy(()=> import("./Pages/Projects/Projects-Components/ProjectLayout"))

const Payment_Index = lazy(() => import("./Pages/Payments/Payment Component/Payment_Index"))
const Payment_Details = lazy(() => import("./Pages/Payments/Payment Details/Payment_Details"))
// const Payment_Layout  = lazy(() => import("./Pages/Payments/Payment Component/Payment_Layout"))


const UserIndex = lazy(() => import("./Pages/Users/Components/Users/UserIndex"))
const User_Details_Layout = lazy(() => import("./Pages/Users/Components/User Details/User_Details_Layout"))
const User_Details_Index = lazy(() => import("./Pages/Users/Components/User Details/User_Details_Index"))
const AddUser = lazy(() => import("./Pages/Users/Components/Add Users/AddUser"))
const Edit_User = lazy(() => import("./Pages/Users/Components/Edit User Details/Edit_User"))
// const UserLayout = lazy(() => import("./Pages/Users/Components/Users/UserLayout"))

const Evaluation_Index = lazy(() => import("./Pages/Evaluation/Components/Evaluation_Index"))
const New_Evaluation= lazy(() => import("./Pages/Evaluation/Children Components/Layout Component/New_Evaluation"))
const Details_Layout= lazy(() => import("./Pages/Evaluation/Children Components/Evaluation Details/Details_Layout"))
// const Evaluation_Layout= lazy(() => import("./Pages/Evaluation/Components/Evaluation_Layout"))

const SettingIndex = lazy(() => import("./Pages/Settings/Components/Settings/SettingIndex"))
// const Setting_Layout = lazy(() => import("./Pages/Settings/Components/Settings/Setting_Layout"))


const passWords = window.localStorage.getItem('Pwd')
const resolvedPwd = JSON.parse(passWords)
const userInfo = window.localStorage.getItem('users')
const resolvedUser = JSON.parse(userInfo)
// !resolvedPwd && !resolvedUser ?<Homepage/> : <Navigate to='/dashboard'/>
const routerMain = createBrowserRouter([
  {
    path: "/",
    element:  !resolvedPwd && !resolvedUser ?<Homepage/> : <Navigate to='/dashboard'/>
  },
  {
      path:"/dashboard",
      element: <Dashboard_Layout/>,
      children: [
        {
          index:true,
          element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><Dashboard/></Suspense>
        }
      ]
  },
  {
    path: "/contractors",
    element: <ContractorsLayout/>,
    children: [
      {
        index:true,
        element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><Contractors/></Suspense>
      },
      {
        path: "contractor_details/:id",
        element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><ContractorDetails/></Suspense>,
        children: [
          {
            index:true,
            element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><ContractorDetailsIndex/></Suspense>
          },
          {
            path:"edit_details",
            element: <EditDetails/>
          }
        ]
        
      },
      {
        path:"new_contractor",
        element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><AddContractor/></Suspense>
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
            element: <Edit_ProjectLayout/>
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
    element: <Payment_Layout/>,
    children: [
      {
        index:true,
        element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><Payment_Index/></Suspense>
      },
      {
        path:"payment_details/:id",
        element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><Payment_Details/></Suspense>
      }
    ]
  },
  {
    path:"users",
    element: <UserLayout/>,
    children:[
      {
        index:true,
        element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><UserIndex/></Suspense>
      },
      {
        path:"user-details/:id",
        element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><User_Details_Layout/></Suspense>,
        children:[
          {
              index:true,
              element:<User_Details_Index/>
          },
          {
            path:"edit_user",
            element:<Edit_User/>
          }
        ]
      },
      {
        path:"new-staff",
        element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><AddUser/></Suspense>
      }
    ]
  },
  {
    path:"evaluation",
    element: <Evaluation_Layout/>,
    children: [
      {
        index: true,
        element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'100vh', backgroundColor:"gray"}}>Loading...</div>}><Evaluation_Index/></Suspense>
      },
      {
        path: "new-evaluation",
        element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'100vh', backgroundColor:"gray"}}>Loading...</div>}><New_Evaluation/></Suspense>
      },
      {
        path:"evaluation-details/:id",
        element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'100vh', backgroundColor:"gray"}}>Loading...</div>}><Details_Layout/></Suspense>
      }
    ]
  },
  {
    path:'settings',
    element:<Setting_Layout/>,
    children:[
      {
        index:true,
        element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><SettingIndex/></Suspense>
      }
    ]
  },
   
  // {
  //   path: "/",
  //   element: <Homepage/>,
  //   children: [
  //     {
  //      path:"dashboard",
  //       element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><Dashboard/></Suspense>
  //     },
  //     {
  //       path: "contractors",
  //       element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><Contractors/></Suspense>,
  //       children: [
  //         {
  //           index:true,
  //           element: <ContractorsLayout/>
  //         },
  //         {
  //           path: "contractor_details/:id",
  //           element: <ContractorDetails/>,
  //           children: [
  //             {
  //               index:true,
  //               element: <ContractorDetailsIndex/>
  //             },
  //             {
  //               path:"edit_details",
  //               element: <EditDetails/>
  //             }
  //           ]
            
  //         },
  //         {
  //           path:"new_contractor",
  //           element: <AddContractor/>
  //         }
  //       ]
  //     },
  //     {
  //       path:"projects",
  //       element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'80vh', backgroundColor:"gray"}}>Loading...</div>}><ProjectLayout/></Suspense>,
  //       children: [
  //         {
  //           index: true,
  //           element:<ProjectIndex/>
  //         },
  //         {
  //           path:"project-details/:id",
  //           element:<Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'80vh', backgroundColor:"gray"}}>Loading...</div>}><ProjectDetailsLayout/></Suspense>,
  //           children:[
  //             {
  //               index: true,
  //               element: <ProjectDetailsIndex/>
  //             },
  //             {
  //               path:"edit-project",
  //               element: <Edit_ProjectLayout/>
  //             }
  //           ]
  //         },
  //         {
  //           path:"new-project",
  //           element: <NewProjectLayout/>
  //         }
  //       ]
  //     },
  //     {
  //       path:"payments",
  //       element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><Payment_Layout/></Suspense>,
  //       children: [
  //         {
  //           index:true,
  //           element:<Payment_Index/>
  //         },
  //         {
  //           path:"payment_details/:id",
  //           element:<Payment_Details/>
  //         }
  //       ]
  //     },
  //     {
  //       path:"users",
  //       element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><UserLayout/></Suspense>,
  //       children:[
  //         {
  //           index:true,
  //           element:<UserIndex/>
  //         },
  //         {
  //           path:"user-details/:id",
  //           element:<User_Details_Layout/>,
  //           children:[
  //             {
  //                index:true,
  //                element:<User_Details_Index/>
  //             },
  //             {
  //               path:"edit_user",
  //               element:<Edit_User/>
  //             }
  //           ]
  //         },
  //         {
  //           path:"new-staff",
  //           element:<AddUser/>
  //         }
  //       ]
  //     },
  //     {
  //       path:"evaluation",
  //       element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'100vh', backgroundColor:"gray"}}>Loading...</div>}><Evaluation_Layout/></Suspense>,
  //       children: [
  //         {
  //           index: true,
  //           element: <Evaluation_Index/>
  //         },
  //         {
  //           path: "new-evaluation",
  //           element: <New_Evaluation/>
  //         },
  //         {
  //           path:"evaluation-details/:id",
  //           element:<Details_Layout/>
  //         }
  //       ]
  //     },
  //     {
  //       path:'settings',
  //       element: <Suspense fallback={<div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'100%', height:'85vh', backgroundColor:"gray"}}>Loading...</div>}><SettingIndex/></Suspense>
  //     }
  //   ]
  // },
  {
    path: "/login",
    element: <Login/>
  }
])

function App() {

  // useEffect(() =>{
  //   localStorage.removeItem('Pwd')
  //   localStorage.removeItem('users')
    
    
  // },[])
  return (
   
    

      <RouterProvider router={routerMain} />

    
      
   
  );
}

export default App;

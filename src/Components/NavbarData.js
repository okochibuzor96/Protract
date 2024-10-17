import React from 'react'
import {BsGrid} from 'react-icons/bs';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiUserFollowLine } from "react-icons/ri";
import { CiPercent } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { RiBarChart2Line } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";



export const NavbarData = [

    {icon:<BsGrid/>,
     title:'Dashboard',
     path:'/dashboard'
    },
    {
        icon:<AiOutlineThunderbolt/>,
        title:'Contractors',
        path:'/contractors'
    },
    
    {
        icon:<RiUserFollowLine/>,
        title:'Projects',
        path:'/projects'
    },
    
    {
        icon:<MdOutlinePayment />,
        title:'Payments',
        path:'/payments'
    },
    
    {
        icon:<RiBarChart2Line/>,
        title:'Evaluation',
        path:'/evaluation'
    },
    
    {
        icon:<CiUser/>,
        title:'User Management',
        path:'/users'
    },
    {
        icon:<CiPercent/>,
        title:'Reports',
        path:'/reports'
    },
    {
        icon:<CiSettings/>,
        title:'Settings',
        path:'/settings'
    }
    
]
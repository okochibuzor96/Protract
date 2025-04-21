import DataContext from "../../Pages/Context API/Create_Context";
import {useContext} from 'react'

// function GetUsers(props) {

//   const {projects} = useContext(DataContext)

//   const userArrayValue = []


//   for (let index = (props.page-1)*props.limit; index <(props.page * props.limit) && props.data?.data[index]; index++) {

//     userArrayValue.push(props.data?.data[index]);
    
//   }
  

  
//   return payload
   
// }

const GetUsers = {
  Project : (props)=>{
    const {projects} = useContext(DataContext)

    const userArrayValue = []

    for (let index = (props.page-1)*props.limit; index <(props.page * props.limit) && projects?projects[index]:""; index++) {

      userArrayValue.push(projects?projects[index]:'');
      
    }

    return userArrayValue
  },
  Contractor : (props)=>{
    const {contractors} = useContext(DataContext)

    const userArrayValue = []

    for (let index = (props.page-1)*props.limit; index <(props.page * props.limit) && contractors?contractors[index]:''; index++) {

      userArrayValue.push(contractors?contractors[index]:"");
      
    }

    return userArrayValue
  },
  Evaluation : (props)=>{

    const {evaluation} = useContext(DataContext)

    const userArrayValue = []


    for (let index = (props.page-1)*props.limit; index <(props.page * props.limit) && evaluation?evaluation[index]:''; index++) {

      userArrayValue.push(evaluation?evaluation[index]:"");
      
    }

    return userArrayValue
  },
  User : (props)=>{

    const {users} = useContext(DataContext)

    const userArrayValue = []


    for (let index = (props.page-1)*props.limit; index <(props.page * props.limit) && users?users[index] : ""; index++) {

      userArrayValue.push(users?users[index] : '');
      
    }

    return userArrayValue
  }
}

export default GetUsers
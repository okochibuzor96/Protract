
function GetUsers(props) {

  const userArrayValue = []

  for (let index = (props.page-1)*props.limit; index <(props.page * props.limit) && props.data?.data[index]; index++) {

    userArrayValue.push(props.data?.data[index]);
    
  }

  return userArrayValue
   
}

export default GetUsers
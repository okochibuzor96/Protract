
import routerMain from "./Routes/Routes";
import {RouterProvider} from 'react-router-dom'
import { DataProvider } from "./Pages/Context API/Create_Context";

function App() {

  // useEffect(() =>{
  //   localStorage.removeItem('Pwd')
  //   localStorage.removeItem('users')
    
    
  // },[])
  return (
    
    <DataProvider>
      <RouterProvider router={routerMain} />
    </DataProvider>
   
  );
}

export default App;

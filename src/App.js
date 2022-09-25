import Login from "./components/registration/login.jsx";
import Register from "./components/registration/register";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Desk2 from "./components/masterpage/desktop-pages/desktop-2/desk2.jsx";
import Desk1 from "./components/masterpage/desktop-1/desk1.jsx";
const App=()=> {


  return (
    <>
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Login />}/>
              <Route  path="/register" element={<Register/>}/>
              <Route path="/desk1" element={<Desk1/>}/>
              <Route path="/desk2" element={<Desk2 />}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

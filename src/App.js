import Login from "./components/registration/login.jsx";
import Register from "./components/registration/register";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import { useState } from "react";
import Home from "./components/masterpage/home.jsx";
import Form1 from "./components/formspage/form-1.jsx";
const App=()=> {
  return (
    <>
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Login />}/>
              <Route  path="/register" element={<Register/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/form-1" element={<Form1/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

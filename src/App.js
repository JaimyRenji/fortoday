import React from "react";
import Landing from "./pages/home/Landing";
import Login from "./pages/login/login";
import Dashboard from"./pages/dashboard/dashboard";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
      );
    }
export default App;

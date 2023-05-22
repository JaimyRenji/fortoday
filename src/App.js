import React from "react";
import Landing from "./pages/home/Landing";
import Login from "./pages/login/login";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
        
      );
    }
export default App;
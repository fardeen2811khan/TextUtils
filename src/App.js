//import logo from './logo.svg';
import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import './App.css';
import Navbar from "./Components/Navbar.js"
import TextArea from './Components/TextArea';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [label,setlabel]=useState('dark');
  const [alert,setAlert]=useState(null);
  function showAlert(message,type){
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode= ()=>{
    console.log('toggled')
    if(mode==='light'){
      setMode('dark');
      setlabel('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark Mode Enabled','success')
    }
    else{
      setMode('light');
      setlabel('dark');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode Enabled','success')
    }
  }
  
  
  return (
   <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} lable={label} key={new Date()} />
 <Alert alert={alert} mode={mode}></Alert>
 <Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
          
          
          
          <Route path='/' element={ <TextArea showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>} />
          <Route path='/about' element={<About></About>} />
            
          
        </Routes>
        </Router>
 
 {/* <About></About> */}
   </>
  );
 
}

export default App;

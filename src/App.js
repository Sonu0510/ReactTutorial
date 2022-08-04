
import './App.css';
import Navbar from './components/Navbar.js';
import Form from './components/Form.js';
import About from './components/About';
import React, {useState} from 'react';

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = ()=> {
    if(mode==="dark"){
      setMode("light");
    }else{
      setMode("dark");
    }
  }

  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <About/>
      <Form heading="Enter text here to modify"/>

    </>
  );
}

export default App;

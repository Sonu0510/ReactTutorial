
import './App.css';
import Navbar from './Navbar.js';
import Form from './Form.js';

function App() {
  return (
    <>
      <Navbar title="Navbar"/> 
      <div className="container my-3" >
      <Form heading="Enter text here to modify"/>
      </div>
     
    </>
  );
}

export default App;

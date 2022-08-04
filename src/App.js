
import './App.css';
import Navbar from './components/Navbar.js';
import Form from './components/Form.js';
import About from './components/About';

function App() {
  return (
    <>

      <Navbar title="TextUtils"/>
      <About/>
      <Form heading="Enter text here to modify"/>

    </>
  );
}

export default App;

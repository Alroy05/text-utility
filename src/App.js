import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","success");
      document.title = 'Dark mode enabled';
      setTimeout(() => {
        document.title = 'Text-Utility';
      }, 1000);
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'Light mode enabled';
      setTimeout(() => {
        document.title = 'Text-Utility';
      }, 1000);
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Alroy Pereira" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <div className="container">
          <TextForm heading="Enter the text to be analyzed" mode={mode} showAlert={showAlert}/>
        </div>
        <div className="container my-5">
          <About/>
        </div> */}

        <div className="container my-3">
          <Routes>   
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to be analyzed" mode={mode} showAlert={showAlert}/>} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;

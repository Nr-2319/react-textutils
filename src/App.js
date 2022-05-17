import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Whether dark is enabled or light
  const [alert, setAlert] = useState(null);

  const [colchange, setcolChange] = useState({
    color: '#000',
    background: '#fff'
  });


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const colorToggle1 = () => {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
    document.title = 'TextUtils | Light';
    setcolChange({
      color: '#000',
      backgroundColor: '#fff'
    })
  }
  const colorToggle2 = () => {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#b6b6b6';
    document.title = 'TextUtils | Dark';
    setcolChange({
      color: '#fff',
      backgroundColor: '#0e0e0e'
    })

  }
  const colorToggle3 = () => {
    document.body.style.backgroundColor = 'lightblue';
    document.body.style.color = '#000';
    document.title = 'TextUtils | Blue';
    setcolChange({
      color: '#fff',
      backgroundColor: '#10007A'
    })

  }
  const colorToggle4 = () => {
    document.body.style.backgroundColor = 'lightgreen';
    document.body.style.color = '#000';
    document.title = 'TextUtils | Green';
    setcolChange({
      color: '#f0f0f0',
      backgroundColor: '#3D7068'
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0a0a0a';
      showAlert("Dark mode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been Enabled", "success");
    }
  }
  return (
    <>
      {/* custom component */}
      {/* <Navbar title="TextUtils" />
      <Navbar /> */}

      {/* <Router> */}
      <Navbar title="TextUtils" abouttxt="About-TxtUtils" mode={mode} colchange={colchange} toggleMode={toggleMode} colorToggle1={colorToggle1} colorToggle2={colorToggle2} colorToggle3={colorToggle3} colorToggle4={colorToggle4} />
      <div className="container my-3" >
        {/* <Switch> */}
        {/* /users --> component 1 
                /users/about --> component2
              */}
        {/* <Route exact path="/about">
              <About />
            </Route> */}
        {/* <Route exact path="/"> */}

        <TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode} />

        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
      <Alert alert={alert} />
    </>
  );
}

export default App;
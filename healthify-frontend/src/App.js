import CovidTracker from './components/CovidTracker.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About.js';
import Login from './components/Login.js';
import { UserContext } from './components/UserContext.js';
import {useState} from 'react';
import PatientHome from './components/PatientHome.js';
import DoctorHome from './components/DoctorHome.js';
import RegistrationForm from './components/RegistrationForm';
import ConsultationForm from './components/ConsultationForm';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <div className="App">
      <Router>
      <Switch>
        <UserContext.Provider value = {{user, setUser}}>
          <Navbar></Navbar>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/patient" component={PatientHome}></Route>
          <Route exact path="/doctor" component={DoctorHome}></Route>
          <Route exact path="/consult" component={ConsultationForm}></Route>
          <Route exact path="/covid-tracker" component={CovidTracker}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={RegistrationForm}></Route>
        </UserContext.Provider>
      </Switch>
    </Router>

    </div>
  );
}

export default App;

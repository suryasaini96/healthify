import CovidTracker from './components/CovidTracker.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About.js';
import Login from './components/Login.js';
import { UserContext } from './components/UserContext.js';
import {useState} from 'react';
import PatientHome from './components/PatientHome.js';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
      <Switch>
        <UserContext.Provider value = {{user, setUser}}>
          <Navbar></Navbar>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/patient" component={PatientHome}></Route>
          {/* <Route exact path="/doctor" component={DoctorHome}></Route> */}
          <Route exact path="/covid-tracker" component={CovidTracker}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
          {/* <Route exact path="/register" component={Register}></Route> */}
        </UserContext.Provider>
      </Switch>
    </Router>

    </div>
  );
}

export default App;

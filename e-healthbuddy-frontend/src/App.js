import CovidTrackerComponent from './components/CovidTrackerComponent.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Container, NavDropdown,  Nav, Button } from 'react-bootstrap';
//import Body from './components/Body';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Home></Home>

      <Switch>
        <Route path="/covid-tracker" component={CovidTrackerComponent}></Route>
      </Switch>
    

      
    </Router>

    </div>
  );
}

export default App;

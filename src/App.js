import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import Logout from './components/Logout';
import Login from './components/Login';
import VitalForm from './components/VitalForm';
import VitalList from './components/VitalList';
import Main from './components/Main';
import Home from './components/Home';

class App extends Component {
  
  render(){
    return(
      <div className="lato-font">
        <Router>
        <Header />
          <Switch>
            <Route path="/login" exact component={Login} /> 
            <Route path="/" exact component={Main} /> 
            <Route path="/home/:name" exact component={Home} /> 
            <Route path="/vitalset/:id" exact component={VitalForm} />
            {/* <Route path="/vitalform" exact component={VitalForm} />  */}
            <Route path="/vitallist" exact component={VitalList} /> 
            <Route path="/logout" exact component={Logout} />
          </Switch> 
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;

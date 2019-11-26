import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Dashbord from './components/Dashbord';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Addproject from './components/projects/Addproject';
import UpdateProjects from './components/projects/UpdateProjects';
//import Createprojectbutton from './components/projects/Createprojectbutton';
import {Provider} from 'react-redux';
import store from'./store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div>
        <Header/>
       <Route path="/dashbord" component={Dashbord}/>   
       <Route path="/Addproject" component={Addproject}/>
       <Route path="/UpdateProjects/:id" component={UpdateProjects}/>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;

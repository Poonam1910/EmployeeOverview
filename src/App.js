import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {Route,Redirect, BrowserRouter as Router,Switch} from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import Employees from './components/employees';
import EmployeeDetail from './components/employeeDetail'
import NotFound from './components/notFound'
import ContactUs from './components/contactUs'
import ErrorBoundry from './components/errorBoundry';

function App() {
 
return (
    <React.Fragment>      
       <ErrorBoundry>
    <header className="header">
    <Navbar >
    <Navbar.Brand href="/" 
     style={{paddingRight: "200px"}} >Home</Navbar.Brand>
    <h1 style={{width:"100%"}}><b>Additiv Employee</b></h1>
   <Navbar.Brand href="/contact"   style={{paddingr: "600px"}}
    >@Contact Us</Navbar.Brand>     
  </Navbar>
     </header>
      <main className="App-container">
        <Router>
        <Switch>
            <Route path="/overview/:eName" component={EmployeeDetail} />            
            <Route path="/employees" component={Employees} /> 
            <Route path="/contact" component={ContactUs} />            
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/employees" />
            <Redirect to="/not-found" />
          </Switch>
        </Router>
        </main>    
        </ErrorBoundry>  
    </React.Fragment>
   
  );
}

export default App;

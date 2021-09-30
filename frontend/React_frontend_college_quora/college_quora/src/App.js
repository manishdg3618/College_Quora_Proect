import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import User from './components/ListUsers';
import RegisterUser from './components/RegisterUserComponent';
import Login from './components/UserLogin';
import Question from './components/Question';
import Answer from './components/Answer';
import AddNewQuestion from './components/AddNewQuestion';
import AddNewAnswer from './components/AddNewAnswer';
import NavBar from './Navbar/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div>
     
     <Router>
    
      <div className="container">
        <NavBar/>
         <br/>
       <Switch>   
           <Route path='/' exact component={Login}/>
           <Route path='/users' component={User}></Route>
           <Route path='/register' component={RegisterUser}></Route>
           <Route path='/questions' > <AddNewQuestion/><Question/>  </Route>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact}/>
           <Route path='/answers/:id' ><AddNewAnswer/><Answer/></Route>
          
        </Switch>
        <br/>
       <Footer/>
      </div>
     
     </Router>
    
    </div>
  );
}

export default App;

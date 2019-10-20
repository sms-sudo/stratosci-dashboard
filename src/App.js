import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard  from './Components/Dashboard';
import Main from './Components/Main';
import { Route, BrowserRouter, Switch} from 'react-router-dom';

document.body.style = "background: black;";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/dashboard' component={ Dashboard}/>
      </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
 
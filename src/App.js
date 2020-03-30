import React from 'react';
import {Route,HashRouter} from 'react-router-dom';
import Home from '@pages/Home';
import Login from '@pages/Login';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path='/' component={Home}></Route>
        <Route path='/login' component={Login}></Route>
      </HashRouter>
    </div>
  )
}

export default App;

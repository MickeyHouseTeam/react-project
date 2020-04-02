import React from 'react';
import {Route,HashRouter} from 'react-router-dom';
import Home from '@pages/Home';
import Login from '@pages/Login';
// import User from '@pages/User';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path='/' component={Home}></Route>
        <Route path='/login' component={Login}></Route>
        {/* <Route path='/user' component={User}></Route> */}
      </HashRouter>
    </div>
  )
}

export default App;

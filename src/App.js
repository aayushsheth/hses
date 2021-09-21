import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import { AuthProvider } from './components/contexts/AuthContext';
import ForgotPassword from './components/pages/ForgotPassword';

function App() {
  return (
    <>
      <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          {/* <Container
            className = 'd-flex align-items-center justify-content-center'
            style={{minHeight: "75vh"}}> 
          <div className = "w-100" style = {{maxWidth: "400px"}}> */}
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component = {ForgotPassword} />
          {/* </div>
          </Container>  */}
        </Switch>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
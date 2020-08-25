import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
//redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/Login' component={Login} />
        </Switch>
      </section>
    </Router>
  </Provider>
);
export default App;
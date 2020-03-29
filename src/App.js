import React, { Component } from 'react'
import { isAutenticate } from './Auth'

import { BrowserRouter  , Route , Redirect , Switch } from 'react-router-dom'

import Login from './Login'
import Salas from './Salas'
import Sala from './Sala'


const PrivateRoute = ({component:Component , ...rest}) => (
  <Route 
    {...rest}
    render={props => 
      isAutenticate() ? (
        <Component {...props} />
      )  :  (
        <Redirect to={{pathname:"/login" , state:{from:props.location} } } />
      ) 
    }
  />
);


const Routes = () => (

      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={()=> <h1>Bem vindo ao Jogo</h1>} />
          <PrivateRoute path='/salas' component={Salas} />
          <PrivateRoute  exact path='/sala/:id' component={Sala} />
        </Switch>
      </BrowserRouter>
    );

export default Routes;

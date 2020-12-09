import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Pricing from "./Pricing";
import Auth from "./Auth.js";
// import Auth from "./"
export default function Routes() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
       <Route render = {({ location }) => (
          <Switch location = { location }>
             <Route exact path = '/' component = { App } />
             <Route exact path = '/pricing/' component = { Pricing } />
             <Route exact path = '/auth/' component = { Auth } />
             <Route component={() => (<div>404 Not found </div>)} />
           </Switch>
        )} />
     </HashRouter>
  );
}
ReactDOM.render(<Routes />, document.getElementById('root'));

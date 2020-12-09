import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pricing from "./Pricing";

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/pricing" component={Pricing} />
        <Route component={() => (<div>404 Not found </div>)} />
      </Switch>
    </BrowserRouter>
  );
}
ReactDOM.render(<Routes />, document.getElementById('root'));

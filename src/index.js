import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import './styles/flexboxgrid.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <div class="row">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
        <App />
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

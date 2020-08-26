import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import './styles/flexboxgrid.min.css';
import Home from './Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-10">
        <Home />
      </div>
      <div class="col-lg-2"></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* eslint-disable import/default */

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadItems} from './actions/itemActions';
import {loadCart} from './actions/cartActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';
import './styles/index.css';

const store = configureStore();
store.dispatch(loadItems());
store.dispatch(loadCart());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
    document.getElementById('zuriStore')
);

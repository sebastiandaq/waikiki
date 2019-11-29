import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import About from './components/About';
import Gallery from './components/gallery/GalleryMain';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import NotFound from './components/home/NotFound';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/login/Logout';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/gallery" component={Gallery}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>
    <Route path="/*" component={NotFound}/>
  </Route>
);

const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, browserHistory } = require('react-router')

const production = process.env.NODE_ENV === "production";

const HomePage = require('./components/homepage.jsx');
const Volunteer = require('./components/volunteer.jsx');


ReactDOM.render((
  <Router history={browserHistory}>
    <Route name="home" path="/" component={HomePage}/>
    <Route name="volunteer" path="/volunteer" component={Volunteer}/>
    <Route name="default" path="*" component={HomePage}/>
  </Router>
), document.getElementById("content"))

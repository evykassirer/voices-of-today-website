const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, browserHistory } = require('react-router')

const production = process.env.NODE_ENV === "production";

const HomePage = require('./components/homepage.jsx');
const Volunteer = require('./components/volunteer.jsx');
const Schedule = require('./components/schedule.jsx');
const Schedule2017 = require('./components/schedule2017.jsx');
const Mandate = require('./components/mandate.jsx');
const Accessibility = require('./components/accessibility.jsx');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route name="home" path="/" component={HomePage}/>
    <Route name="volunteer" path="/volunteer" component={Volunteer}/>
    <Route name="schedule" path="/schedule" component={Schedule}/>
    <Route name="schedule2017" path="/schedule2017" component={Schedule2017}/>
    <Route name="mandate" path="/mandate" component={Mandate}/>
    <Route name="accessibility" path="/accessibility" component={Accessibility}/>

    <Route name="default" path="*" component={HomePage}/>
  </Router>
), document.getElementById("content"))

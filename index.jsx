const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, browserHistory } = require('react-router')

const production = process.env.NODE_ENV === "production";

const HomePage = require('./components/homepage.jsx');
const Volunteer = require('./components/volunteer.jsx');
// const Schedule = require('./components/schedule.jsx');
const Mandate = require('./components/mandate.jsx');
const Accessibility = require('./components/accessibility.jsx');

const Schedule2017 = require('./components/2017/schedule2017.jsx');

const HomePage2018 = require('./components/2018/homepage.jsx');
const Volunteer2018 = require('./components/2018/volunteer.jsx');
const Schedule2018 = require('./components/2018/schedule.jsx');
const Mandate2018 = require('./components/2018/mandate.jsx');
const Accessibility2018 = require('./components/2018/accessibility.jsx');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route name="home" path="/" component={HomePage}/>
    <Route name="volunteer" path="/volunteer" component={Volunteer}/>
    <Route name="mandate" path="/mandate" component={Mandate}/>
    <Route name="accessibility" path="/accessibility" component={Accessibility}/>

    <Route name="home2018" path="/2018" component={HomePage2018}/>
    <Route name="volunteer2018" path="/2018-volunteer" component={Volunteer2018}/>
    <Route name="schedule2018" path="/2018-schedule" component={Schedule2018}/>
    <Route name="mandate2018" path="/2018-mandate" component={Mandate2018}/>
    <Route name="accessibility2018" path="/2018-accessibility" component={Accessibility2018}/>

    <Route name="schedule2017" path="/schedule2017" component={Schedule2017}/>

    <Route name="default" path="*" component={HomePage}/>
  </Router>
), document.getElementById("content"))

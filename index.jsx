const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, browserHistory } = require('react-router')

const production = process.env.NODE_ENV === "production";

const HomePage = require('./components/homepage.jsx');
const About = require('./components/about.jsx');
const Shows = require('./components/shows.jsx');
const Youtube = require('./components/youtube.jsx');


ReactDOM.render((
  <Router history={browserHistory}>
    <Route name="home" path="/" component={HomePage}/>
    <Route name="about" path="/about" component={About}/>
    <Route name="shows" path="/shows" component={Shows}/>
    <Route name="youtube" path="/youtube" component={Youtube}/>
    <Route name="default" path="*" component={HomePage}/>
  </Router>
), document.getElementById("content"))

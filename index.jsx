const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, browserHistory } = require('react-router')

const production = process.env.NODE_ENV === "production";

const App = require('./app.jsx');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={App}/>
      <Route path="*" component={App}/>
    </Route>
    <Route path="*" component={App}/>
  </Router>
), document.getElementById("content"))

const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');

const weightAppReducers = require('./reducers/index.js');
const App = require('./app.jsx');

const store = createStore(weightAppReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);
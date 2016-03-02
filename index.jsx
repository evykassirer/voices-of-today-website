const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { compose, createStore } = require('redux');
const persistState = require('redux-localstorage');

const weightAppReducers = require('./reducers/index.js');
const App = require('./app.jsx');

const createPersistentStore = compose(
    persistState()
)(createStore);

const store = createPersistentStore(weightAppReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);
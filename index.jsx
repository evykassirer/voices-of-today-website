const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { compose, createStore } = require('redux');
const persistState = require('redux-localstorage');

const DevTools = require('./containers/DevTools.jsx');

const weightAppReducers = require('./reducers/index.js');
const App = require('./app.jsx');

const createPersistentStore = compose(
    persistState(),
    DevTools.instrument()
)(createStore);

const store = createPersistentStore(weightAppReducers);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('content')
);
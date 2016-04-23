const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { compose, createStore } = require('redux');

const DevTools = require('./containers/DevTools.jsx');

const production = process.env.NODE_ENV === "production";

const rootReducer = require('./reducers/index.js');
const App = require('./app.jsx');

const enhancer = !production ? compose(
    DevTools.instrument()
)(createStore) : compose()(createStore);

const store = enhancer(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            {false && !production && <DevTools/>}
        </div>
    </Provider>,
    document.getElementById('content')
);
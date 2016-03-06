const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { compose, createStore } = require('redux');
const persistState = require('redux-localstorage');
const mergePersistedState = persistState.mergePersistedState;

const DevTools = require('./containers/DevTools.jsx');

const rootReducer = require('./reducers/index.js');
const App = require('./app.jsx');

const reducer = compose(
  mergePersistedState()
)(rootReducer);

const adapter = (storage) => ({
  0: storage,

  put(key, value, callback) {
    try {
      callback(null, storage.setItem(key, JSON.stringify(value)));
    } catch (e) {
      callback(e);
    }
  },

  get(key, callback) {
    try {
      callback(null, JSON.parse(storage.getItem(key)));
    } catch (e) {
      callback(e);
    }
  },

  del(key, callback) {
    try {
      callback(null, storage.removeItem(key));
    } catch (e) {
      callback(e);
    }
  },
});

const storage = compose()(adapter(window.localStorage));

const createPersistentStore = compose(
    persistState.default(storage, 'weight-lifting-app'),
    DevTools.instrument()
)(createStore);

const store = createPersistentStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('content')
);
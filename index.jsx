const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { compose, createStore } = require('redux');
const persistState = require('redux-localstorage');
const mergePersistedState = persistState.mergePersistedState;
const Firebase = require('firebase');
const firebaseUrl = require('./firebaseUrl.js');

const DevTools = require('./containers/DevTools.jsx');

const rootReducer = require('./reducers/index.js');
const App = require('./app.jsx');

const reducer = compose(
  mergePersistedState()
)(rootReducer);

const ref = new Firebase(firebaseUrl);

const adapter = {
  put(key, value, callback) {
    try {
      //callback(null, window.localStorage.setItem(key, JSON.stringify(value)));
      // TODO: auth here, then set
      const user = ref.getAuth();
      const child = ref.child(user.uid);
      callback(null, child.set(value));
    } catch (e) {
      callback(null, e);
    }
  },

  get(key, callback) {
    try {
      //callback(null, JSON.parse(window.localStorage.getItem(key)));
      const user = ref.getAuth();
      if (user) {
        const child = ref.child(user.uid);
        console.log(child.once("value"))
        child.once("value").then((data) => {
          console.log(data)
          callback(null, {
            uid: user.uid,
            ...data,
          });
        }).catch((e) => {
          console.log(e)
        });
      }
      else {
        console.log('hi')
        return callback(null, {});
      }
    } catch (e) {
      callback(e);
    }
  },

  del(key, callback) {
    // ???
  },
};

const storage = compose()(adapter);

const createPersistentStore = compose(
    persistState.default(storage, 'exercise-tracker-app'),
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
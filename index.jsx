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
      const user = ref.getAuth();
      const child = ref.child("users").child(user.uid);
      child.update(value);
    } catch (e) {
      callback(e);
    }
  },

  get(key, callback) {
    try {
      //callback(null, JSON.parse(window.localStorage.getItem(key)));
      const user = ref.getAuth();
      if (user) {
        const child = ref.child("users").child(user.uid);
        child.once("value").then((data) => {
          const exercises = data.child("exercises").val();
          const entries = data.child("entries").val();
          callback(null, {
            user: user.uid,
            exercises: exercises || [],
            entries: entries || [],
          });
        }).catch((e) => {
          callback(e, {});
        });
      } else {
        callback(null, {});
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
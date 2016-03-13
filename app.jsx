const React = require('react');
const { connect } = require('react-redux');

const Firebase = require('firebase');
const firebaseUrl = require('./firebaseUrl.js');

const actions = require('./actions/index.js');
const TablePage = require('./components/TablePage.jsx');
const LoginPage = require('./components/LoginPage.jsx');

const ref = new Firebase(firebaseUrl);

const RP = React.PropTypes;

let App = React.createClass({
    propTypes: {
        user: RP.string,
        entries: RP.array,
        exercises: RP.array,

        login: RP.func,
        loadExercises: RP.func,
        loadEntries: RP.func,
    },
    componentDidMount: function() {
        this.loadUserData();
    },
    componentDidUpdate: function(newProps) {
        if (this.props.user !== newProps.user) {
            this.loadUserData();
        } else if (this.props.user) {
            this.saveUserData();
        }
    },

    loadUserData: function() {
        const user = ref.getAuth();
        if (!this.props.user && user) {
            this.props.login(user.uid);
        }
        if (user) {
            const child = ref.child("users").child(user.uid);
            child.once("value").then((data) => {
                const exercises = data.child("exercises").val();
                const entries = data.child("entries").val();
                this.props.loadData(entries, exercises);
            }).catch((e) => {
                console.log(e);
            });
        }
    },
    saveUserData: function() {
        if (this.props.exercises.length || this.props.entries.length) {
            const user = ref.getAuth();
            const child = ref.child("users").child(user.uid);
            child.update({
                exercises: this.props.exercises,
                entries: this.props.entries,
            });
        }
    },

    logout: function() {
        this.props.logout();
        ref.unauth();
    },

    render: function() {
        if (!this.props.user) {
            return <LoginPage
                login={this.props.login}
                logout={this.props.logout}
            />;
        }
        return <TablePage {...this.props} logout={this.logout} />;
    }
});

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadData: (entries, exercises) => {
            dispatch(actions.loadExercises(exercises));
            dispatch(actions.loadEntries(entries));
        },
        login: (userId) => {
            dispatch(actions.login(userId));
        },
        logout: () => {
            dispatch(actions.loadExercises(null));
            dispatch(actions.loadEntries(null));
            dispatch(actions.logout());
        },
        addEntry: () => {
            dispatch(actions.addEntry());
        },
        deleteEntry: (id) => {
            dispatch(actions.deleteEntry(id));
        },
        updateEntryDate: (id, date) => {
            dispatch(actions.updateEntryDate(id, date));
        },
        addExerciseToEntry: (entryId, exercise, weight, reps) => {
            dispatch(actions.addExerciseToEntry(
                entryId, exercise, weight, reps));
        },
        addExercise: (name) => {
            dispatch(actions.addExercise(name));
        },
        deleteExercise: (id) => {
            dispatch(actions.deleteExercise(id));
        },
        updateExercise: (id, date) => {
            dispatch(actions.updateExercise(id, date));
        },
    };
};

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

module.exports = App;
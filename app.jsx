const React = require('react');
const { connect } = require('react-redux');

const actions = require('./actions/index.js');
const TablePage = require('./components/TablePage.jsx');
const LoginPage = require('./components/LoginPage.jsx');

const RP = React.PropTypes;

let App = React.createClass({
    propTypes: {
        uid: RP.string,
        entries: RP.array,
        exercises: RP.array,
    },

    render: function() {
        if (!this.props.uid) {
            return <LoginPage login={this.props.login} />;
        }
        return <TablePage {...this.props} />;
    }
});

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (userId) => {
            dispatch(actions.login(userId));
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
        addExercise: () => {
            dispatch(actions.addExercise());
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
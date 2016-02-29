const React = require('react');
const { connect } = require('react-redux');

const { addEntry, addExercise } = require('./actions/index.js');
const TablePage = require('./components/TablePage.jsx');

const data = {
    exercises: [
        {
            name: "push ups",
        },
        {
            name: "sit ups",
        },
    ],
    entries: [
        {
            day: "feb 2",
            exercises: {
                "push ups": 2,
                "sit ups": 15
            },
        },
    ],
};

let App = React.createClass({
    propTypes: {
    },

    render: function() {
        return <TablePage
            entries={this.props.entries}
            exercises={this.props.exercises}
            addEntry={this.props.addEntry}
            addExercise={this.props.addExercise}
        />;
    }
});

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addEntry: () => {
            dispatch(addEntry());
        },
        addExercise: () => {
            dispatch(addExercise());
        },
    };
};

App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)

module.exports = App;
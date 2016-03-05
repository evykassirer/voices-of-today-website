const React = require('react');
const { connect } = require('react-redux');

const actions = require('./actions/index.js');
const TablePage = require('./components/TablePage.jsx');

let App = React.createClass({
    propTypes: {
    },

    render: function() {
        return <TablePage {...this.props} />;
    }
});

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addEntry: () => {
            dispatch(actions.addEntry());
        },
        deleteEntry: (id) => {
            dispatch(actions.deleteEntry(id));
        },
        addExercise: () => {
            dispatch(actions.addExercise());
        },
    };
};

App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)

module.exports = App;
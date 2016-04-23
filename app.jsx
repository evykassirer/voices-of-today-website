const React = require('react');
const { connect } = require('react-redux');

const actions = require('./actions/index.js');
const Page = require('./components/Page.jsx');

const RP = React.PropTypes;

let App = React.createClass({
    propTypes: {
    },
    render: function() {
        return <Page {...this.props} />;
    }
});

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

module.exports = App;
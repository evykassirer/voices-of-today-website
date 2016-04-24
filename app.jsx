const React = require('react');

const Page = require('./components/Page.jsx');

const RP = React.PropTypes;

let App = React.createClass({
    propTypes: {
    },
    render: function() {
        return <Page {...this.props} />;
    }
});

module.exports = App;
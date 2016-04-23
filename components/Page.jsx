const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');
const moment = require('moment');

const SS = require('../styles.js');

const Icon = require('./Icon.jsx');

const RP = React.PropTypes;

const Page = React.createClass({
    propTypes: {
    },

    render: function() {

        return (<div className={css(ST.page)}>
            hello world
        </div>);
    }
});

const ST = StyleSheet.create({
    page: {
        maxWidth: 800,
        margin: "0 auto",
    },
});

module.exports = Page;
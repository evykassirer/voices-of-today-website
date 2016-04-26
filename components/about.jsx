const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");


const About = React.createClass({
    render: function() {
        return <div className={css(ST.page)}>
            <Header page="about"/>
            <div className={css(ST.pageContent)}>
            and stuff and stuff and stuff about Kay
            </div>
        </div>;
    }
});

const ST = StyleSheet.create({
    bio : {
        lineHeight: 1.5,
    },
    page : {
        width: "100%",
    },
    pageContent: {
        paddingTop: "70px",
        width: "730px",
        margin: "0 auto",
    },
});

module.exports = About;
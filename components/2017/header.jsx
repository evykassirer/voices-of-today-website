const { StyleSheet, css } = require('../../lib/aphrodite.js');
const React = require('react');

const SS = require('../../styles.js');

const RP = React.PropTypes;

const Header = React.createClass({
    propTypes: {
        page: RP.string,
    },

    render: function() {
        return <div className={css(ST.headerBar)}>
            <a href="/" className={css(ST.text)}>VOICES OF TODAY</a>
        </div>;
    }
});

const ST = StyleSheet.create({
    headerBar: {
        backgroundColor: "#fdbc49",
        display: "inline-block",
        position: "fixed",
        textAlign: "center",
        width: "100%",
        zIndex: 99,
    },
    text: {
        color: "black",
        letterSpacing: "10px",
        display: "inline-block",
        width: "100%",
        fontSize: "20px",
        padding: "20px"
    }
});

module.exports = Header;

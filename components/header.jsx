const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = React.createClass({
    propTypes: {
        page: RP.string,
    },

    render: function() {
        return <div className={css(ST.headerBar)}>
            <a className={css(ST.name, ST.headerElement)} href="/">Kay Kassirer</a>
            <a className={css(ST.pageName,
                              ST.headerElement,
                              this.props.page === "home" && ST.selected)}
                href="/">Home</a>
            <a className={css(ST.pageName,
                              ST.headerElement,
                              this.props.page === "about" && ST.selected)}
                href="/about">About</a>
            <a className={css(ST.pageName,
                              ST.headerElement,
                              this.props.page === "shows" && ST.selected)} 
                href="/shows">Shows</a>
            <a className={css(ST.pageName,
                              ST.headerElement,
                              this.props.page === "youtube" && ST.selected)}
                href="/youtube">YouTube</a>
                <a className={css(ST.pageName,
                                  ST.headerElement,
                                  this.props.page === "merch" && ST.selected)}
                href="/">Merch</a>
        </div>;
    }
});

const ST = StyleSheet.create({
    headerBar: {
        backgroundColor: SS.colors.purple.light,
        display: "inline-block",
        position: "fixed",
        textAlign: "center",
        width: "100%",
    },
    headerElement: {
        color: SS.colors.grey.light,
        display: "inline-block",
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
        textDecoration: "none",
        verticalAlign: "middle",
    },
    name: {
        width: "200px",
        fontSize: "20px",
    },
    pageName: {
        width: "120px",
        ":hover": {
            backgroundColor: SS.colors.teal.light,
            color: SS.colors.grey.darkest,
        },
    },
    selected: {
        backgroundColor: SS.colors.teal.light,
        color: SS.colors.grey.darkest,
    },
});

module.exports = Header;

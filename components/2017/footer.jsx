const { StyleSheet, css } = require('../../lib/aphrodite.js');
const React = require('react');

const SS = require('../../styles.js');

const RP = React.PropTypes;

const Icon = React.createClass({
    propTypes: {
        imageName: RP.string,
        linkTo: RP.string,
    },
    render: function() {
        return <a href={this.props.linkTo} target="_blank">
            <img
                src={"images/" + this.props.imageName}
                className={css(ST.icon)}
            />
        </a>;
    },
});

const Header = React.createClass({
    propTypes: {
        page: RP.string,
    },

    render: function() {
        return <div className={css(ST.footerBar)}>
            <div className={css(ST.iconGroup)}>
                <Icon
                    imageName="facebook.png"
                    linkTo="https://www.facebook.com/VoicesofToday/"
                />
                <Icon
                    imageName="twitter.png"
                    linkTo="https://twitter.com/voices_of_today"
                />
                <Icon
                    imageName="email.png"
                    linkTo="malito:voicesoftodayFOC@gmail.com"
                />
            </div>
        </div>;
    }
});

const ST = StyleSheet.create({
    footerBar: {
        display: "inline-block",
        position: "fixed",
        textAlign: "center",
        width: "100%",
        left: "0px",
        bottom: "0px",
        backgroundColor: "#FBFBFB"
    },
    iconGroup: {
        textAlign: "center",
    },
    icon: {
        height: "50px",
        margin: "15px",
    },
});

module.exports = Header;

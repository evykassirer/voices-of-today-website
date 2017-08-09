const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');
const Router = require('react-router');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");
const Footer = require("./footer.jsx");


const Page = React.createClass({
    render: function() {
        return <div className={css(ST.page)}>
            <Header/>
            <div className={css(ST.navLinks)}>
                <div className={css(ST.aNavLink)}>
                    <a className={css(ST.smallButton)} href="/schedule">
                    Schedule</a>
                </div>
                <div className={css(ST.aNavLink)}>
                    <a className={css(ST.smallButton)} href="/volunteer">
                    Volunteer</a>
                </div>
                <div className={css(ST.aNavLink)}>
                    <a className={css(ST.smallButton)} href="https://igg.me/at/voices-of-today">
                    Donate</a>
                </div>
            </div>
            <div className={css(ST.pageContent)}>
                <div className={css(ST.logo)}>
                    <img src="images/logo_colour.jpg" className={css(ST.logoImage)}/>
                </div>
                <div className={css(ST.blurb)}>
                    <div>Voices of Today is a gathering of youth poets to learn
                    from each other, community leaders, and themselves.
                    It is scheduled to take place August 22-25 in Toronto,
                    Ontario.</div>
                    <br/>
                    <div> Voices of Today is a poetry festival run by youth for youth, with
                    workshops, open mics, and showcases, with the goal of
                    bringing together youth poets from all across Canada.
                    </div>
                    <br/>
                    <div>
                    Voices of Today is the newest addition to the festivals run
                    by <a href="https://spokenwordcanada.com/about/">Spoken Word
                    Canada</a>.
                    It is difficult for youth to go to the all ages poetry festival in
                    October due to school, and all ages festivals are often not very
                    supportive of all ages. Voices of Today was created to
                    prioritize and to support youth voices.
                    </div>

                    <a className={css(ST.button)}
                        href="https://igg.me/at/voices-of-today"
                    >
                    DONATE
                    </a>

                    <div className={css(ST.donors)}>
                        Thanks to our amazing shout-out level donors:
                    </div>
                    <div className={css(ST.donors)}>
                        Shane Kozycan, Evy Kassirer, and Jay Kassirer
                    </div>
                </div>
            </div>
            <Footer/>
        </div>;
    }
});

const ST = StyleSheet.create({
    donors: {
        textAlign: "center",
    },
    smallButton: {
        color: "#1dacee",
        backgroundColor: "indigo",//"#1dacee",
        padding: "20px",
        borderRadius: 5,
        fontSize: 18,
        textAlign: "center",
        ":hover": {
            color: "white"
        }
    },
    deadline: {
        marginTop: 30,
    },
    navLinks: {
        textAlign: "center",
        paddingTop: 80
    },
    aNavLink: {
        display: "inline-block",
        padding: 20,
    },
    button: {
        color: "white",
        backgroundColor: "#1dacee",
        display: "block",
        fontSize: 20,
        padding: "30px",
        margin: "30px auto",
        borderRadius: 5,
        width: 250,
        textAlign: "center",
        ":hover": {
            color: "black"
        }
    },
    logo : {
        padding: "10px",
        float: "left",
        '@media (max-width:915px)': {
            float: "none",
            padding: "10px",
            textAlign: "center",
        }
    },
    logoImage: {
        height: "20em",
        '@media (max-width:915px)': {
            height: "15em",
        }
    },
    blurb : {
        lineHeight: 1.5,
        fontSize: "17px",
        textAlign: "left",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "10px",
        paddingBottom: "40px",
        overflow: "hidden",
        maxWidth: "80%",
        '@media (max-width:915px)': {
            float: "center",
            fontSize: "17px",
            position: "relative",
            textAlign: "center",
            lineHeight: "150%",
            paddingLeft: "15%",
            paddingRight: "15%",
            maxWidth: "100%",
        }
    },
    page : {
        width: "100%",
    },
    pageContent: {
        padding: "20px 70px",
        width: "100%",
        margin: "0 auto",
        overflow: "hidden",
        display: "block",
        '@media (max-width:600px)': {
            paddingLeft: 35,
            paddingRight: 35
        }
    },
});

module.exports = Page;

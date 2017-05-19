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
            <div className={css(ST.pageContent)}>
                <div className={css(ST.logo)}>
                    <img src="images/logo_colour.jpg" className={css(ST.logoImage)}/>
                </div>
                <div className={css(ST.blurb)}>
                    <div>Voices of Today is a gathering of youth poets to learn
                    from each other, community leaders, and themselves.
                    It is scheduled to take place August 20-25 in Toronto,
                    Ontario.</div>
                    <br/>
                    <div>Voices of Today  is a five day festival with
                    workshops, open mics, and showcases, with the goal of
                    bringing together youth poets from all across Canada.
                    </div>

                    <a className={css(ST.button)}
                        href="https://docs.google.com/forms/d/e/1FAIpQLScntro-hYeCVzJNYad9_SX2jgM0cceDvm_pgGGYcOOGf1UFmQ/viewform?c=0&w=1&fbzx=7905549790133718000"
                    >
                    Team Registration
                    </a>

                    <div>Deadline for registration is June 20, 2017</div>
                    <br/>
                    <div>
                    <a href="https://goo.gl/forms/Ufrq9b3dZYUUS4Fa2">
                    Apply to perform or run workshops</a> throughout the festival!
                    Deadline is June 1 at midnight EST.
                    </div>
                    <br/>
                    <div>Volunteer at the festival! Learn more <a href="/volunteer">here</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>;
    }
});

const ST = StyleSheet.create({
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
        padding: "70px",
        paddingTop: "10%",
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

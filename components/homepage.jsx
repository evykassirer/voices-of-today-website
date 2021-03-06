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
                    <a className={css(ST.smallButton)} href="/mandate">
                    Mandate</a>
                </div>
                <div className={css(ST.aNavLink)}>
                    <a className={css(ST.smallButton)} href="/volunteer">
                    Volunteer</a>
                </div>
            </div>
            <div className={css(ST.pageContent)}>
                <div className={css(ST.logo)}>
                    <img src="images/logo.png" className={css(ST.logoImage)}/>
                </div>
                <div className={css(ST.blurb)}>
                    <div>
                    We're getting ready for our 2019 festival, and performer/facilitator applications are now open! We're running August 20th to 24th this year, at the Toronto Media Arts Centre.
                    <br/><br/>
                    This year we're focusing on multidisciplinary arts workshops and events that people can pop in and out of throughout the day, including things outside of the field of spoken word and poetry.
                    <br/><br/>
                    Applications are open until midnight EST on April 31st!
                    APPLY <a href="https://forms.gle/UdzgBhwQoEwss3uX7">HERE</a>
                    </div>
                    <br/>
                    <div>
                    You can read about accessibility at Voices of Today <a href="/accessibility">here</a>.
                    </div>


                    <br/>
                    <div className={css(ST.mandate)}>

                    <a className={css(ST.title)} href="/mandate">Mandate:</a>
                    <div>
                    (to read the full mandate, click the title of this section)
                    <br/><br/>
                    </div>
                    <ol className={css(ST.list)}>
                        <li>We seek consent first and always, and acknowledge that we are organising on stolen indigenous land.</li>
                        <li>We intentionally organize in ways that seek not to replicate existing state and social violence.</li>
                        <li>We strive to break down barriers to accessibility.</li>
                        <li>VoT brings together youth artists from across what is colonially-known-as Canada</li>
                        <li>Our festival is run by youth for youth.</li>
                        <li>We encourage all voices at our festival. Regardless of whether you vocalize; people are never ‘voiceless’.</li>
                    </ol>
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
    title: {
        fontSize: 30,
    },
    list: {
        listStyle: "decimal outside",
        marginLeft: 30,
        lineHeight: 1.5
    },
    mandate: {
        marginBottom: 30
    },
    smallButton: {
        color: "black",//"#1dacee",
        backgroundColor: "#fdbc49",//"indigo",//"#1dacee",
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
    ticketsLink: {
        display: "inline-block",
    },
    ticketsImage: {
        height: 61,
        marginBottom: -24,
        paddingLeft: 17
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
        '@media (max-width:1000px)': {
            float: "none",
            padding: "10px",
            textAlign: "center",
        }
    },
    logoImage: {
        height: "20em",
        '@media (max-width:1000px)': {
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
        '@media (max-width:1000px)': {
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

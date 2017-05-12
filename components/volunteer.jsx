const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");
const Footer = require("./footer.jsx");

const Volunteer = React.createClass({
    render: function() {
        return <div className={css(ST.page)}>
            <Header/>
            <div className={css(ST.pageContent)}>
                <div className={css(ST.title)}>
                Join Our Volunteer Team Today!</div>

                <p className={css(ST.paragraph)}>
                Voices of Today is a youth organized festival for young and
                emerging artists. A festival cannot run without the help of
                amazing volunteers like you. We are looking for volunteers who
                are also community members / community organizers.</p>

                <p className={css(ST.paragraph)}>
                Volunteer incentives! Volunteering will get you tickets to
                another show of your choice. Note that not all volunteer
                positions will allow you to watch the show you are volunteering at.
                </p>

                <a href="https://goo.gl/forms/1F45ZTTOMYkry1262"
                   className={css(ST.applyTitle)}>
                CLICK HERE TO APPLY
                </a>

                <p className={css(ST.deadlineParagraph)}>
                Deadline is June 1 at midnight EST.
                </p>

                <p className={css(ST.smallTitle)}>
                Choose From 7 Volunteer Position Responsibilities:
                </p>

                <p className={css(ST.listItem)}>Door/front of house</p>
                <p className={css(ST.paragraph)}>
                Responsible for counting the number of people coming into the
                venue for seating numbers, taking money and/or tickets,
                directing folks to where the show is happening</p>

                <p className={css(ST.listItem)}>Runner/errands</p>
                <p className={css(ST.paragraph)}>
                Responsible for checking in with venue captains and supporting
                them with whatever needs to be done. Would likely be beneficial
                if these folks had access to a vehicle
                </p>

                <p className={css(ST.listItem)}>
                Set up/take down (if necessary for venues)
                </p>
                <p className={css(ST.paragraph)}></p>

                <p className={css(ST.listItem)}>
                Timekeeping/Score keeping for bouts
                </p>
                <p className={css(ST.paragraph)}></p>

                <p className={css(ST.listItem)}>Host</p>
                <p className={css(ST.paragraph)}>
                Host the event. introduce the performing poets/ competitors. explain the competition or other relevant information about the show. do thank yous for sponsors and other organizations
                </p>

                <p className={css(ST.listItem)}>Bout Manager</p>
                <p className={css(ST.paragraph)}>
                Responsible for ensuring that all competing poets are accounted for
                </p>

                <p className={css(ST.listItem)}>Venue Capitan</p>
                <p className={css(ST.paragraph)}>
                Responsible to organize all events and persons at that venue. ensure that all performing poets are there as well as the volunteers necessary for that event
                </p>
            </div>
            <Footer/>
        </div>;
    }
});

const ST = StyleSheet.create({
    deadlineParagraph:  {
        lineHeight: "1.5",
        marginBottom: "30px",
        textAlign: "center"
    },
    paragraph: {
        lineHeight: "1.5",
        marginBottom: "30px"
    },
    title: {
        fontSize: "40px",
        padding: "20px 0px",
    },
    smallTitle: {
        fontSize: "25px",
        padding: "10px 0px",
    },
    applyTitle: {
        fontSize: "25px",
        padding: "20px 0 30px 0 ",
        textAlign: "center",
        width: "100%",
        display: "inline-block"
    },
    listItem: {
        fontWeight: "bold",
        margin: "10px 0px"
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

module.exports = Volunteer;

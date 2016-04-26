const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');
const moment = require('moment');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");

const Show = React.createClass({
    propTypes: {
        details: RP.shape({
            startDate: RP.any.required,
            endDate: RP.any,
            title: RP.string.required,
            location: RP.string.required,
            linkToEvent: RP.string.required,
            blurb: RP.string.required,
            image: RP.string.required,
            id: RP.number.required,
        })
    },
    render: function() {
        const details = this.props.details;
        return <div className={css(ST.oneShow)}>
            <a href={details.linkToEvent} className={css(ST.eventTitle)}>
                {details.title}
            </a>
            <div className={css(ST.timeAndPlace)}>
                {details.startDate.format("MMM D") + (details.endDate ?
                    (" to " + details.endDate.format("MMM D, YYYY")) :
                    details.startDate.format(", YYYY")) +
                " -- in " + details.location}
            </div>
            <image
                src={'images/shows/' + details.image}
                className={css(ST.eventIcon)}
            />
            <div className={css(ST.eventBlurb)}>{details.blurb}</div>
        </div>;
    },
})

const Shows = React.createClass({
    render: function() {
        const upcomingShows = LIST_OF_SHOWS.filter(function(e) {
            if (e.endDate) {
                return e.endDate.isSameOrAfter(moment());
            }
            return e.startDate.isSameOrAfter(moment());
        }).sort(function(a, b) {
            if (a.startDate.isBefore(b.startDate)) {
                return -1;
            } else if (b.startDate.isBefore(a.startDate)) {
                return 1;
            }
            return 0;
        });

        const pastShows = LIST_OF_SHOWS.filter(function(e) {
            if (e.endDate) {
                return e.endDate.isBefore(moment());
            }
            return e.startDate.isBefore(moment());
        }).sort(function(a, b) {
            if (a.startDate.isBefore(b.startDate)) {
                return 1;
            } else if (b.startDate.isBefore(a.startDate)) {
                return -1;
            }
            return 0;
        });
        console.log("SORTED", pastShows);

        return <div className={css(ST.page)}>
            <Header page="shows"/>
            <div className={css(ST.pageContent)}>
                <div className={css(ST.showsHeader)}>UPCOMING SHOWS</div>
                {upcomingShows.map(function(result) {
                    return <Show details={result} key={result.id}/>;
                })}
                <div className={css(ST.showsHeader)}>PAST SHOWS</div>
                {pastShows.map(function(result) {
                    return <Show details={result} key={result.id}/>;
                })}
            </div>
        </div>;
    }
});

const ST = StyleSheet.create({
    page : {
        width: "100%",
    },
    pageContent: {
        paddingTop: "70px",
        width: "730px",
        margin: "0 auto",
    },
    eventTitle: {
        fontSize: "25px",
    },
    eventBlurb: {
        display: "inline-block",
        fontSize: "16px",
        lineHeight: 1.5,
        margin: "30px 0px 0px 30px",
        verticalAlign: "top",
        width: "50%",
    },
    eventIcon: {
        maxWidth: "40%",
        margin: "20px 0px",

    },
    oneShow: {
        margin: "20px",
    },
    timeAndPlace: {
        marginTop: "10px",
    },
    showsHeader: {
        color: SS.colors.teal.light,
        fontSize: "30px",
        fontWeight: "bold",
        margin: "20px",
    },
});

const LIST_OF_SHOWS = [
    {
        startDate: moment("April 27 16", "MMMM DD YY"),
        endDate: moment("April 30 16", "MMMM DD YY"),
        title: "Canadian Individual Poetry Slam",
        location: "Vancouver",
        linkToEvent: "http://versesfestival.ca/about-verses/poetry-slam/",
        blurb: `I'm competing as one of 40 poets from across the nation 
            in a large-scale national event to determine the best slammer
            in Canada. It is sponsored by SpoCan (Spoken Word Canada),
            the governing body of Canadian poetry slam.`,
        image: 'CIPS2016.jpeg',
        id: 1,
    },
    {
        startDate: moment("March 28 16", "MMMM DD YY"),
        endDate: null,
        title: "Some event from the past",
        location: "some place",
        linkToEvent: "blah",
        blurb: `A long time ago, I performed at a thing. Then it was over.
            But it's still on my website!`,
        image: 'CIPS2016.jpeg',
        id: 2,
    },
    {
        startDate: moment().subtract(1, 'day'),
        endDate: moment().add(1, 'day'),
        title: "This is going on right now!",
        location: "some place",
        linkToEvent: "blah",
        blurb: `It started yesterday, but it's going until tomorrow`,
        image: 'CIPS2016.jpeg',
        id: 3,
    },
    {
        startDate: moment("Jan 27 14", "MMMM DD YY"),
        endDate: null,
        title: "Some event from the far past",
        location: "some place",
        linkToEvent: "blah",
        blurb: `A very long time ago, I performed at a thing. Then it was over.
            But it's still on my website!`,
        image: 'CIPS2016.jpeg',
        id: 4,
    },
    {
        startDate: moment("Jan 30 14", "MMMM DD YY"),
        endDate: moment("Feb 1 14", "MMMM DD YY"),
        title: "Some event from the slightly less far past",
        location: "some place",
        linkToEvent: "blah",
        blurb: `A very long time ago, I performed at a thing. Then it was over.
            But it's still on my website!`,
        image: 'CIPS2016.jpeg',
        id: 5,
    },
    {
        startDate: moment("Dec 27 16", "MMMM DD YY"),
        endDate: null,
        title: "Some event from the fuuuuture",
        location: "some place",
        linkToEvent: "blah",
        blurb: `Not the first thing on the upcoming list, but upcoming!`,
        image: 'CIPS2016.jpeg',
        id: 6,
    },
];

module.exports = Shows;
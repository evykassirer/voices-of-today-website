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
                When: {details.endDate ?
                    details.startDate.format("MMM D") + " to " +
                        details.endDate.format("MMM D, YYYY") :
                    details.startDate.format("MMM D, YYYY @ h:mm A")}
            </div>
            <div className={css(ST.timeAndPlace)}>
                Where: {details.location}
            </div>
            <div className={css(ST.blurbBox)}>
                <image
                    src={details.image.startsWith("http") ? details.image : 'images/shows/' + details.image}
                    className={css(ST.eventIcon)}
                />
                <span className={css(ST.eventBlurb)}>{details.blurb}</span>
            </div>
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
        console.log("upcoming!", upcomingShows);

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
    blurbBox: {
        marginTop: "20px",
    },
    eventBlurb: {
        display: "inline-block",
        fontSize: "16px",
        lineHeight: 1.5,
        marginLeft: "30px",
        verticalAlign: "middle",
        width: "50%",
    },
    eventIcon: {
        maxWidth: "40%",
        verticalAlign: "middle",
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
        blurb: `Kay competed as one of 40 poets from across the nation 
            in a large-scale national event to determine the best slammer
            in Canada. They performed on the finals stage and placed third!
            CIPS is sponsored by SpoCan (Spoken Word Canada),
            the governing body of Canadian poetry slam.`,
        image: 'CIPS2016.jpeg',
        id: 1,
    },
    {
        startDate: moment("June 9 16 9:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "KAY Kassirer, ALAIN Ginsberg, Basura BABY, Cecily Schuler, Eunb1!poetry @ Holy Underground",
        location: "Holy Underground, 2021 Maryland Ave, Baltimore, Maryland",
        linkToEvent: "https://www.facebook.com/events/1112998162100890/",
        blurb: `$5 show, Canada is real far away! 
            Doors at 9, show will start at 930! 
            Might do like one smoke break? but also show up on time because this is 
            Not To Be Missed. --- 
            ACCESSIBILITY NOTICE: There is a short set of stairs to enter the building,
            and chairs will be available once inside. If you need assistance with the stairs let Alain Ginsberg know and they will help you.`,
        image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/13254278_10154226035423817_3240621814156479362_n.jpg?oh=441f4b6bb9db64146459595e28b9f53c&oe=57CFA415',
        id: 2,
    },
    {
        startDate: moment("May 26 16 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Regina Word Up! Youth Stage Season Closer ft Kay Kassirer",
        location: "Creative City Centre, 1843 Hamilton St., Regina, Saskatchewan",
        linkToEvent: "https://www.facebook.com/events/189633021372214/",
        blurb: `From 5:00 pm - 6:00 pm participate in the workshop 
            "Spoken Word & Mental Health - Writing to survive" presented by feature
            artist Kay Kassirer. From 6:00 pm -7:30 pm we will eat food!  At 7:30
            doors open for Youth Stage which starts around 8.
            Admission is $5 + GST or PWYC (No one turned away.)

 `,
        image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/12662585_1048031975239653_2834278996702584976_n.jpg?oh=72b2ea416694d7b83258d2b89d83bde6&oe=57C9852D',
        id: 3,
    },
    {
        startDate: moment("May 29 16 7:30 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Tonight It's Poetry ft. Kay Kassirer",
        location: "The Woods Ale House - 148 2nd Ave North, Saskatoon, Saskatchewan",
        linkToEvent: "https://www.facebook.com/events/1528837284083651/",
        blurb: `Tonight it's Poetry is Saskatoon's only weekly poetry series. 
            This week featuring Kay! $5 // 19+`,
        image: 'https://scontent-yyz1-1.xx.fbcdn.net/t31.0-8/13483135_672549602897119_8573873878527753570_o.png',
        id: 4,
    },
    {
        startDate: moment("June 3 16", "MMMM DD YY"),
        endDate: moment("June 5 16", "MMMM DD YY"),
        title: "Capturing Fire - International Queer Poetry Summit & Slam",
        location: "Washington, DC",
        linkToEvent: "https://capfireslam.org/",
        blurb: `Capturing Fire is the only international Queer Spoken Word Slam.
            In its 6th year, The literary event showcases poets from North America
            and The United Kingdom. Kay placed second and was the Queer Cookie Slam Champion.`,
        image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/13322106_868846463221297_5038961779873045723_n.jpg?oh=e488fc1bc7111fb277680732facfc152&oe=57D42BAE',
        id: 5,
    },
    {
        startDate: moment("July 3 16 7:00 PM", "MMMM DD YY h:mm A"),
        endDate: null,
        title: "Throw Poetry Collective July Slam - Featuring Kay Kassirer",
        location: "Le Divan Orange - 4234 Boulevard Saint-Laurent, Montreal, Quebec",
        linkToEvent: "https://www.facebook.com/events/1750362858569324/",
        blurb: `Sign up for the open mic and competition starts at 7, 
            the show starts at 8. All competing poets must have two poems. 
            Entry is $5 for Students and members of the Quebec Writers Federation;
            $7 for everyone else. `,
        image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/1385869_647470928609196_882802125_n.jpg?oh=44be28c0b0f672315d3cf31f53aea664&oe=57CA006F',
        id: 6,
    },
    {
        startDate: moment("July 8 16 7:30", "MMMM DD YY  h:mm A"),
        endDate: null,
        title: "St. Catharines Poetry SLAM July ft Kay Kassirer",
        location: "Mahtay Café & Lounge - 241 St. Paul Street, Saint Catharines, Ontario",
        linkToEvent: "https://www.facebook.com/events/259608111062392/",
        blurb: `The St. Catharines POETRY SLAM is a monthly competitive spoken word event.
            Doors @ 7:30 pm | $5 | Mahtay Café & Lounge. Open mic @ 8pm followed by a
            2 round slam with Kay featuring between rounds. `,
        image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/13502054_10153781568777635_3597850132156999287_n.jpg?oh=ec444f3b299d91c54128f8bd655ba940&oe=57D2E345',
        id: 7,
    },
    {
        startDate: moment("July 10 16 6:30", "MMMM DD YY  h:mm A"),
        endDate: null,
        title: "Spoken Weird Open Mic & Poetry Slam",
        location: "45 Queen St, Oshawa, Ontario - in the auditorium of the Arts Resource ",
        linkToEvent: "https://www.facebook.com/events/247143885658618/",
        blurb: `Come on down to Spoken Weird Open Mic & Poetry Slam to help kick off the
            summer right. This month, featuring the fantastical Kay Kassirer! 
            -- Open mic / Slam starts @ 6:30pm / Cover: $6`,
        image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/13428623_1037278893007126_7971140840243997270_n.jpg?oh=a696728b7a0e74be67796f0c8e85bac5&oe=57D468FF',
        id: 8,
    },
];

module.exports = Shows;
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

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdC_eVeuTUMEievvU7qauSDsxZ8Y8kAtizsnvc4XtXW3TV15w/viewform?fbclid=IwAR0Okwfyn-kQMoEc6-ox_tIOICunImzNb6gz5fLH7blHhqEG9LiVfLQNjzg"
                   className={css(ST.applyTitle)}>
                CLICK HERE TO APPLY
                </a>
            </div>

            <p className={css(ST.smallTitle)}>
            Choose From 10 Volunteer Position Responsibilities:
            </p>

            <p className={css(ST.listItem)}>Door/front of house</p>
            <p className={css(ST.paragraph)}>
            Responsible for counting the number of people coming into the
            venue for seating numbers, taking money and/or tickets,
            directing folks to where the show is happening.
            You're the first face folks will see!
            </p>

            <p className={css(ST.listItem)}>Runner/errands</p>
            <p className={css(ST.paragraph)}>
            Responsible for checking in with venue captains and supporting
            them with whatever needs to be done. Would likely be beneficial
            if these folks had access to a vehicle.
            You're the one we go to when certain items are missing and need to
            be purchased, etc!
            </p>

            <p className={css(ST.listItem)}>
            Set up/take down (if necessary for venues)
            </p>
            <p className={css(ST.paragraph)}>
            Setting up the library for the performers at the beginning of the show and putting the library back the way it was at the end of the show. There are specific times we have to be out of the libraries after events to not get charged so you will check in with the venue captain and make sure that gets done. You'll ensure the mic stands are up, things are where they need to be, to the discretion of the venue captain!
            </p>

            <p className={css(ST.listItem)}>
            Timekeeping
            </p>
            <p className={css(ST.paragraph)}>
            Record the time of each poet during competition. Time starts for poets as soon as the engage the audience. Let the host know when/if a poet goes over their allotted time (typically three minutes with a 10 second grace period). Your venue captain will give you a whole run down of timing before the events, and there will always be 2 of you!
            </p>

            <p className={css(ST.listItem)}>
            Scorekeeping
            </p>
            <p className={css(ST.paragraph)}>
            Record the five scores from the judges that the host reads out. Do the math to calculate the score for each poet. Of the five scores remove the highest and lowest and add the middle three. You will have a sheet with the various penalties and how many points to deduct. For deductions that are not time related please consult with the slam master. Your venue captain will give you a whole run down of scorekeeping before the events, and there will always be 2 of you!
            </p>

            <p className={css(ST.listItem)}>Host</p>
            <p className={css(ST.paragraph)}>
            Host the event. Introduce the performing poets/ competitors. Explain the competition or other relevant information about the show. Keep the energy high and the crowd rowdy. Do thank yous for sponsors and other organizations. An outline of a host script will be provided to you, but please bring your energy to the stage to keep the crowd engaged!
            </p>

            <p className={css(ST.listItem)}>Bout Manager</p>
            <p className={css(ST.paragraph)}>
            Responsible for ensuring that all competing poets are accounted for. Responsible for getting poets to sign off on scores at the end of the evening. You'll be making sure things are running smoothly and folks are where they need to be!
            </p>

            <p className={css(ST.listItem)}>Venue Captain</p>
            <p className={css(ST.paragraph)}>
            Responsible to organize the event(s) and persons at that venue. Ensure that all performing poets are there as well as the volunteers necessary for that event (Robyn will also be around helping as volunteer coordinator). If you are venue captain at the last chance slam, a preliminary bout, or finals, you are also Bout Manager. You'll be making sure things are running smoothly and folks are where they need to be!
            </p>

            <p className={css(ST.listItem)}>Accessibility Point Person</p>
            <p className={css(ST.paragraph)}>
            Some of the venues are tricky to navigate in terms of accessibility. You will hang around the entrance to the venue and help assist folks who need to use accessible entrances. You are also on stand by for any other accessibility needs. You'll be the main go to in order to ensure folks are getting all the assistance people need!
            </p>

            <p className={css(ST.listItem)}>Check in Table</p>
            <p className={css(ST.paragraph)}>
            You will have a spreadsheet of all of the teams and as they come in to register will mark them as such, give them everything they need, and answer any questions they have. Festival organizers will be around to help. You'll be making sure teams are checking in and ready to bring their energy to the festival.
            </p>
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

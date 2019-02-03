// TODO update stuff so I don't literally repeat this file but I don't have time to debug this right now
// and wow is this repo really not using es6? mrah

const { StyleSheet, css } = require('../../lib/aphrodite.js');
const React = require('react');
const Tabletop = require('tabletop');

const SS = require('../../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");
const Footer = require("./footer.jsx");

const SHEETS_URL = "https://docs.google.com/spreadsheets/d/1YOlNoJt_H-7xmRoxEh9hJB14Jn4J-OxUhRJ5yqxXds0/pubhtml"

const Schedule2017 = React.createClass({
    getInitialState: function() {
        return {events: []};
    },

    callback(data) {
        this.setState({
            events: data
        });
    },

    componentWillMount() {
        Tabletop.init({
            key: SHEETS_URL,
            callback: this.callback.bind(this),
            simpleSheet: true
        });
    },

    renderDay(day, events) {
        const daysEvents = events.filter(event => event.Day === day);

        return <div className={css(ST.dayContainer)} id={ day }>
            <div className={css(ST.day)}>{ day }</div>
            {
                daysEvents.map(event => {
                    const descriptionLines = event.Description
                        ? event.Description.split('\n')
                        : [];

                    return <div className={css(ST.eventBlock)}>
                        <div className={css(ST.eventName)}>{ event.Event_Name }</div>
                        <div className={css(ST.time)}>{ event.Start_Time } - { event.End_Time }</div>
                        <div className={css(ST.location)}>Location: { event.Location } --- { event.Address }</div>
                        { event.Price && <div className={css(ST.price)}>{ event.Price }</div> }
                        { event.Tickets && <div className={css(ST.tickets)}>
                            <a href = {event.Tickets}>Buy tickets here</a>
                        </div> }
                        { event.Description && <div className={css(ST.description)}>
                            { descriptionLines.map(line => {
                                if (line == '') return <br/>;
                                return <div>{ line }</div>;
                            })}
                        </div> }
                    </div>;
                })
            }
        </div>;
    },

    render: function() {
        const events = this.state.events;

        const dates = new Set()
        events.forEach(event =>
            dates.add(event.Day)
        );

        const datesAlpha = [...dates].sort();

        return <div className={css(ST.page)}>
            <Header/>
            <div className={css(ST.pageContent)}>
                <div className={css(ST.title)}>
                    Schedule (2017, for reference)
                </div>
                { datesAlpha.length === 0 ?
                    <div className={css(ST.container)}> Loading... </div> :
                    <div>
                        <div className={css(ST.dateNav)}>
                            { datesAlpha.map(date => {
                                return <a href={`#${ date }`} className={css(ST.dateNavDate)}>
                                    { date }
                                </a>;
                            })}
                        </div>
                        <div className={css(ST.container)}>
                            { datesAlpha.map(date => {
                                return this.renderDay(date, events);
                            })}
                        </div>
                    </div>
                }
            </div>
            <Footer/>
        </div>;
    }
});


const ST = StyleSheet.create({
    day: {
        position: "sticky",
        top: 0,
        backgroundColor: "#fdbc49",//"#1dacee",
        color: "black", //"white",
        padding: 10,
        fontSize: 18,
        borderRadius: 5,
    },
    dayContainer: {
        marginBottom: 40
    },
    eventBlock: {
        margin: "20px 0 0 20px",
        fontSize: 15,
        lineHeight: 1.5
    },
    eventName: {
        fontSize: 22,
    },
    dateNav: {
        position: "fixed",
        top: 140
    },
    dateNavDate: {
        margin: 12
    },
    description: {
        marginTop: 10,
        marginBottom: 30,
        fontSize: 14
    },
    container: {
        position: "absolute",
        top: 180,
        left: 0,
        right: 0,
        bottom: 70,
        overflowY: "scroll",
        margin: "0 50px"
    },
    title: {
        fontSize: 40,
        position: "fixed",
        top: 80,
        left: 50
    },
    page : {
        width: "100%",
    },
    pageContent: {
        paddingTop: 70,
        width: 730,
        margin: "0 auto",
    },
});

module.exports = Schedule2017;

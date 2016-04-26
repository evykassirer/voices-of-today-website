const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');
const Router = require('react-router');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");

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
})

const Page = React.createClass({
    render: function() {
        return <div className={css(ST.page)}>
            <Header page="home"/>
            <div className={css(ST.pageContent)}>
            <img src="images/Kay-banner.jpg" className={css(ST.banner)}/>
            <div className={css(ST.iconGroup)}>
                <Icon 
                    imageName="facebook.png" 
                    linkTo="https://www.facebook.com/kay.kassirer"
                />
                <Icon 
                    imageName="twitter.png" 
                    linkTo="https://twitter.com/queerkay"
                />
                <Icon 
                    imageName="youtube.png" 
                    linkTo="http://youtube.com/queerkay"
                />
                <Icon 
                    imageName="email.png" 
                    linkTo="malito:kay.kassirer@gmail.com"
                />
            </div>
            <span className={css(ST.bio)}>
                Kay Kassirer is a Toronto based spoken word poet and activist.
                They use their poetry to tell stories, educate people, and
                heal. Kay can be found leading workshops, frequenting local
                poetry slams, or stuck in a tree. Kay was a member of the 2015
                Toronto Poetry Slam Team, and continues to travel
                internationally with their words. Kay has a chapbook published
                by We Flip Tables Press entitled Confessions of a Queer.
            </span>
            </div>
        </div>;
    }
});

const ST = StyleSheet.create({
    banner : {
        width: "100%",
    },
    bio : {
        lineHeight: 1.5,
    },
    page : {
        width: "100%",
    },
    pageContent: {
        paddingTop: "70px",
        width: "730px",
        margin: "0 auto",
    },
    iconGroup: {
        textAlign: "center",
    },
    icon: {
        height: "50px",
        margin: "15px",
    }
});

module.exports = Page;
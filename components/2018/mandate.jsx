const { StyleSheet, css } = require('../../lib/aphrodite.js');
const React = require('react');

const SS = require('../../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");
const Footer = require("./footer.jsx");

const Mandate = React.createClass({
    render: function() {
        return <div className={css(ST.page)}>
            <Header/>
            <div className={css(ST.pageContent)}>
                <div className={css(ST.title)}>
                Voice of Today Mandate
                </div>

                <p className={css(ST.smallTitle)}>
                The Voices of Today Festival operates with certain principles.
                These are our points of unity:
                </p>

                <p className={css(ST.listItem)}>
                Indigenous Sovereignty & Self-Determination:
                </p>
                <p className={css(ST.paragraph)}>
                As humans occupying space on colonized land, we acknowledge the first peoples of this land. Our festival takes place on the territory of the Huron Wendat, Petun, Haudenosaunee and Anishinaabe. We are on Treaty territory, specifically the <a href="http://www.ammsa.com/publications/windspeaker/wampum-holds-power-earliest-agreements">Dish with One Spoon Wampum</a> belt covenant between the Haudenosaunee and the Anishinaabe. Tkaronto is also governed by the <a href="https://guides.library.utoronto.ca/c.php?g=251707&p=1675204">Toronto Purchase</a> between the Mississaugas of New Credit and the federal government.  In our organizing, we seek to center decolonial discourse and actions. We recognize that reconciliation is more than a liberal buzzword - that it is an action and that for those of us who are not native to this land, it means that we have a responsibility and duty to support and get out of the way of the people who are.
                </p>

                <p className={css(ST.listItem)}>
                Anti-Oppression:
                </p>
                <p className={css(ST.paragraph)}>
                Our festival and organizers believe in creating a space that is consent focused, anti-racist, queer and trans inclusive, feminist, anti-appropriation, and anti-oppressive in general. We recognize that oppression is systemic and institutionalized, and we intentionally organize in ways that seek not to replicate existing state and social violence.
                <br/><br/>
                We acknowledge that the people taking part in Voices of Today are coming from totally different lives, and we strive to meet people where they are. We know that access to information is also a privilege, and this is part of why we also focus so much on education and run Anti-Oppression workshops as part of our festival.

                </p>

                <p className={css(ST.listItem)}>
                Accessibility:
                </p>
                <p className={css(ST.paragraph)}>
                We strive to make our festival as accessible as possible. Some features of this are:
                </p>

                <ul className={css(ST.list)}>
                    <li>Active Listeners present at all events</li>
                    <li>Affordable programming* </li>
                    <li>Confidentiality policy within workshops</li>
                    <li>Photo & Video policy that requires people to seek consent</li>
                    <li>Scent-free policy</li>
                    <li>Physical Accessibility Audits released for all venues in advance</li>
                    <li>Accessibility Liaisons present at all events</li>
                    <li>Anti-police**</li>
                </ul>
                <br/>
                <p className={css(ST.paragraph)}>
                We also contact all teams in advance to check in around food allergies and any additional supports that youth may need leading up to and throughout the festival.
                </p>

                <p className={css(ST.paragraph)}>
                *Our dream/intention is to make all Voices of Today events free, once funding allows. Until that happens, all of our events are pay-what-you-can with no one turned away for lack of funds.
                </p>

                <p className={css(ST.paragraph)}>
                **We know that police departments serve as the military arm of the white supremacist, predatory state. We know that policing as an institution was created to control and surveil black and brown communities. We know that the police disproportionately target the most vulnerable members of our society, particularly Black and Indigenous peoples, people of colour, the mentally ill, and the houseless/poor. We know that the police regularly murder black and brown people with impunity. We know that they don’t give a fuck about us. It is our position that police departments cannot be reformed. As part of creating a safe(r) environment for all people attending Voices of Today events, we commit to having alternative emergency plans, and aim to run conflict resolution/de-escalation trainings for all our volunteers.
                </p>

                <p className={css(ST.listItem)}>
                Community:
                </p>
                <p className={css(ST.paragraph)}>
                One of our major goals with running Voices of Today has been to bring youth from across this colonial state together. Many youth poets come from small communities, and Voices of Today is one of their only exposures to other youth poetry.
                </p>
                <p className={css(ST.paragraph)}>
                Although it is a competition, the spirit of Voices of Today is one of community. We believe that when we come together, we are all better for it. We seek to build a supportive national community that youth poets can turn to, year after year. A community that they can grow into and mold themselves over the years.
                </p>

                <p className={css(ST.listItem)}>
                Youth Leadership and Empowerment:
                </p>
                <p className={css(ST.paragraph)}>
                The Voices of Today festival is directed and organized by a committee of youth aged 25 and under. We seek external supports from people over the age of 25, but they are not a part of our decision making process. Voices of Today is a festival run FOR youth, BY youth.
                </p>
                <p className={css(ST.paragraph)}>
                We believe that youth aren’t just the future - we are the present. We believe that given the right supports, youth can accomplish anything. We work internally and externally to empower youth to be organizers with the festival and within their own communities.
                </p>
                <p className={css(ST.paragraph)}>
                Mentorship is one of our core principles. Resource sharing and education are key to our growth and success as a community and as a festival.
                </p>

                <p className={css(ST.listItem)}>
                Voice(s):
                </p>
                <p className={css(ST.paragraph)}>
                By voice, we mean a person’s style; the quality that makes their writing unique, which conveys their attitude, personality, and character.
                </p>
                <p className={css(ST.paragraph)}>
                We do not mean the spoken voice, which is only one form of communication <a href="https://wfdeaf.org/human-rights/crpd/sign-language/">among many</a>. We also challenge the notion that anyone needs to be given a voice, or that anyone anywhere can be a ‘voice for the voiceless’. Regardless of whether you vocalize, people are never ‘voiceless’. In reality, they are being overlooked and intentionally ignored. It is critical that we shut down all models that assume entire communities require individual saviours, as though they cannot and do not self-organize. Let us shift the blame from ‘voiceless’ communities to the elitist state and social apparatus that consistently denies them their own autonomy and blocks their liberation.
                </p>
            </div>
            <Footer/>
        </div>;
    }
});

const ST = StyleSheet.create({
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
    listItem: {
        fontWeight: "bold",
        margin: "10px 0px"
    },
    list: {
        listStyle: "disc outside",
        marginTop: -20,
        marginLeft: 30,
        lineHeight: 1.5
    },
    page : {
        width: "100%",
    },
    pageContent: {
        paddingTop: "70px",
        paddingBottom: "100px",
        width: "730px",
        margin: "0 auto",
    },
});

module.exports = Mandate;

const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');

const SS = require('../styles.js');

const RP = React.PropTypes;

const Header = require("./header.jsx");
const Footer = require("./footer.jsx");

const Accessibility = React.createClass({
    render: function() {
        return <div className={css(ST.page)}>
            <Header/>
            <div className={css(ST.pageContent)}>
                <div className={css(ST.title)}>
                Voices of Today Accessibility
                </div>

                <p className={css(ST.smallTitle)}>
                Voices of Today is committed to creating an environment that is accessible to all those wanting to take part in the festival’s events.
                <br/><br/>
                In reviewing the venue’s level of accessibility, we used <a href="https://goo.gl/AAbGUq">https://goo.gl/AAbGUq</a> to assist with this endeavour.

                </p>

                <p className={css(ST.listItem)}>
                Cost
                </p>
                <p className={css(ST.paragraph)}>
                All events associated with the festival are pay what you can (suggested donation of $10.00), meaning no one will be turned away due to lack of funds

                </p>

                <p className={css(ST.listItem)}>
                Parking
                </p>
                <p className={css(ST.paragraph)}>
                Most of the events for the festival will be taking place at the Palmerston location of the Toronto Public Library. The building is a five-minute walk from the Bathurst subway station. Parking is available across the street from the venue. It should be noted that there is only one accessible parking space and parking at the venue is paid.

                </p>

                <p className={css(ST.listItem)}>
                Entrance
                </p>
                <p className={css(ST.paragraph)}>
                The main entrance to the building is wheelchair accessible.  The door is automatic and can be opened by pushing the accessibility button. The theatre is in the basement of the library and is accessible via stairs and a key operated lift. An accessibility person will be on site throughout the festival to facilitate lift access. The entrance into the theatre is not automatic, meaning some folks may require assistance with the door to enter. We are looking into ramping the stage right now.
                </p>

                <p className={css(ST.listItem)}>
                Washrooms
                </p>
                <p className={css(ST.paragraph)}>
                There is one, single stall, non-gendered accessible washroom. The entrance is 33” wide, with no automatic door and lever door handles. And there is also one other, single stall, non-gendered washroom that is not mobility device accessible.
                </p>

                <p className={css(ST.listItem)}>
                Scents, etc.
                </p>
                <p className={css(ST.paragraph)}>
                The space will be scent free, and free of air fresheners, including in the bathrooms. There may be dander due to support animals, but animals are not normally in the space. There is not much room in the area surrounding the venue for a guide dog to be toileted. The venue is non-smoking. Alcohol and other substances are not offered and not allowed to be consumed in the space. This is an indoor venue so there is shelter available to all guests and participants. There is no quiet space available, and it is not possible to rent wheelchairs at the venue. The venue is welcoming to children, but there is no childcare available on site. For those who use stims they not be available at the space, but we encourage folks to bring their own.
                </p>
                <p className={css(ST.paragraph)}>
                Unfortunately we will not be having ASL interpreters for our events.
                </p>

                <p className={css(ST.listItem)}>
                Photos
                </p>
                <p className={css(ST.paragraph)}>
                We will be taking photos throughout the festival at various events. For those who would like to avoid having photos taken of them/posted, we will have beaded necklaces for anyone. That way if our photographer snaps a photo of you we will be able to delete it.
                </p>
                <p className={css(ST.paragraph)}>
                If you have any questions in regards to the accessibility of our festival or require follow up on an accessibility matter, please contact Katelyn or Kay, or email <a href="mailto:voicesoftodayFOC@gmail.com">voicesoftodayFOC@gmail.com</a>.
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

module.exports = Accessibility;

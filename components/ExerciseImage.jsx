const React = require('react');
const { css, StyleSheet } = require('../lib/aphrodite.js');


const ExerciseImage = React.createClass({
    propTypes: {
        type: React.PropTypes.string,
        height: React.PropTypes.number,
    },

    getInitialState: function() {
        return {
            animationFrame: 0,
        };
    },

    getDefaultProps: function() {
        return {
            type: 'overhead-delt',
            height: 60,
        };
    },

    startAnimation: function() {
        this.animationInterval = window.setInterval(() => {
            this.setState({
                animationFrame: this.state.animationFrame === 0 ? 1 : 0,
            });
        }, 500);
    },
    stopAnimation: function() {
        window.clearInterval(this.animationInterval);
    },

    renderExerciseImage: function(ex) {

        const exerciseImages = {
            'overhead-delt': [
                <g>
                    <path d="M69.7,23.8v13.3H31.8l0-13.3l-5,0l0,15.8c0,0.7,0.3,1.3,0.7,1.8c0.5,0.5,1.1,0.7,1.8,0.7h12.3V60h18.2V42.1h12.3
                        c1.4,0,2.5-1.1,2.5-2.5V23.8H69.7z"/>
                    <circle cx="50.7" cy="26.9" r="9.5"/>
                    <path fill="#999999" d="M79.1,17.7h-1.4c-0.8,0-1.5,0.7-1.5,1.5v1.7h-8.1v-1.7c0-0.8-0.7-1.5-1.5-1.5h-1.4c-0.8,0-1.5,0.7-1.5,1.5
                        v7.7c0,0.8,0.7,1.5,1.5,1.5h1.4c0.8,0,1.5-0.7,1.5-1.5v-1.7h8.1v1.7c0,0.8,0.7,1.5,1.5,1.5h1.4c0.8,0,1.5-0.7,1.5-1.5v-7.7
                        C80.6,18.4,79.9,17.7,79.1,17.7z"/>
                    <path fill="#999999" d="M36.3,17.7h-1.4c-0.8,0-1.5,0.7-1.5,1.5v1.7h-8.1v-1.7c0-0.8-0.7-1.5-1.5-1.5h-1.4c-0.8,0-1.5,0.7-1.5,1.5
                        v7.7c0,0.8,0.7,1.5,1.5,1.5h1.4c0.8,0,1.5-0.7,1.5-1.5v-1.7h8.1v1.7c0,0.8,0.7,1.5,1.5,1.5h1.4c0.8,0,1.5-0.7,1.5-1.5v-7.7
                        C37.8,18.4,37.1,17.7,36.3,17.7z"/>
                </g>,
                <g>
                    <path d="M63.7,11.8v15.1l-6.3,10.2H44.1l-6.3-10.2l0-15.1l-5,0l0,15.8c0,0.5,0.1,0.9,0.4,1.3l7.4,12c0.2,0.4,0.6,0.7,1,0.9V60h18.2
                        V41.8c0.4-0.2,0.8-0.5,1-0.9l7.4-12c0.2-0.4,0.4-0.9,0.4-1.3V11.8H63.7z"/>
                    <circle cx="50.7" cy="26.9" r="9.5"/>
                    <path fill="#999999" d="M73.1,16.4h-1.4c-0.8,0-1.5-0.7-1.5-1.5v-1.7h-8.1v1.7c0,0.8-0.7,1.5-1.5,1.5h-1.4c-0.8,0-1.5-0.7-1.5-1.5
                        V7.2c0-0.8,0.7-1.5,1.5-1.5h1.4c0.8,0,1.5,0.7,1.5,1.5v1.7h8.1V7.2c0-0.8,0.7-1.5,1.5-1.5h1.4c0.8,0,1.5,0.7,1.5,1.5v7.7
                        C74.6,15.7,73.9,16.4,73.1,16.4z"/>
                    <path fill="#999999" d="M42.3,16.4h-1.4c-0.8,0-1.5-0.7-1.5-1.5v-1.7h-8.1v1.7c0,0.8-0.7,1.5-1.5,1.5h-1.4c-0.8,0-1.5-0.7-1.5-1.5
                        V7.2c0-0.8,0.7-1.5,1.5-1.5h1.4c0.8,0,1.5,0.7,1.5,1.5v1.7h8.1V7.2c0-0.8,0.7-1.5,1.5-1.5h1.4c0.8,0,1.5,0.7,1.5,1.5v7.7
                        C43.8,15.7,43.1,16.4,42.3,16.4z"/>
                </g>,
                ],

            };

        return exerciseImages[ex] && exerciseImages[ex][this.state.animationFrame];
    },
    render: function() {
        const style = {
            height: this.props.height,
            width: this.props.height * 100 / 60,
        };

        return (
            <div
                onMouseEnter={this.startAnimation}
                onMouseLeave={this.stopAnimation}
                className={css(ST.wrapper)}
                style={style}
            >
                <svg style={style}>
                    {this.renderExerciseImage(this.props.type)}
                </svg>
            </div>
        );
    }
});

const ST = StyleSheet.create({
    wrapper: {
        background: "#ddd",
    },
});

module.exports = ExerciseImage;
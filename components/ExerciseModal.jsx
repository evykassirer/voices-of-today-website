const React = require('react');
const { css, StyleSheet } = require('../lib/aphrodite.js');

const ExerciseImage = require('./ExerciseImage.jsx');
const SS = require('../styles.js');

const RP = React.PropTypes;

const ExerciseModal = React.createClass({
    propTypes: {
        close: RP.func,
        addExercise: RP.func,
    },
    render: function() {
        const exercises = ExerciseImage.exerciseOptions();
        return <div className={css(ST.overlay)} onClick={this.props.close}>
            <div className={css(ST.modal)}>
                <button className={css(ST.close)} onClick={this.props.close}>
                    &times;
                </button>
                <h2 className={css(ST.heading)}>
                    Choose an exercise to add
                </h2>
                <div className={css(ST.exercises)}>
                    {exercises.map((exercise) => {
                        return <div
                            key={exercise}
                            className={css(ST.exercise)}
                            onClick={() => {
                                this.props.addExercise(exercise);
                            }}
                        >
                            <ExerciseImage type={exercise} />
                        </div>;
                    })}
                </div>
                <div
                    className={css(ST.button, ST.newExercise)}
                    onClick={() => {
                        this.props.addExercise("New Exercise");
                    }}
                >
                    New Exercise
                </div>
            </div>
        </div>;
    },
});

const ST = StyleSheet.create({
    overlay: {
        alignItems: "center",
        background: "rgba(200, 200, 200, 0.8)",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        left: 0,
        overflowY: "auto",
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 10,
    },
    heading: {
        fontSize: 20,
        textAlign: "center",
    },
    modal: {
        background: "#fff",
        borderRadius: 4,
        flex: 1,
        maxWidth: 400,
        padding: 40,
        position: "relative",
    },
    close: {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 30,
        lineHeight: "24px",
        opacity: 0.3,
        position: "absolute",
        right: 10,
        top: 10,
        ":hover": {
            opacity: 1,
        }
    },

    exercises: {
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
        marginTop: 20,
    },
    exercise: {
        cursor: "pointer",
        opacity: 0.6,
        padding: 2,
        ":hover": {
            opacity: 1,
        },
    },

    button: SS.button,
    newExercise: {
        marginTop: 10,
    },
});

module.exports = ExerciseModal;

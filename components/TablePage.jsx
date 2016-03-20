const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');
const moment = require('moment');

const SS = require('../styles.js');

const ExerciseImage = require('./ExerciseImage.jsx');
const ExerciseModal = require('./ExerciseModal.jsx');
const Icon = require('./Icon.jsx');

const RP = React.PropTypes;

const ClickToEdit = React.createClass({
    propTypes: {
        text: RP.string,
        placeholder: RP.string,
        textClass: RP.object,
        inputClass: RP.object,
    },
    getDefaultProps: function() {
        return {
            selectAllOnClick: false,
        };
    },
    getInitialState: function() {
        return {
            isEditing: false,
            text: this.props.text || "",
        };
    },
    setEditing: function() {
        this.setState({
            isEditing: true,
        });
    },
    handleOnChange: function(e) {
        this.setState({
            text: e.target.value,
        });
    },
    handleOnBlur: function(e) {
        this.props.onSubmit(this.state.text);
        this.setState({
            isEditing: false,
        });
    },
    handleOnFocus: function(e) {
        const textLength = this.state.text.length;
        if (this.props.selectAllOnClick) {
            e.target.setSelectionRange(0, textLength);
        } else {
            e.target.setSelectionRange(textLength, textLength);
        }
    },
    render: function() {
        const {
            inputClass,
            placeholder,
            textClass,
        } = this.props;
        const {
            text
        } = this.state;
        if (this.state.isEditing) {
            return <form
                onSubmit={(e) => {
                    e.preventDefault();
                    this.handleOnBlur();
                }}
            >
                <input
                    className={css(inputClass, ST.input)}
                    value={text}
                    placeholder={placeholder}
                    onChange={this.handleOnChange}
                    onBlur={this.handleOnBlur}
                    autoFocus={true}
                    onFocus={this.handleOnFocus}
                />
            </form>;
        }
        return <span
            className={css(ST.editableText, !text && ST.placeholderText)}
            onClick={this.setEditing}
            onFocus={this.setEditing}
            tabIndex={0}
        >
            {text || placeholder}
        </span>;
    },
});

const TablePage = React.createClass({
    propTypes: {
        entries: RP.arrayOf(RP.shape({
            date: RP.number,
            exercises: RP.object,
            id: RP.number,
        })),
        exercises:  RP.arrayOf(RP.shape({
            name: RP.string,
            id: RP.number,
        })),
        addExercise: RP.func,
        addExerciseToEntry: RP.func,
        addEntry: RP.func,
        deleteEntry: RP.func,
        deleteExercise: RP.func,
        updateEntryDate: RP.func,
        updateExercise: RP.func,
    },

    getInitialState: function() {
        return {
            showExerciseModal: false,
        };
    },
    addExercise: function(exercise) {
        this.props.addExercise(exercise);
        this.hideExerciseModal();
    },

    showExerciseModal: function() {
        this.setState({
            showExerciseModal: true,
        });
    },
    hideExerciseModal: function() {
        this.setState({
            showExerciseModal: false,
        });
    },

    render: function() {
        const {
            updateEntryDate,
            updateExercise,
            addExerciseToEntry,
        } = this.props;

        const entries = this.props.entries.filter((e) => {
            return !e.deleted;
        });
        entries.sort((entry1, entry2) => {
            // show newest dates on the left/first
            return entry1.date < entry2.date;
        });

        const exercises = this.props.exercises.filter((e) => {
            return !e.deleted;
        });

        return (<div className={css(ST.page)}>
            {this.state.showExerciseModal && <ExerciseModal
                close={this.hideExerciseModal}
                addExercise={this.addExercise}
            />}
            <div>
                <button
                    className={css(ST.button, ST.buttonLight)}
                    onClick={() => {
                        this.props.logout()
                    }}
                >
                    Logout
                </button>
            </div>

            <h1 className={css(ST.title)}>Weight Lifting Tracker</h1>

            <div className={css(ST.table)}>
                <div className={css(ST.column, ST.exerciseColumn)}>
                    <div
                        className={css(ST.cell)}
                    >
                    </div>
                    {exercises && exercises.map((exercise, idx) => {
                        return <div
                            key={exercise.id}
                            className={css(ST.cell, ST.exerciseCell)}
                        >
                            <ExerciseImage type={exercise.name} />
                            <ClickToEdit
                                text={exercise.name}
                                onSubmit={(newName) => {
                                    updateExercise(
                                        exercise.id,
                                        newName
                                    );
                                }}
                            />
                            <button
                                className={css(
                                    ST.deleteButton,
                                    ST.exerciseDeleteButton
                                )}
                                onClick={() => {
                                    this.props.deleteExercise(exercise.id);
                                }}
                            >&times;</button>
                        </div>;
                    })}
                    <div
                        className={css(ST.cell)}
                    >
                        <button
                            onClick={this.showExerciseModal}
                            className={css(ST.button, ST.buttonLight)}
                        >
                            Add Exercise
                        </button>
                    </div>
                </div>
                <div className={css(ST.results)}>
                    <div className={css(ST.resultsInner)}>
                        <div className={css(ST.column, ST.addEntryColumn)}>
                            <div
                                className={css(ST.cell)}
                            >
                                <button
                                    className={css(ST.button, ST.plusButton)}
                                    onClick={() => {
                                        this.props.addEntry();
                                    }}
                                >
                                    <Icon
                                        type="plus"
                                        size={15}
                                        color="#fff"
                                    />
                                </button>
                            </div>
                        </div>
                        {entries && entries.map((entry, entryIdx) => {
                            return <div
                                className={css(ST.column)}
                                key={entry.id}
                            >
                                <div
                                    className={css(ST.cell)}
                                >
                                    <ClickToEdit
                                        inputClass={ST.dateInput}
                                        text={
                                            moment(entry.date).format('MMM Do')
                                        }
                                        selectAllOnClick={true}
                                        onSubmit={(newDate) => {
                                            updateEntryDate(
                                                entry.id,
                                                moment(newDate, "MMM Do")
                                                    .valueOf(),
                                                null
                                            );
                                        }}
                                    />
                                </div>
                                {exercises && exercises.map(
                                    (exercise, exerciseIdx) => {
                                    const ex = entry.exercises &&
                                        entry.exercises[exercise.exId];
                                    return <div
                                        className={css(ST.cell, ST.dataCell)}
                                        key={exercise.id}
                                    >
                                        <div className={css(ST.weight)}>
                                            <ClickToEdit
                                                text={ex && ex.weight}
                                                placeholder="(weight)"
                                                onSubmit={(weight) => {
                                                    addExerciseToEntry(
                                                        entry.id,
                                                        exercise.exId,
                                                        weight || null,
                                                        ex ? ex.reps : null
                                                    )
                                                }}
                                            />
                                        </div>
                                        <div className={css(ST.reps)}>
                                            <ClickToEdit
                                                text={ex && ex.reps}
                                                placeholder={"(reps)"}
                                                onSubmit={(reps) => {
                                                    addExerciseToEntry(
                                                        entry.id,
                                                        exercise.exId,
                                                        ex ? ex.weight : null,
                                                        reps || null
                                                    )
                                                }}
                                            />
                                        </div>
                                    </div>;
                                })}
                                <button
                                    className={css(ST.deleteButton)}
                                    onClick={() => {
                                        this.props.deleteEntry(entry.id);
                                    }}
                                >&times; Delete Entry</button>
                            </div>;
                        })}
                    </div>
                </div>
            </div>
        </div>);
    }
});

const ST = StyleSheet.create({
    page: {
        maxWidth: 800,
        margin: "0 auto",
        padding: 20,
    },
    title: {
        fontSize: 30,
        marginTop: 60,
        marginBottom: 20,
        textAlign: "center",
    },
    table: {
        display: "flex",
        alignItems: "flex-start",
    },
    results: {
        display: "flex",
        flex: 1,
        alignSelf: "stretch",
        overflowX: "auto",
    },
    resultsInner: {
        display: "flex",
    },
    column: {
        borderRight: "1px solid #ddd",
        width: 120,
    },
    addEntryColumn: {
        width: 60,
    },
    exerciseColumn: {
        width: 160,
    },
    exerciseCell: {
        flexDirection: "column",
        position: "relative",
    },
    cell: {
        height: 100,
        padding: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    dataCell: {
        flexDirection: "column",
    },

    form: {

    },
    editableText: {
        display: "inline-block",
        padding: 4,
        textAlign: "center",
    },
    placeholderText: {
        color: "#999",
    },
    input: {
        font: "inherit",
        fontSize: "inherit",
        textAlign: "center",
        width: "100%",
    },

    deleteButton: {
        background: "none",
        border: "none",
        color: "#999",
        cursor: "pointer",
        fontSize: 16,
    },
    exerciseDeleteButton: {
        position: "absolute",
        top: 2,
        right: 2,
    },

    button: {
        background: SS.colors.green.light,
        border: `1px solid ${SS.colors.green.dark}`,
        borderRadius: 50,
        color: "#fff",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: 14,
        padding: "10px 20px",
        ":hover": {
            background: SS.colors.green.dark,
        },
        ":focus": {
            background: SS.colors.green.dark,
            outline: "none",
        },
        ":active": {
            background: SS.colors.green.dark,
        },
    },
    buttonLight: {
        background: "#fff",
        border: `1px solid ${SS.colors.green.dark}`,
        color: SS.colors.green.dark,
        ":hover": {
            background: "#eee",
        },
        ":focus": {
            background: "#eee",
            outline: "none",
        },
        ":active": {
            background: "#eee",
        },
    },

    plusButton: {
        height: 29 ,
        lineHeight: 0,
        width: 29,
        padding: 0,
        display: "flex",
        justifyContent: "center",
    },
});

module.exports = TablePage;
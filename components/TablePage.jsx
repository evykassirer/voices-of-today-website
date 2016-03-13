const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');
const moment = require('moment');


const RP = React.PropTypes;

const ClickToEdit = React.createClass({
    propTypes: {
        text: RP.string,
        placeholder: RP.string,
        textClass: RP.object,
        inputClass: RP.object,
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
        e.target.setSelectionRange(0, this.state.text.length);
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

    render: function() {
        const {
            exercises,
            updateEntryDate,
            updateExercise,
            addExerciseToEntry,
        } = this.props;

        const entries = this.props.entries;
        entries.sort((entry1, entry2) => {
            // show newest dates on the left/first
            return entry1.date < entry2.date;
        });

        return (<div className={css(ST.page)}>
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
                            className={css(ST.cell)}
                        >
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
                                className={css(ST.deleteButton)}
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
                            onClick={() => {
                                this.props.addExercise();
                            }}
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
                                    onClick={() => {
                                        this.props.addEntry();
                                    }}
                                >Add Entry</button>
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
        width: 80,
    },
    exerciseColumn: {
        width: 160,
    },
    exerciseCell: {
    },
    cell: {
        height: 60,
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
});

module.exports = TablePage;
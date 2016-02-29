const { StyleSheet, css } = require('../lib/aphrodite.js');
const React = require('react');
const moment = require('moment');

const TablePage = React.createClass({

    render: function() {
        const {
            entries,
            exercises,
        } = this.props;

        return (<div className={css(ST.page)}>
            <h1 className={css(ST.title)}>Weight Lifting Tracker</h1>

            <div className={css(ST.table)}>
                <div className={css(ST.column)}>
                    <div
                        className={css(ST.cell)}
                    >
                    </div>
                    {exercises && exercises.map((exercise, idx) => {
                        return <div
                            key={idx}
                            className={css(ST.cell, ST.exerciseCell)}
                        >
                            {exercise.name}
                        </div>;
                    })}
                </div>
                <div className={css(ST.results)}>
                    {entries && entries.map((entry, entryIdx) => {
                        return <div
                            className={css(ST.column)}
                            key={entryIdx}
                        >
                            <div
                                className={css(ST.cell)}
                            >
                                {moment(entry.date).format('MMM Do')}
                            </div>
                            {exercises && exercises.map(
                                (exercise, exerciseIdx) => {
                                const ex = entry.exercises[exercise.name];
                                return ex && <div
                                    className={css(ST.cell)}
                                    key={exerciseIdx}
                                >
                                    {ex}
                                </div>;
                            })}
                        </div>;
                    })}
                </div>
                <button
                    onClick={() => {
                        this.props.addEntry();
                    }}
                >Add Entry</button>
                <button
                    onClick={() => {
                        this.props.addExercise();
                    }}
                >Add Exercise</button>
            </div>
        </div>);
    }
});

const ST = StyleSheet.create({
    page: {
        maxWidth: 1000,
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
    },
    column: {
        borderRight: "1px solid #ddd",
    },
    exerciseCell: {
        background: "#fafafa",
    },
    cell: {
        height: 40,
        padding: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});

module.exports = TablePage;
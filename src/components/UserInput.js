import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { updateUserInput } from '../index.js';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
    form: {
        height: '80vh',
    },
    input: {
        width: '20vw',
    },
    formContainer: {
        padding: '2rem',
        width: '25vw',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px;',
    },
    title: {
        paddingBottom: '1rem',
        fontWeight: 'bold',
    },
});

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            // prefix="$"
        />
    );
}

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAge: this.props.currentAge,
            retiringAge: this.props.retiringAge,
            initialAmount: this.props.initialAmount,
            monthlyContribution: this.props.monthlyContribution,
            interestRate: this.props.interestRate,
            monthlyExpenses: this.props.monthlyExpenses,
        };
        this.handleChange = this.handleChange.bind(this);
        // this.submit = this.submit.bind(this)
    }

    async handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }

    render() {
        const { handleChange } = this;
        const { handleSubmit } = this.props;
        const { classes, theme } = this.props;
        const {
            currentAge,
            retiringAge,
            initialAmount,
            monthlyContribution,
            interestRate,
            monthlyExpenses,
        } = this.state;
        console.log(this.props);

        return (
            <Paper>
                <form className={classes.formContainer} onSubmit={handleSubmit}>
                    <Typography variant="h5" className={classes.title}>
                        Enter Your Info:{' '}
                    </Typography>
                    <TextField
                        className={classes.input}
                        label="Current Age"
                        name="currentAge"
                        value={currentAge}
                        onChange={(evt) => handleChange(evt)}
                    />
                    <TextField
                        className={classes.input}
                        label="Retirement Age"
                        name="retiringAge"
                        value={retiringAge}
                        onChange={(evt) => handleChange(evt)}
                    />
                    <TextField
                        className={classes.input}
                        label="Initial Amount Invested ($)"
                        name="initialAmount"
                        value={initialAmount}
                        onChange={(evt) => handleChange(evt)}
                        // InputProps={{
                        //     inputComponent: NumberFormatCustom,
                        // }}
                    />
                    <TextField
                        className={classes.input}
                        label="Monthly Contribution ($)"
                        name="monthlyContribution"
                        value={monthlyContribution}
                        onChange={(evt) => handleChange(evt)}

                        // InputProps={{
                        //     inputComponent: NumberFormatCustom,
                        // }}
                    />
                    <TextField
                        className={classes.input}
                        label="Annual Rate of Return (%)"
                        name="interestRate"
                        value={interestRate}
                        onChange={(evt) => handleChange(evt)}
                    />
                    <TextField
                        className={classes.input}
                        label="Monthly Expenses ($)"
                        name="monthlyExpenses"
                        value={monthlyExpenses}
                        onChange={(evt) => handleChange(evt)}
                        // InputProps={{
                        //     inputComponent: NumberFormatCustom,
                        // }}
                    />
                    <button
                        className={`${'btn waves-effect waves-light'} ${classes.input}`}
                        type="submit"
                        name="action"
                    >
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatch = (dispatch) => {
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const currentAge = evt.target.currentAge.value;
            const retiringAge = evt.target.retiringAge.value;
            const initialAmount = evt.target.initialAmount.value;
            const monthlyContribution = evt.target.monthlyContribution.value;
            const interestRate = evt.target.interestRate.value;
            const monthlyExpenses = evt.target.monthlyExpenses.value;
            console.log(
                currentAge,
                retiringAge,
                initialAmount,
                monthlyContribution,
                interestRate,
                monthlyExpenses
            );
            // dispatch({ type: 'UPDATE_FORM' })
            dispatch(
                updateUserInput(
                    currentAge,
                    retiringAge,
                    initialAmount,
                    monthlyContribution,
                    interestRate,
                    monthlyExpenses
                )
            );
        },
    };
};

export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps, mapDispatch)(UserInput)
);

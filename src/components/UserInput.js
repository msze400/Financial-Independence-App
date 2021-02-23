import React from 'react'
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
    form: {
        // display: 'flex',
        // flexDirection: 'column',
        height: '80vh',
    },
    input: {
        width: '20vw',
    },
    formContainer: {
        padding: '2rem',
        width: '30vw',
        height: '65vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
})

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props

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
                })
            }}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    )
}

class UserInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentAge: this.props.currentAge,
            retiringAge: this.props.retiringAge,
            initialAmount: this.props.initialAmount,
            monthlyContribution: this.props.monthlyContribution,
            interestRate: this.props.interestRate,
            monthlyExpenses: this.props.monthlyExpenses,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    async handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }
    async submit(event) {
        event.preventDefault()
        console.log('hi')
    }

    render() {
        const { submit, handleChange } = this
        const { classes, theme } = this.props
        const {
            currentAge,
            retiringAge,
            initialAmount,
            monthlyContribution,
            interestRate,
            monthlyExpenses,
        } = this.state
        console.log('STATE', this.state)
        console.log(this.props)

        return (
            <Paper className={classes.formContainer}>
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
                    label="Initial Amount Invested"
                    name="initialAmount"
                    value={initialAmount}
                    onChange={(evt) => handleChange(evt)}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                <TextField
                    className={classes.input}
                    label="Monthly Contribution"
                    name="monthlyContribution"
                    value={monthlyContribution}
                    onChange={(evt) => handleChange(evt)}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
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
                    label="Monthly Expenses"
                    name="monthlyExpenses"
                    value={monthlyExpenses}
                    onChange={(evt) => handleChange(evt)}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                <button
                    className={`${'btn waves-effect waves-light'} ${
                        classes.input
                    }`}
                    type="submit"
                    name="action"
                >
                    Submit
                    <i className="material-icons right">send</i>
                </button>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => state

export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps)(UserInput)
)

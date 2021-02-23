import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import NumberFormat from 'react-number-format'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    userForm: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(50),
            height: theme.spacing(60),
        },
    },
    form: {
        display: 'flex',
        width: '15vw',
        flexDirection: 'column',
    },
}))

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

export default function FormattedInputs() {
    const classes = useStyles()
    const [values, setValues] = React.useState({
        monthlyContribution: '0',
        initialAmount: '0',
        rateOfReturn: '0',
        monthlyExpenses: '0',
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div className={classes.userForm}>
            <Paper>
                <div className={classes.root}>
                    <FormControl className={classes.form}>
                        <TextField
                            label="Current Age"
                            value={values.currentAge}
                            onChange={handleChange}
                            name="currentAge"
                            id="formatted-currentAge-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                        <TextField
                            label="Retiring Age"
                            value={values.currentAge}
                            onChange={handleChange}
                            name="currentAge"
                            id="formatted-currentAge-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />

                        <TextField
                            label="Initial Amount Invested"
                            value={values.initialAmount}
                            onChange={handleChange}
                            name="initialAmount"
                            id="formatted-initialAmount-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                        <TextField
                            label="Monthly Contribution"
                            value={values.monthlyContribution}
                            onChange={handleChange}
                            name="monthlyContribution"
                            id="formatted-monthlyContribution-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                        <TextField
                            label="Annual Rate of Return (%)"
                            value={values.rateOfReturn}
                            onChange={handleChange}
                            name="rateOfReturn"
                            id="formatted-rateOfReturn-input"
                        />
                        <TextField
                            label="Monthly Expenses"
                            value={values.monthlyExpenses}
                            onChange={handleChange}
                            name="monthlyExpenses"
                            id="formatted-monthlyExpenses-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                        <button
                            className="btn waves-effect waves-light"
                            type="submit"
                            name="action"
                        >
                            Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </FormControl>
                </div>
            </Paper>
        </div>
    )
}

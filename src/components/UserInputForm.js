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
            height: theme.spacing(50),
        },
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
                    <FormControl>
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
                            name="numberformat"
                            id="formatted-monthlyContribution-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                        <TextField
                            label="Annual Rate of Return a Year"
                            value={values.rateOfReturn}
                            onChange={handleChange}
                            name="rateOfReturn"
                            id="formatted-rateOfReturn-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                        <button
                            class="btn waves-effect waves-light"
                            type="submit"
                            name="action"
                        >
                            Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </FormControl>
                </div>
            </Paper>
        </div>
    )
}

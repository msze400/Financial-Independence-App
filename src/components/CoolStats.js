import React from 'react';
import { connect } from 'react-redux';
import { compountInterestPrincipal, futureValueSeries } from './commonFunctions.js';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { numberWithCommas, onlyContributions } from './commonFunctions.js';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import EcoIcon from '@material-ui/icons/Eco';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const styles = (theme) => ({
    stats: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        width: '44.3vw',
        height: '50vh',
        marginTop: '1.3rem',
        flexWrap: 'wrao',
    },

    icon: {
        fontSize: '40',
    },

    greenText: {
        color: 'green',
    },

    statText: {
        fontSize: '20',
    },

    columnLeft: {
        paddingRight: '20',
    },

    columnRight: {
        paddingLeft: '20',
    },
});

class CoolStats extends React.Component {
    render() {
        const { classes, theme } = this.props;
        const {
            initialAmount,
            interestRate,
            monthlyExpenses,
            currentAge,
            retiringAge,
            monthlyContribution,
        } = this.props;

        const numInterestApplied = 12;
        const growthPeriod = retiringAge - currentAge + 1;
        const timeElapsed = Array.from(Array(growthPeriod), (v, i) => i);
        const finalAmount = timeElapsed.map((year) => {
            return (
                compountInterestPrincipal(initialAmount, interestRate, numInterestApplied, year) +
                futureValueSeries(monthlyContribution, interestRate, numInterestApplied, year)
            );
        });

        const contributionAmount = timeElapsed.map((year) => {
            return onlyContributions(initialAmount, monthlyContribution, year);
        });

        const timeElapsed_Age = [];
        for (let i = currentAge * 1; i <= retiringAge; i++) {
            timeElapsed_Age.push(i);
        }

        const endTotal = `$${numberWithCommas(Math.floor(finalAmount[finalAmount.length - 1]))}`;
        const yearlyExpenses = 12 * monthlyExpenses;
        const amountNeeded = numberWithCommas(yearlyExpenses * 25); // Assume 4% rule
        const totalContributionMade = numberWithCommas(
            Math.floor(contributionAmount[contributionAmount.length - 1])
        );
        const totalGrowth = numberWithCommas(
            Math.floor(
                finalAmount[finalAmount.length - 1] -
                    contributionAmount[contributionAmount.length - 1]
            )
        );

        // used for x series label

        return (
            <Paper className={classes.stats}>
                <div className={classes.columnLeft}>
                    <LocalAtmIcon className={classes.icon} />
                    <p className={classes.statText}>
                        Retirement Total: <br /> <b className={classes.greenText}>{endTotal}</b>
                    </p>

                    <AccountBalanceIcon className={classes.icon} />
                    <p className={classes.statText}>
                        Total Contribution: <br />{' '}
                        <b className={classes.greenText}>${totalContributionMade}</b>
                    </p>
                </div>

                <div className={classes.columnRight}>
                    <EcoIcon className={classes.icon} />
                    <p className={classes.statText}>
                        Forest Life Money Needed: <br />{' '}
                        <b className={classes.greenText}>${amountNeeded}</b>
                    </p>
                    <ShowChartIcon className={classes.icon} />
                    <p className={classes.statText}>
                        Total Growth: <br /> <b className={classes.greenText}>${totalGrowth}</b>
                    </p>
                </div>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => ({
    initialAmount: state.initialAmount,
    currentAge: state.currentAge,
    retiringAge: state.retiringAge,
    initialAmount: state.initialAmount,
    monthlyContribution: state.monthlyContribution,
    interestRate: state.interestRate,
    monthlyExpenses: state.monthlyExpenses,
});

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(CoolStats));

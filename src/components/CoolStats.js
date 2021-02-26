import React from 'react';
import { connect } from 'react-redux';
import { compountInterestPrincipal, futureValueSeries } from './commonFunctions.js';
import Paper from '@material-ui/core/Paper';

import { numberWithCommas, onlyContributions } from './commonFunctions.js';

class CoolStats extends React.Component {
    render() {
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
            <Paper>
                <p>End Total: {endTotal}</p>
                <p>Total Contribution ${totalContributionMade}</p>
                <p>Amount Needed to Go Live in the Forest: ${amountNeeded} </p>
                <p>Amount Needed to Go Live in the Forest: ${totalGrowth} </p>
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

export default connect(mapStateToProps)(CoolStats);

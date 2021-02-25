import React from 'react';
import { connect } from 'react-redux';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    LineSeries,
    AreaSeries,
    VerticalBarSeries,
} from 'react-vis';
import { Motion, spring } from 'react-motion';
import {
    compountInterestPrincipal,
    futureValueSeries,
    onlyContributions,
} from './commonFunctions.js';

class StackedAreaSeries extends React.Component {
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

        //used for $ calc
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

        // used for x series label
        const timeElapsed_Age = [];
        for (let i = currentAge * 1; i <= retiringAge; i++) {
            timeElapsed_Age.push(i);
        }

        const finalData = timeElapsed_Age.reduce((accum, year, index) => {
            accum.push({ x: year, y: finalAmount[index] });
            return accum;
        }, []);

        const contributionsData = timeElapsed_Age.reduce((accum, year, index) => {
            accum.push({ x: year, y: contributionAmount[index] });
            return accum;
        }, []);

        console.log('Contribution-DATA', contributionsData);
        return (
            <XYPlot width={500} height={500} margin={{ left: 100 }}>
                <HorizontalGridLines />
                <AreaSeries
                    color="#79c7e3"
                    data={finalData}
                    animation={{ damping: 5, stiffness: 9 }}
                />
                <AreaSeries
                    color="blue"
                    data={contributionsData}
                    animation={{ damping: 5, stiffness: 9 }}
                />
                <XAxis title="Time (Years)" />
                <YAxis title="Dollar Amount" />
            </XYPlot>
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

export default connect(mapStateToProps)(StackedAreaSeries);
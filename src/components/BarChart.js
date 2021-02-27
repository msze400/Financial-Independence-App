import React from 'react';
import { connect } from 'react-redux';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
    VerticalBarSeries,
    AreaSeries,
    Hint,
} from 'react-vis';
import { FlexibleXYPlot, FlexibleWidthXYPlot, FlexibleHeightXYPlot } from 'react-vis';
import { Motion, spring } from 'react-motion';
import {
    compountInterestPrincipal,
    futureValueSeries,
    numberWithCommas,
} from './commonFunctions.js';

import { updateDataPoint } from '../index.js';

class BarSeries extends React.Component {
    render() {
        const {
            initialAmount,
            interestRate,
            monthlyExpenses,
            currentAge,
            retiringAge,
            monthlyContribution,
        } = this.props;
        const { updateViewedDataPoint } = this.props;

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

        // used for x series label
        const timeElapsed_Age = [];
        for (let i = currentAge * 1; i <= retiringAge; i++) {
            timeElapsed_Age.push(i);
        }

        const finalData = timeElapsed_Age.reduce((accum, year, index) => {
            accum.push({ x: year, y: finalAmount[index] });
            return accum;
        }, []);

        return (
            <XYPlot width={900} height={475} margin={{ left: 100 }}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <VerticalBarSeries
                    data={finalData}
                    animation={{ damping: 5, stiffness: 9 }}
                    onValueClick={(datapoint, event) => {
                        updateViewedDataPoint(datapoint);
                    }}
                    color="#6746c3"
                />
                <XAxis className="XAxis" tickLabelAngle={0} />
                <YAxis
                    tickFormat={function tickFormat(d) {
                        const value = `$${numberWithCommas(d)}`;
                        return value;
                    }}
                />
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

const mapDispatch = (dispatch) => {
    return {
        updateViewedDataPoint(datapoint, evt) {
            dispatch(updateDataPoint(datapoint));
        },
    };
};

export default connect(mapStateToProps, mapDispatch)(BarSeries);

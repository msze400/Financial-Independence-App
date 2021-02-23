import React from 'react'
import { connect } from 'react-redux'
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    LineSeries,
    VerticalBarSeries,
    AreaSeries,
} from 'react-vis'
import { Motion, spring } from 'react-motion'

class Example extends React.Component {
    render() {
        const data = [
            { x: 0, y: 8 },
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
            { x: 7, y: 3 },
            { x: 8, y: 2 },
            { x: 9, y: 0 },
        ]

        // const Test = (props) => {
        //     return (
        //         <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
        //             {(value) => <div>{value.x}</div>}
        //         </Motion>
        //     )
        // }

        const {
            initialAmount,
            interestRate,
            monthlyExpenses,
            currentAge,
            retiringAge,
            monthlyContribution,
        } = this.props

        const numInterestApplied = 12
        const growthPeriod = retiringAge - currentAge + 1

        //used for $ calc
        const timeElapsed = Array.from(Array(growthPeriod), (v, i) => i + 1)
        const finalAmount = timeElapsed.map((year) => {
            return (
                initialAmount *
                Math.pow(
                    1 + interestRate / 100 / numInterestApplied,
                    numInterestApplied * year
                )
            )
        })
        console.log('GROWTH PERIOD', growthPeriod)
        const timeElapsed_Age = []
        for (let i = currentAge * 1; i <= retiringAge; i++) {
            timeElapsed_Age.push(i)
        }
        console.log(timeElapsed_Age)

        const finalData = timeElapsed_Age.reduce((accum, year, index) => {
            accum.push({ x: year, y: finalAmount[index] })
            return accum
        }, [])

        return (
            <XYPlot width={500} height={500} margin={{ left: 100 }}>
                <HorizontalGridLines />
                <VerticalBarSeries
                    data={finalData}
                    animation={{ damping: 10, stiffness: 20 }}
                />
                <XAxis title="Time (Years)" />
                <YAxis title="Dollar Amount" />
            </XYPlot>
        )
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
})

export default connect(mapStateToProps)(Example)

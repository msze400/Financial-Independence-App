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

        const initialAmount = 10000
        const interestRate = 0.05
        const numInterestApplied = 12
        const timeElapsed = Array.from(Array(45), (v, i) => i + 1)
        const finalAmount = timeElapsed.map((year) => {
            return (
                initialAmount *
                Math.pow(
                    1 + interestRate / numInterestApplied,
                    numInterestApplied * year
                )
            )
        })

        const finalData = timeElapsed.reduce((accum, year, index) => {
            accum.push({ x: year, y: finalAmount[index] })
            return accum
        }, [])

        console.log(finalData)

        return (
            <XYPlot width={500} height={500} margin={{ left: 50 }}>
                <HorizontalGridLines />
                <VerticalBarSeries data={finalData} />
                <XAxis title="Time (Years)" />
                <YAxis title="Dollar Amount" />
            </XYPlot>
        )
    }
}

const mapStateToProps = (state) => ({
    initialAmount_Redux: state.initialAmount,
})

export default connect(mapStateToProps)(Example)

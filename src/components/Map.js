import React, { Component } from 'react';
// import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from 'react-usa-map';
import Paper from '@material-ui/core/Paper';

class Map extends Component {
    /* mandatory */
    constructor(props) {
        super(props);
        this.state = {
            currentState: 'AL',
            medianIncome: '50,536',
            medianIncomeData: {
                MD: '84,805',
                NJ: '82,545',
                HI: '81,275',
                MA: '81,215',
                CT: '78,444',
                AK: '77,640',
                NH: '76,768',
                CA: '75,235',
                VA: '74,222',
                WA: '73,775',
                CO: '72,331',
                UT: '71,621',
                MN: '71,306',
                NJ: '68,486',
                DE: '68,287',
                RI: '67,167',
                IL: '65,886',
                ND: '64,894',
                WY: '64,049',
                OR: '62,818',
                VT: '61,973',
                TX: '61,874',
                WI: '61,747',
                PA: '61,744',
                NE: '61,439',
                IA: '60,523',
                NV: '60,365',
                KS: '59,597',
                AZ: '58,945',
                GA: '58,700',
                SD: '58,275',
                ME: '57,918',
                MI: '57,144',
                OH: '56,602',
                IN: '56,303',
                ID: '55,785',
                FL: '55,660',
                MO: '55,461',
                MT: '54,970',
                NC: '54,602',
                TN: '53,320',
                SC: '53,199',
                OK: '52,919',
                KY: '50,589',
                AL: '50,536',
                NM: '49,754',
                LA: '49,469',
                AR: '47,597',
                WV: '46,711',
                MS: '45,081',
            },
        };
        this.mapHandler = this.mapHandler.bind(this);
    }

    /* optional customization of filling per state and calling custom callbacks per state */
    mapHandler(event) {
        console.log(event.target.dataset);
        // return alert(event.target.dataset.name);
        this.setState({
            currentState: event.target.dataset.name,
            medianIncome: this.state.medianIncomeData[event.target.dataset.name],
        });
    }

    statesCustomConfig() {
        return {
            NJ: {
                clickHandler: (event) => {
                    console.log(event.target.dataset);
                    this.setState({
                        currentState: event.target.dataset.name,
                        medianIncome: this.state.medianIncomeData[event.target.dataset.name],
                    });
                },
                // console.log(event.target.dataset, this.state.medianIncomeData),
            },
            NY: {
                fill: '#CC0000',
            },
        };
    }

    render() {
        return (
            <div className="Map">
                <Paper>
                    <USAMap
                        customize={this.statesCustomConfig()}
                        onClick={this.mapHandler}
                        width={500}
                    />
                    <p>
                        Median Income for {this.state.currentState} is ${this.state.medianIncome}{' '}
                    </p>
                </Paper>
            </div>
        );
    }
}

export default Map;

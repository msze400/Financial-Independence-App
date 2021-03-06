import React, { Component } from 'react';
// import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from 'react-usa-map';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
    Map: {
        height: '50vh',
        width: '50vw',
        display: 'flex',
    },
    stateIncome: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        // alignContent: 'center',
        justifyContent: 'center',
    },

    greenText: {
        color: 'green',
    },
});

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: 'AL',
            medianIncome: '50,536',
            medianIncomeData: {
                // // https://worldpopulationreview.com/state-rankings/median-household-income-by-state
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
                NY: '68,486',
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
        this.setState({
            currentState: event.target.dataset.name,
            medianIncome: this.state.medianIncomeData[event.target.dataset.name],
        });
    }

    // statesCustomConfig() {
    //     return {};
    // }

    render() {
        const { classes, theme } = this.props;
        return (
            <Paper style={{ margin: 20 }} className={classes.Map}>
                <USAMap
                    // customize={this.statesCustomConfig()}
                    onClick={this.mapHandler}
                    // width={500}
                    height={500}
                />
                <Paper className={classes.stateIncome} style={{ width: '25vw' }}>
                    <AttachMoneyIcon style={{ fontSize: 40 }} />
                    <Typography style={{ fontSize: 20 }}>
                        Median Income for {this.state.currentState}: <br />
                        <b className={classes.greenText}>${this.state.medianIncome}</b>
                    </Typography>
                </Paper>
            </Paper>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Map);

import React from 'react';
import UserInputForm from './components/UserInputForm.js';
import UserInput from './components/UserInput.js';
import BarSeries from './components/BarChart.js';
import StackedAreaSeries from './components/StackedAreaSeries.js';
import Legend from './components/Legend.js';
import StackSeriesLegend from './components/StackSeriesLegend';
import Navbar from './components/Navbar.js';
import SimpleModal from './components/Meme.js';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Map from './components/Map.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import CoolStats from './components/CoolStats.js';
import { Typography } from '@material-ui/core';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
        };
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden,
        });
    }

    render() {
        // console.log('STATE', this.state);
        console.log('PROPS', this.props);
        return (
            <React.Fragment>
                <CssBaseline />
                <div id="App">
                    <Navbar />
                    <div id="Body" style={{ margin: 20 }}>
                        <UserInput />
                    </div>
                    <Paper
                        id="Graphs"
                        style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '1rem' }}
                    >
                        {this.state.isHidden ? <BarSeries /> : null}
                        {!this.state.isHidden ? <StackedAreaSeries /> : null}
                        <div className="LegendToggle">
                            {this.state.isHidden ? <Legend /> : null}
                            {!this.state.isHidden ? <StackSeriesLegend /> : null}
                            <Button
                                onClick={this.toggleHidden.bind(this)}
                                style={{ height: 40 }}
                                variant="outlined"
                                color="primary"
                            >
                                Change View
                            </Button>
                            <div className="clickOn">
                                <Typography>
                                    <u>Current Point</u>
                                </Typography>
                                <Typography>
                                    Age:
                                    {this.props.datapoint ? `${this.props.datapoint['x']}` : null}
                                </Typography>
                                <Typography>
                                    Amount:
                                    {this.props.datapoint
                                        ? `$${Math.floor(this.props.datapoint['y'])}`
                                        : null}
                                </Typography>
                            </div>
                        </div>
                    </Paper>
                    <div className="Map-Stats">
                        <Map />
                        <CoolStats />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// export default App;
// const mapStateToProps = (state) => state;
// export default connect(mapStateToProps)(App);
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(App);

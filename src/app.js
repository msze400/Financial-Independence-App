import React from 'react';
import UserInputForm from './components/UserInputForm.js';
import UserInput from './components/UserInput.js';
// import { Navbar, Menu } from './components'
// import FooterPage from './components/FooterPage'
// import Routes from './routes'
import BarSeries from './components/BarChart.js';
import StackedAreaSeries from './components/StackedAreaSeries.js';
import Legend from './components/Legend.js';
import Navbar from './components/Navbar.js';
import SimpleModal from './components/Meme.js';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import Map from './components/Map.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

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
        return (
            <React.Fragment>
                <CssBaseline />
                <div id="App">
                    <Navbar />
                    <div id="Body" style={{ margin: 20 }}>
                        <UserInput />
                    </div>
                    <Paper id="Graphs" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {this.state.isHidden ? <BarSeries /> : null}
                        {!this.state.isHidden ? <StackedAreaSeries /> : null}
                        <div className="LegendToggle">
                            <Legend />
                            <Button
                                onClick={this.toggleHidden.bind(this)}
                                style={{ height: 40 }}
                                variant="outlined"
                                color="primary"
                            >
                                Change View
                            </Button>
                        </div>
                    </Paper>
                    <Map />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
// const mapStateToProps = (state) => state;
// export default connect(mapStateToProps)(App);

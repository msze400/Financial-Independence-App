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
            <div id="App">
                <Navbar />
                <div id="Body">
                    <UserInput />
                    <Legend />
                    {this.state.isHidden ? <BarSeries /> : null}
                    {!this.state.isHidden ? <StackedAreaSeries /> : null}
                </div>
                <div>
                    <SimpleModal />
                    <Button onClick={this.toggleHidden.bind(this)}>Toggle</Button>
                </div>
            </div>
        );
    }
}

export default App;
// const mapStateToProps = (state) => state;
// export default connect(mapStateToProps)(App);

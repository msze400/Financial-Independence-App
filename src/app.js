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
import Meme from './components/Meme.js';

const App = () => {
    return (
        <div id="App">
            <Navbar />
            <div id="Body">
                <UserInput />
                <Legend />
                <BarSeries />
                <StackedAreaSeries />
                <Meme />
            </div>
        </div>
    );
};

export default App;

import React from 'react'
import UserInputForm from './components/UserInputForm.js'
// import { Navbar, Menu } from './components'
// import FooterPage from './components/FooterPage'
// import Routes from './routes'
import Example from './components/BarChart.js'
import Legend from './components/Legend.js'
import Navbar from './components/Navbar.js'

const App = () => {
    return (
        <div id="App">
            <Navbar />
            <div id="Body">
                <UserInputForm />
                <Legend />
                <Example />
            </div>
        </div>
    )
}

export default App

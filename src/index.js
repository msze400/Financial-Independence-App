import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import Example from './components/BarChart.js'
import UserInputForm from './components/UserInputForm'
import PersonalFinanceTip from './components/PersonalFinanceTip'
import Legend from './components/Legend.js'

class App extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            loading: true,
        }
    }
    async componentDidMount() {
        this.setState({
            users: (await axios.get('/api/users')).data,
            loading: false,
        })
    }
    render() {
        const { users, loading } = this.state
        if (loading) {
            return '....loading'
        }
        return (
            <div>
                {/* <PersonalFinanceTip /> */}
                {/* <UserInputForm /> */}
                <Legend />
                <Example />
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))

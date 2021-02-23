import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from 'react-router-dom'
import App from './app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const UPDATE_FORM = 'UPDATE_FORM';

const initialState = {
    currentAge: 21,
    retiringAge: 65,
    initialAmount: 5000,
    monthlyContribution: 100,
    interestRate: 8,
    monthlyExpenses: 1000,
};

export const updateUserInput = (
    currentAge,
    retiringAge,
    initialAmount,
    monthlyContribution,
    interestRate,
    monthlyExpenses
) => {
    return {
        type: UPDATE_FORM,
        currentAge,
        retiringAge,
        initialAmount,
        monthlyContribution,
        interestRate,
        monthlyExpenses,
    };
};

function reducer(state = initialState, action) {
    console.log('ACTION', action);
    switch (action.type) {
        case 'UPDATE_FORM':
            return {
                ...state,
                currentAge: action.currentAge,
                retiringAge: action.retiringAge,
                initialAmount: action.initialAmount,
                interestRate: action.interestRate,
                monthlyExpenses: action.monthlyExpenses,
            };
        default:
            console.log(state);
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

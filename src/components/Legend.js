import React from 'react'

import { DiscreteColorLegend } from 'react-vis'

const ITEMS = [
    'Initial Balance',
    'Compound Interest Growth',
    'Amount Contributed',
]

export default function DiscreteColorExample() {
    return <DiscreteColorLegend height={200} width={300} items={ITEMS} />
}

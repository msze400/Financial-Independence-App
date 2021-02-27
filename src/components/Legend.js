import React from 'react';

import { DiscreteColorLegend } from 'react-vis';

const ITEMS = ['Compound Interest Growth', 'Amount Contributed'];

export default function DiscreteColorExample() {
    return <DiscreteColorLegend height={150} width={400} items={ITEMS} />;
}

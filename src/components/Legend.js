import React from 'react';

import { DiscreteColorLegend } from 'react-vis';

const legendItems = [
    {
        title: 'Total Growth',
        color: '#6746c3',
        strokeWidth: 6,
    },
];
export default function DiscreteColorExample() {
    return <DiscreteColorLegend height={150} width={300} items={legendItems} />;
}

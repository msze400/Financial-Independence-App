import React from 'react';

import { DiscreteColorLegend } from 'react-vis';

const ITEMS = ['Total Growth', 'Contributed Amount'];

const legendItems = [
    {
        title: 'Total Growth',
        color: '#41B3D5',
        strokeWidth: 6,
    },
    {
        title: 'Contributed Amount',
        color: '#DCEDC8',
        strokeWidth: 6,
    },
];

export default function DiscreteColorExample() {
    return <DiscreteColorLegend height={150} width={300} items={legendItems} />;
}

export function compountInterestPrincipal(initialAmount, interestRate, numInterestApplied, year) {
    return (
        initialAmount *
        Math.pow(1 + interestRate / 100 / numInterestApplied, numInterestApplied * year)
    );
}

export function futureValueSeries(monthlyContribution, interestRate, numInterestApplied, year) {
    return (
        monthlyContribution *
        (((Math.pow(1 + interestRate / 100 / numInterestApplied, numInterestApplied * year) - 1) /
            (interestRate / 100 / numInterestApplied)) *
            (1 + interestRate / 100 / numInterestApplied))
    );
}

export function onlyContributions(initialAmount, monthlyContribution, year) {
    return initialAmount * 1 + year * monthlyContribution * 12;
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

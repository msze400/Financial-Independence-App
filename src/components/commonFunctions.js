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

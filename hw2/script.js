let varA = prompt('Enter first value:', 7);

let varB = prompt('Enter second value:', 3);


varA = +varA;
varB = +varB;


alert(`
    ${varA} + ${varB} = ${varA + varB}
    ${varA} - ${varB} = ${varA - varB}
    ${varA} * ${varB} = ${varA * varB}
    ${varA} / ${varB} = ${varA / varB}
`);

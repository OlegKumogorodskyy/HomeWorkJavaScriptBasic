const arr = [false, 12, '23424', false, 324, null, 5, 0, 0, 9, undefined, NaN, 6, 7];

const filteredArr = arr.filter(item => Boolean(item));

console.log(filteredArr);

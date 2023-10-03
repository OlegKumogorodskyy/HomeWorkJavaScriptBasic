let year = +prompt("Please, enter year:", 0);

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    alert("this year’s high");
} else {
    alert("this year is not high");
}

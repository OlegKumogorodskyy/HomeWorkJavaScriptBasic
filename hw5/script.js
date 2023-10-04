let number = parseInt(prompt("Enter a number between 1 and 50:"));

if (number >= 1 && number <= 50) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(`Factorial of a number ${number} is equal to ${factorial}`);
} else {
  console.log("The number must be between 1 and 50");
}
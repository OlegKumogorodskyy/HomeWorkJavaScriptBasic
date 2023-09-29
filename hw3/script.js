// let fingerNumber = prompt("Enter the finger number on your hand (from 1 to 5):");

// if (fingerNumber === '1') {
//     alert("Thumb");
// } else if (fingerNumber === '2') {
//     alert("Index finger");
// } else if (fingerNumber === '3') {
//     alert("Middle finger");
// } else if (fingerNumber === '4') {
//     alert("Ring finger");
// } else if (fingerNumber === '5') {
//     alert("Pinky");
// } else {
//     alert("Invalid finger number. Please enter a number from 1 to 5.");
// }


let canFly = prompt('This animal can fly? (Yes/No)');

if (canFly === 'yes') {
    alert ('this is bird!');
} else {
    let livesInWater = prompt("This is animal lives in water? (yes/no)");
    if (livesInWater === "yes") {
        alert("this is fish!");
    } else {
        alert("this mammal");
    }
}
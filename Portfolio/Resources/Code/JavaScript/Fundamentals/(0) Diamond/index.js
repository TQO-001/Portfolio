let i, control = 10, rows = 8, space = 4;

// Create the number of stars for the pyramid
let stars = [];
for (let x = 1; x <= control; ++x) {
    if (x % 2 !== 0) stars.push(x); // Push only odd numbers
}

console.log(stars);

for (i = 1; i <= rows; ++i) {
    let emptySpace = "", printedStars = "";

    // Calculate spaces before stars in each row
    for (let y = 1; y <= (rows - i); ++y) emptySpace += " ";

    // Determine how many stars to print based on the current row
    for (let y = 1; y <= stars[i - 1]; ++y) printedStars += "*";

    // Print the row with spaces and stars
    console.log(emptySpace + printedStars);
}

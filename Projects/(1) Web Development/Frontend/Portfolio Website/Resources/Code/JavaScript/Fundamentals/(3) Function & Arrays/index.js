let numbers = []
for(let i = 1; i <= 50; ++i) numbers.push(i);

function evenArray(array)
{
    let evenNumbers = [];
    for(let i = 0; i < array.length; ++i) if(array[i] % 2 == 0) evenNumbers.push(array[i]);
    return evenNumbers;
}

function evenArray2(array)
{
    let evenNumbers = [];
    array.forEach(num => num % 2 == 0 ? evenNumbers.push(num) : null);
    return evenNumbers;
}

console.log(`Original Array: ${numbers}`);
console.log(`Even Numbers Function 1: ${evenArray(numbers)}`);
console.log(`Even Numbers Function 2: ${evenArray2(numbers)}`);
for(let i = 1; i <= 50; ++i)
{
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log("FizzBuzz");
    }
    
    else if(i % 3 === 0)
    {
        console.log("Fizz");
    }

    else if(i % 5 === 0)
    {
        console.log("Buzz");
    }

    else
    {
        console.log(i);
    }
}

/* SHORTENED METHOD

for (let i = 1; i <= 50; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
}

*/
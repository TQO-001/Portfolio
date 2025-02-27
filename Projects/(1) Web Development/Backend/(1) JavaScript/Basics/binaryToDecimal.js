//  Binary to Decimal
function BinToDec(binary) {
    //  Making an array using the binary numbers, so we can work on them individually
    let binaryString = String(binary);
    let len = binaryString.length;
    let binaryArray = [];

    for(let i = 0; i < len; ++i) binaryArray.push(binaryString[i]);

    let result = 0;
    if(binaryArray.includes('.')) {
        //  Finding the the position of the decimal point
        let decimalPointPosition = binaryArray.indexOf('.');

        //  Converting the binary number to decimal
        let supValue = decimalPointPosition - 1;

        //  Integer part loop
        for(let i = 0; i < decimalPointPosition; ++i) {
            result += (Number(binaryArray[i])) * (2 ** (supValue));
            --supValue;
        }
        supValue = -1;
        //  Fractional part loop
        for(let i = (decimalPointPosition + 1); i < len; ++i) {
            result += (Number(binaryArray[i])) * (2 ** (supValue));
            --supValue;
        }
    }
    else {
        for(let i = 0; i < len; ++i) {
            result += (Number(binaryArray[i])) * (2 ** (binaryArray.length - 2));
        }
    }

    console.log(`Result: ${result}`);
}

BinToDec(101.101);
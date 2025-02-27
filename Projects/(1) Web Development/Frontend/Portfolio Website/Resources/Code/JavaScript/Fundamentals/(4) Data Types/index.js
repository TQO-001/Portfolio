const readline = require('readline');

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Dash(length) {
    return "-".repeat(length);
}

let table = [
    { Type: 'String', Example: 'Hello' },
    { Type: 'Number', Example: '10' },
    { Type: 'Boolean', Example: 'True' },
    { Type: 'Null', Example: 'Null' },
    { Type: 'Undefined', Example: 'Let x;' }
];

// Simple Version
function SimpleTable(table) {
    const typeColumnWidth = 10;
    const exampleColumnWidth = 12;

    const border = Dash(typeColumnWidth + exampleColumnWidth + 7);
    console.log(border);
    console.log(`| Type${" ".repeat(typeColumnWidth - 4)} | Example${" ".repeat(exampleColumnWidth - 7)} |`);
    console.log(border);

    for (let i = 0; i < table.length; ++i) {
        const type = table[i].Type.padEnd(typeColumnWidth);
        const example = table[i].Example.padEnd(exampleColumnWidth);
        console.log(`| ${type} | ${example} |`);
    }

    console.log(border);
}

// Dynamic Version 1 (Improved Flexibility)
function DynamicTable1(table) {
    const maxTypeLength = Math.max(...table.map(item => item.Type.length), 'Type'.length);
    const maxExampleLength = Math.max(...table.map(item => item.Example.length), 'Example'.length);

    const header = `| ${"Type".padEnd(maxTypeLength)} | ${"Example".padEnd(maxExampleLength)} |`;
    const rows = table.map(item => {
        return `| ${item.Type.padEnd(maxTypeLength)} | ${item.Example.padEnd(maxExampleLength)} |`;
    });

    const borderLength = Math.max(header.length, ...rows.map(row => row.length));
    const border = Dash(borderLength);
    console.log(`${border}\n${header}\n${border}\n${rows.join('\n')}\n${border}`);
}

// Dynamic Version 2 (Optimized Version)
function DynamicTable2(table) {
    const typeColumnWidth = Math.max(...table.map(item => item.Type.length), 'Type'.length);
    const exampleColumnWidth = Math.max(...table.map(item => item.Example.length), 'Example'.length);

    const border = Dash(typeColumnWidth + exampleColumnWidth + 7);
    console.log(border);
    console.log(`| Type${" ".repeat(typeColumnWidth - 4)} | Example${" ".repeat(exampleColumnWidth - 7)} |`);
    console.log(border);

    for (let i = 0; i < table.length; ++i) {
        const type = table[i].Type.padEnd(typeColumnWidth);
        const example = table[i].Example.padEnd(exampleColumnWidth);
        console.log(`| ${type} | ${example} |`);
    }

    console.log(border);
}

// Prompt user for their choice and run the selected version
function displayTableVersion() {
    rl.question("Choose table version:\n1: Simple Version\n2: Dynamic Version 1\n3: Dynamic Version 2\n-->", (versionChoice) => {
        if (versionChoice === "1") {
            SimpleTable(table);
        } else if (versionChoice === "2") {
            DynamicTable1(table);
        } else if (versionChoice === "3") {
            DynamicTable2(table);
        } else {
            console.log("Invalid choice. Please choose 1, 2, or 3.");
        }
        rl.close();  // Close the readline interface after the user has made a choice
    });
}

// Call the function to prompt the user
displayTableVersion();

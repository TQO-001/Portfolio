const fs = require('fs');
const path = require('path');

function getFiles(dirPath) {
    const files = fs.readdirSync(dirPath);
    return files.map((file) => {
        const filePath = path.join(dirPath, file);
        return {
            name: file,
            isDirectory: fs.statSync(filePath).isDirectory(),
            path: filePath,
        };
    });
}

module.exports = { getFiles };

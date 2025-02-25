const express = require('express');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const WebSocket = require('ws');
const { getFiles } = require('./fileUtils');

const app = express();
const port = 3000;

// Serve static files from /files folder (make sure this path is correct)
app.use('/files', express.static(path.join(__dirname, '../files')));

// Endpoint to get file tree
app.get('/api/files', (req, res) => {
    const directoryPath = path.join(__dirname, '../files'); // Adjust to your folder path
    const files = getFiles(directoryPath);
    res.json(files);
});

// Serve individual files when a link is clicked
app.get('/api/files', (req, res) => {
    const filePath = req.query.file;
    const fileFullPath = path.join(__dirname, '..', filePath); // Ensure this path is correct
    if (fs.existsSync(fileFullPath)) {
        res.sendFile(fileFullPath);
    } else {
        res.status(404).send('File not found');
    }
});

// WebSocket server
const wss = new WebSocket.Server({ noServer: true });
wss.on('connection', (ws) => {
    console.log('Client connected');
    
    const watcher = chokidar.watch(path.join(__dirname, '../files'), {
        persistent: true,
        ignoreInitial: true
    });

    watcher.on('all', () => {
        ws.send('file-changed');
    });
});

// Handle WebSocket upgrade
app.server = app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

app.server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

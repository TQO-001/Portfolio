// WebSocket connection
const socket = new WebSocket('ws://localhost:3000');
socket.onmessage = (event) => {
    if (event.data === 'file-changed') {
        fetchFileTree(); // Refresh file tree if file changes
    }
};

// Function to fetch file tree from the server
async function fetchFileTree() {
    const response = await fetch('/api/files');
    const files = await response.json();
    renderFileTree(files);
}

// Function to render file tree
function renderFileTree(files) {
    const fileExplorer = document.getElementById('fileExplorer');
    fileExplorer.innerHTML = ''; // Clear current tree

    files.forEach(file => {
        const li = document.createElement('li');
        
        if (file.isDirectory) {
            li.classList.add('folder');
            li.textContent = file.name;
            li.addEventListener('click', () => toggleFolder(li, file.path));
        } else {
            // Create a clickable link for files
            const fileLink = document.createElement('a');
            fileLink.href = `/api/files?file=${encodeURIComponent(file.path)}`;
            fileLink.target = '_blank'; // Open in a new tab
            fileLink.textContent = file.name;
            li.classList.add('file');
            li.appendChild(fileLink);
        }

        fileExplorer.appendChild(li);
    });
}

// Function to toggle folder expansion
async function toggleFolder(folderLi, folderPath) {
    let subFolder = folderLi.querySelector('.sub-folder');
    
    if (!subFolder) {
        subFolder = document.createElement('ul');
        subFolder.classList.add('sub-folder');
        folderLi.appendChild(subFolder);
        
        // Fetch and render the subfolder contents
        const subFiles = await fetch(`/api/files?folder=${folderPath}`).then(res => res.json());
        subFiles.forEach(subFile => {
            const subLi = document.createElement('li');
            if (subFile.isDirectory) {
                subLi.classList.add('folder');
                subLi.textContent = subFile.name;
            } else {
                // Create a clickable link for files
                const subFileLink = document.createElement('a');
                subFileLink.href = `/api/files?file=${encodeURIComponent(subFile.path)}`;
                subFileLink.target = '_blank'; // Open in a new tab
                subFileLink.textContent = subFile.name;
                subLi.classList.add('file');
                subLi.appendChild(subFileLink);
            }
            subFolder.appendChild(subLi);
        });
    } else {
        subFolder.remove();
    }
}

// Initial file tree load
fetchFileTree();

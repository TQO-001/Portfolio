// Select the <pre> element where the code will be displayed
const codeDisplay = document.getElementById('codeDisplay');

// Fetch the content of the external HTML file
fetch('../Pages/example.html') // Replace 'example.html' with your HTML file path
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        // Escape the HTML content to display as plain text
        const escapedCode = data.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        codeDisplay.innerHTML = escapedCode; // Insert escaped code into the <pre> element
    })
    .catch(error => {
        // Handle errors
        codeDisplay.textContent = "Failed to load the code: " + error.message;
    });

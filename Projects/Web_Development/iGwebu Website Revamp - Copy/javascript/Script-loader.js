window.addEventListener('load', function() {
    // Wait 3 seconds (3000ms) before hiding the loader and unblurring the content
    setTimeout(function() {
        // Hide the loader by setting display to 'none'
        document.getElementById('page').style.display = 'none';
        
        // Show the actual page content by setting display to 'block'
        document.getElementById('content').style.display = 'block';
        
        // Remove the blur effect on the content
        document.getElementById('content').style.filter = 'none';
    }, 3000); // 3000 milliseconds = 3 seconds
});

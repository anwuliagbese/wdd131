// Get the current year and display it
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date of the document and display it
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
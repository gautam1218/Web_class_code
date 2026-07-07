
const express = require('express');
const cors = require('cors'); // 1. Import CORS
const app = express();

app.use(cors()); // 2. Enable CORS for all routes

app.get('/data', (req, res) => {
    res.json({ message: "Success!", data: [1, 2, 3] });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


// Target HTML elements
const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');

// Define your local API URL
const apiUrl = 'http://192.168.0.133:3000/data';

// Function to fetch data from the API
async function fetchData() {
    // Show a loading message while waiting for the response
    dataContainer.innerHTML = '<p class="placeholder-text">Loading data, please wait...</p>';

    try {
        const response = await fetch(apiUrl);

        // Check if the server responded with a bad status (e.g., 404 or 500)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Render the formatted JSON data into the container
        dataContainer.innerHTML = `
            <h3>Data Received Successfully:</h3>
            <pre class="success-data">${JSON.stringify(data, null, 2)}</pre>
        `;

    } catch (error) {
        // Handle network errors or server downtime
        console.error('Fetch error:', error);
        dataContainer.innerHTML = `
            <p class="error-msg">❌ Failed to fetch data.</p>
            <p style="font-size: 0.85rem;">Error details: ${error.message}</p>
        `;
    }
}

// Attach event listener to the button
fetchBtn.addEventListener('click', fetchData);
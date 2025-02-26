const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "assets" directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve HTML files from the "html" directory
app.use('/html', express.static(path.join(__dirname, 'html')));

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the test.html file at /test URL
app.get('/test', (req, res)=> {
    res.sendFile(path.join(__dirname, '/html/test.html'))
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Website listening at http://localhost:${port}`);
});

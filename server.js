const express = require('express');
const app = express();
const port = 3000;

const PASSWORD = "0625";

app.use(express.static('public'));
app.use(express.json()); // Middleware to parse JSON request bodies

// Handle POST request to '/main'
app.post('/check', (req, res) => {
    const { password } = req.body; // Extract password from request body
    if (password === PASSWORD) {
        res.json(true);
    } else {
        res.json(false);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
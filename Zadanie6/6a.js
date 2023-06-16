const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send('Welcome to the home page');
});

app.get('/register', (req, res) => {
    res.send('This is a page for registration purposes');
});

app.get('/cat', (req, res) => {
    res.send('No cat for you!');
});

app.listen(8080, () => {
    console.log('Server running!');
});
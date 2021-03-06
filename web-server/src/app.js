const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!');
});

app.get('/help', (req, res) => {
    res.send('Help express!');
});

app.get('/about', (req, res) => {
    res.send('About express!');
});

app.get('/weather', (req, res) => {
    res.send('Weather express!');
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});
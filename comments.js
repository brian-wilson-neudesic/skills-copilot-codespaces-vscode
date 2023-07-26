// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [
    { name: 'John', message: 'Hello' },
    { name: 'Mary', message: 'Hi, John' }
];

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set view engine
app.set('view engine', 'pug');

// Set static files
app.use(express.static('public'));

// Set routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Comments', comments: comments });
});

app.get('/new', (req, res) => {
    res.render('form', { title: 'Comments' });
});

app.post('/new', (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    comments.push({ name: name, message: message });
    res.redirect('/');
});

// Start web server
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
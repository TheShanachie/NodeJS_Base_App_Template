const express = require('express');
const path = require('path');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// add to path.
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

// start app, listen to port 5000
app.listen(5000, () => {
    console.log('Listening on port ' + 5000);
});

/** Process requests and direct pages -- Note: Always include 'sites', 'links', and a title. */
// Home page
app.get('/', async (req, res) => {
    try {
        res.render('index')
    } catch (e) {
        console.log(e);
    }
});

// 404 page
app.use(async (req, res) => {
    try {
        res.status(404).render('404')
    } catch (e) {
        console.log(e);
    }
});
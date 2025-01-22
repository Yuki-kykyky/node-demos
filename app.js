const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});

app.listen(8008)
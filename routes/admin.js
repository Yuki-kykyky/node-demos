const path = require('path');
const rootDir = require('../utils/path');
const express = require('express');
const router = express.Router();

router.get('/products', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'products.html'));
});

router.post('/products', (req, res, next) => {
    res.send('<h1>Added Product</h1>');
    console.log(req.body);
})

router.get('/', (req, res, next) => {
    res.send('<h1>Empty here</h1>');
})

module.exports = router;
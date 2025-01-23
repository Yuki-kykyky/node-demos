const path = require('path');
const rootDir = require('../utils/path');
const express = require('express');
const router = express.Router();

const products = [];
router.get('/products', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'products.html'));
});

router.post('/products', (req, res, next) => {
    products.push({name: req.body.name, price: req.body.price});
    res.redirect('/');
})

router.get('/', (req, res, next) => {
    console.log('redirect',products);
    res.render('demo');
})

module.exports.router = router;
module.exports.products = products;
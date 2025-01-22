const express = require('express');
const router = express.Router();

router.get('/product', (req, res, next) => {
    res.send('<form action="/admin/product" method="post"><input type="text" name="note"><button type="submit">Add Note</button></form>');
});

router.post('/product', (req, res, next) => {
    res.send('<h1>Added Product</h1>');
    console.log(req.body);
})

router.get('/', (req, res, next) => {
    res.send('<h1>Empty here</h1>');
})

module.exports = router;
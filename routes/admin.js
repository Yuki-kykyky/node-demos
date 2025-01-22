const express = require('express');

const router = express.Router();

router.get('/add-note', (req, res, next) => {
    console.log('this is the first middleware');
    res.send('<form action="/hello" method="post"><input type="text" name="note"><button type="submit">Add Note</button></form>');
});

router.post('/hello', (req, res, next) => {
    console.log('this is the second middleware');
    res.redirect('/');
})

router.get('/', (req, res, next) => {
    console.log('this is the third middleware');
    res.send('<h1>Empty here</h1>');
})

module.exports = router;
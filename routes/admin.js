const express = require('express');
const router = express.Router();

router.get('/add-note', (req, res, next) => {
    console.log('this is the first middleware');
    res.send('<form action="/admin/add-note" method="post"><input type="text" name="note"><button type="submit">Add Note</button></form>');
});

router.post('/add-note', (req, res, next) => {
    console.log('this is the second middleware');
    res.send('<h1>Added Note</h1>');
    console.log(req.body);
})

router.get('/', (req, res, next) => {
    console.log('this is the third middleware');
    res.send('<h1>Empty here</h1>');
})

module.exports = router;
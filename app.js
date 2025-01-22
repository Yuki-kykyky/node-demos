const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-note', (req, res, next) => {
    console.log('this is the first middleware');
    res.send('<form action="/hello" method="post"><input type="text" name="note"><button type="submit">Add Note</button></form>');
});

app.use('/hello', (req, res, next) => {
    console.log('this is the second middleware');
    res.send('<h1>Hello</h1>');
    console.log(req.body);

})
app.use('/', (req, res, next) => {
    console.log('this is the third middleware');
    res.send('<h1>Empty here</h1>');
})

app.listen(8008)
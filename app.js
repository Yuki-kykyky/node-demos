const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

// express.static 是 Express.js 提供的一个中间件，
// 用于提供静态文件（如 HTML 文件、CSS 文件、JavaScript 文件、图像等）。
// 通过这行代码，任何位于 public 目录中的文件都可以通过 HTTP 请求直接访问。
app.use(express.static(path.join(__dirname,'public')))

const adminData = require('./routes/admin');

app.use(adminData.router);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});

app.listen(8008)
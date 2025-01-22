const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
app.use(adminRoutes);


app.listen(8008)
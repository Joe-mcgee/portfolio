const express = require('express');
const app = express();
const port = 5000;

const getPosts = require('./routes/getPosts');
app.use('/', getPosts());

app.listen(port, () => console.log(`Listening on port ${port}`));
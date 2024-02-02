const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


app.use('/', indexRouter);

const port = 4000;
app.listen(port, () => {
  console.log('서버 가동중', port,'번 포트에서');
});

module.exports = app;
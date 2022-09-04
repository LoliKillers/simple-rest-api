const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');

const cors = require('cors');
const indexRouter = require('./routes/index');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'image', 'dclogo.png')));
app.use(cookieParser());

app.use('/', indexRouter);

app.all('*', (req, res) => { 
  res.status(404).send({
    code: 404,
    error: {
      message: 'halaman yang anda minta tidak ada dalam server!'
    }
  }); 
}); 

app.listen(PORT, () => {
  console.log("App listen on localhost PORT : " + PORT);
});

module.exports = app;
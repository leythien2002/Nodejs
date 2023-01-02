const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express(); //express la framework
const port = 3000;

const route = require('./routes');
const db=require('./config/db');

//Connect db
db.connect();

//http logger ( nó là mấy cái thông tin hiện ra khi chạy lên cmd)
app.use(morgan('combined'));
//template engine
app.engine(
  'handlebars',
  engine({
    extname: '.handlebars', // doi ten duoi file cua cai engine( engine la 1 cai ten tu dat)
  }),
);
app.set('view engine', 'handlebars'); //su dung view engine
app.set('views', path.join(__dirname + '/resources/views')); //__dirname + 'resources','views' co the ghi nhu nay
app.use(express.static(path.join(__dirname, 'public'))); // tao cai duong dan public de lay file css
//https://stackoverflow.com/questions/13395742/can-not-get-css-file

//Route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

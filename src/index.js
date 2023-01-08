const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const app = express(); //express la framework
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3000;
const SortMiddleware = require('./app/middlewares/SortMiddleware');
const route = require('./routes');
const db = require('./config/db');

//Connect db
db.connect();
app.use(methodOverride('_method'));
//http logger ( nó là mấy cái thông tin hiện ra khi chạy lên cmd)
app.use(morgan('combined'));
//template engine
app.engine(
  'handlebars',
  engine({
    extname: '.handlebars', // doi ten duoi file cua cai engine( engine la 1 cai ten tu dat)
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field == sort.column ? sort.type : 'default';
        const icons = {
          default: 'oi oi-elevator',
          asc: 'oi oi-sort-ascending',
          desc: 'oi oi-sort-descending',
        };
        const types = {
          default: 'asc',
          asc: 'desc',
          desc: 'default',
        };
        const type = types[sortType];
        const icon = icons[sortType];
        return `<a href="?sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`;
      },
    },
  }),
);
app.set('view engine', 'handlebars'); //su dung view engine
app.set('views', path.join(__dirname + '/resources/views')); //__dirname + 'resources','views' co the ghi nhu nay
app.use(express.static(path.join(__dirname, 'public'))); // tao cai duong dan public de lay file css
//https://stackoverflow.com/questions/13395742/can-not-get-css-file
//custom middleware
app.use(SortMiddleware);
//Route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

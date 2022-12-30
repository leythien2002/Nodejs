const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);

  // app.get('/', (req, res) => { //request/ response
  //     res.render('home')
  //   })
  //   app.get('/search', (req, res) => { //request/ response
  //     res.render('search')
  //   })
  //   app.get('/news', (req, res) => { //request/ response
  //     res.render('new')
  //   })

  app.post('/search', (req, res) => {
    res.send('');
  });
}
module.exports = route;

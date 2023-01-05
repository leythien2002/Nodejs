const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
function route(app) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/me', meRouter);
  app.use('/', siteRouter);

  app.post('/search', (req, res) => {
    res.send('');
  });
}
module.exports = route;

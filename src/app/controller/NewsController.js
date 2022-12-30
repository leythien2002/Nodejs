class NewsController {
  //Get/news
  index(req, res) {
    res.render('news');
  }
  show(req, res) {
    res.send('Thiendeptrai');
  }
}
module.exports = new NewsController();

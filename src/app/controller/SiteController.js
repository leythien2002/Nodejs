//có site trong route thì cug có controller
class SiteController {
  //Get/news
  index(req, res) {
    res.render('home');
  }
  search(req, res) {
    res.render('search');
  }
  show(req, res) {
    res.send('Thiendeptrai');
  }
}
module.exports = new SiteController();

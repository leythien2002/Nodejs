const { multipleMongooseToObject } = require('../../util/mongoose');
const Course=require('../models/Course')

//có site trong route thì cug có controller
class SiteController {
  //Get/news
  index(req, res) {
    Course.find({})
      .then(courses=>{
        //vi khi khi course thi handlebars no se ko chap nhan vi tinh bao mat cua no nen se ==>
        // courses=courses.map(course=>course.toObject())
        res.render('home',{
          courses:multipleMongooseToObject(courses)
        });
      })
      .catch(error=>next(error));
    // Course.find({}, function (err, courses) {
    //   if(!err) res.json(courses);
    //   else res.status(400).json({error:'Loi cmnr'});
    // });
    
    // res.render('home');
  }
  search(req, res) {
    res.render('search');
  }
  show(req, res) {
    res.send('Thiendeptrai');
  }
}
module.exports = new SiteController();

const { singleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

//có site trong route thì cug có controller
class CourseController {
  //Get/courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render('courses/show', { course: singleMongooseToObject(course) }),
      )
      .catch(next);
    // res.send(req.params.slug)
  }
      create(req, res) {
    res.render('courses/create');
  }
  //post/courses/store
        store(req, res) {
    const data = req.body;
    data.image =
      'https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg';
    Course.create(data)
      .then(() => res.redirect('/'))
      .catch((error) => {});
  }
}
module.exports = new CourseController();

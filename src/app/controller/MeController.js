const { singleMongooseToObject } = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

//có site trong route thì cug có controller
class MeController {
  //Get/me/courses
  show(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render('me/stored-course', {
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}
module.exports = new MeController();

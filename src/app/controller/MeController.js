const { singleMongooseToObject } = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

//có site trong route thì cug có controller
class MeController {
  //Get/me/courses
  show(req, res, next) {
    //promise all se thực hiện cả 2 phương thức phía dưới đồng thời
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) =>
        res.render('me/stored-course', {
          deletedCount,
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
    // Course.countDocumentsDeleted()
    //   .then((deletedCount) =>
    //     res.render('me/stored-course',{deletedCount})
    //   )
    //   .catch(next);
    // Course.find({})
    //   .then((courses) =>
    //     res.render('me/stored-course', {
    //       courses: multipleMongooseToObject(courses),
    //     })
    //   )
    //   .catch(next);
  }
  //Get/me/bin/courses
  binCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/bin-course', {
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}
module.exports = new MeController();

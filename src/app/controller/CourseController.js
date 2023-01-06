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
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', { course: singleMongooseToObject(course) }),
      )
      .catch(next);
  }
  //get, post ,put, patch, delete,option
  //put/ patch la dung cho chinh sua ( cai nay theo Restful)
  //put/course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
  //delete/course/delete/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  //patch/courses/restore/id
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}
module.exports = new CourseController();

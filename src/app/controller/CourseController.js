const { singleMongooseToObject } = require('../../util/mongoose');
const Course=require('../models/Course')

//có site trong route thì cug có controller
class CourseController {
  //Get/courses/:slug
  show(req, res,next) {
    
    Course.findOne({ slug: req.params.slug })
      .then(course=>
        res.render('courses/show',{course:singleMongooseToObject(course)})
        )
      .catch(next);
    // res.send(req.params.slug)   
  }
  create(req,res){
    res.send('FFF')
  }
}
module.exports = new CourseController();

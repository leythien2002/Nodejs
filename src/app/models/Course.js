const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
//const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');

const Course = new Schema({
  //cho này ghi Course vì khi nó đọc vào model hay tạo model
  // no sẽ chuyển thành chữ thường hết và tự thêm s
  name: { type: String },
  description: { type: String },
  slug: { type: String, slug: 'name', unique: true },
  image: { type: String },
  videoId: { type: String },
  create: { type: Date, default: Date.now },
});
// ADD plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});
module.exports = mongoose.model('Course', Course);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const Course = new Schema({//cho này ghi Course vì khi nó đọc vào model hay tạo model
  // no sẽ chuyển thành chữ thường hết và tự thêm s
    name:{type:String},
    description:{type:String},
    slug:{type:String},
    create:{type:Date, default:Date.now}
    
  });
module.exports=mongoose.model('Course',Course)
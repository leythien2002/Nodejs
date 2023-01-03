const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/CourseController'); // day la goi lai tu class NewController.
//Khi khoi tao thi moi viet hoa. đã khởi tạo rồi mà gọi lại thì nên viết thường chữ đầu --> nó tượng trưng cho dữ liệu

// newsController.index

router.get('/create', newsController.create); // :slug la cai param động chạy sau get/news/...
router.post('/store', newsController.store); // :slug la cai param động chạy sau get/news/...
router.get('/:slug', newsController.show); // :slug la cai param động chạy sau get/news/...

module.exports = router;
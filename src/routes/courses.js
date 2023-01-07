const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/CourseController'); // day la goi lai tu class NewController.
//Khi khoi tao thi moi viet hoa. đã khởi tạo rồi mà gọi lại thì nên viết thường chữ đầu --> nó tượng trưng cho dữ liệu

// newsController.index

router.get('/create', newsController.create); // :slug la cai param động chạy sau get/news/...
router.post('/store', newsController.store);
router.post('/action-form', newsController.actionForm);
router.get('/edit/:id', newsController.edit);
router.delete('/delete/:id', newsController.delete);
router.delete('/force-delete/:id', newsController.forceDelete);
router.patch('/restore/:id', newsController.restore);
router.put('/:id', newsController.update);
router.get('/:slug', newsController.show); // :slug la cai param động chạy sau get/news/...

module.exports = router;

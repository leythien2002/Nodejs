const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/NewsController'); // day la goi lai tu class NewController.
//Khi khoi tao thi moi viet hoa. đã khởi tạo rồi mà gọi lại thì nên viết thường chữ đầu --> nó tượng trưng cho dữ liệu

// newsController.index

router.get('/:slug', newsController.show); // :slug la cai param động chạy sau get/news/...
router.get('/', newsController.index); // vì xét từ trên xg nên để cái trang chính của news sau cùng để có thể chạy cai khac

module.exports = router;

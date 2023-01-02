//Site này dùng cho các trang nó ko có nhiều mục vd: home/contact/search...
const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/SiteController'); // day la goi lai tu class NewController.
//Khi khoi tao thi moi viet hoa. đã khởi tạo rồi mà gọi lại thì nên viết thường chữ đầu --> nó tượng trưng cho dữ liệu

// newsController.index
router.get('/search', siteController.search);

router.get('/', siteController.index); // vì xét từ trên xg nên để cái trang chính của news sau cùng để có thể chạy cai khac

module.exports = router;

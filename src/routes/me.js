const express = require('express');
const router = express.Router();
const meController = require('../app/controller/MeController');

router.get('/stored/courses', meController.show); // :slug la cai param động chạy sau get/news/...

module.exports = router;

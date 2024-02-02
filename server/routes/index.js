const express = require('express');
const router = express.Router();
const indexCtrl = require('../controller/controller.js');

router.get('/main', indexCtrl.main);
router.post('/main',indexCtrl.main2);


//회원가입
router.post('/register',indexCtrl.register);

module.exports = router;
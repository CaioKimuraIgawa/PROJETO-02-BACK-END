const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/loginCtrl');

router.get('/', loginCtrl.showLogin);
router.post('/login', loginCtrl.login);
router.get('/logout', loginCtrl.logout);

module.exports = router;

const express = require('express');
const router = express.Router();
const protgCtrl = require('../controllers/protgCtrl');

router.get('/', protgCtrl.dashboard);

module.exports = router;

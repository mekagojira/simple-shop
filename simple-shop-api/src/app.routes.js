const express = require('express');
const router = express.Router();

const welcomeCtrl = require('./controllers/welcome');
router.get('/', welcomeCtrl.ping);
router.get('/ping', welcomeCtrl.ping);
router.get('/mongoose', welcomeCtrl.mongoose);
router.post('/mongoose', welcomeCtrl.createTestMongoose);
router.all('*', welcomeCtrl.notFound);

module.exports = router;

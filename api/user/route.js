var router = require('koa-router')();
var UserController = require('./UserController');

router.get('/user/getUser/:id', UserController.getUser);
router.post('/user/registerUser', UserController.registerUser);

module.exports = router;
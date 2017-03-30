var router = require('koa-router')();
var UserController = require('../../app/controllers/UserController');

router.get('/getUser/:id', UserController.getUser);
router.post('/registerUser', UserController.registerUser);

module.exports = router;
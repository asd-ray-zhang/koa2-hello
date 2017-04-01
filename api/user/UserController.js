const userService = require('./UserService');
const rsUtil = require('../../utils/RSUtil');

class UserController{
    /**
     * retrieve user.
     * @param {*} ctx 
     */
    async getUser(ctx){
        let v = await userService.findByName(ctx.params.name);
        ctx.body = rsUtil.ok(v);
    }

    async registerUser(ctx){
        let obj = ctx.request.body;
        let v = await userService.register({firstName: obj.firstName, lastName: obj.lastName});
        ctx.body = rsUtil.ok('保存成功');
    }
}

module.exports = new UserController();
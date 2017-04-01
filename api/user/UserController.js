const userService = require('./UserService');
//获取用户
exports.getUser = async (ctx, next) => {
    console.log('id:  ', ctx.params.id);

    ctx.body = {
        username: '阿，嫣爸',
        age: 30
    }
}

//用户注册
exports.registerUser = async (ctx, next) => {
    //console.log('registerUser', ctx.request.body);
    let obj = ctx.request.body;
    userService.register({firstName: obj.firstName, lastName: obj.lastName}).then((data) => {
        debugger;
    });
}
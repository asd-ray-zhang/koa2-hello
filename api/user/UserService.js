var User = require('./User');
var db = require('../../config/db');
class UserService{
    constructor(){

    }
    /**
     * object.firstName: 名
     * object.lastName: 姓
     */
     
    register (object){

        //User.sync().then(() => {
            return User.create(object);
        //});
    }

}


module.exports = new UserService();
var User = require('../../models/User');
var BasicService = require('../../services/BasicService');
var Models = require('../../models/Models');

class UserService extends BasicService{
    
    constructor(){
        super('User');
    }
    /**
     * 
     * @param {firstName, lastName} object 
     */
    register (object){
        return this.create(object);
    }
    /**
     * @param  {*} firstName 
     */
    findByName(firstName){
        return this.findAll({ where: { firstName: firstName } });
    }

}


module.exports = new UserService();
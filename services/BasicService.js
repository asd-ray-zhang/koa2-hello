var Models = require('../models/Models');
class BasicService{
    constructor(modelName){
        this.modelName = modelName;
    }

    create(object){
        return Models[this.modelName].create(object);
    }

    findAll(condition){
        return Models[this.modelName].findAll(condition);
    }

}

module.exports = BasicService;
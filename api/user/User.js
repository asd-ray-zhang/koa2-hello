var Sequelize = require('Sequelize');
var db = require('../../config/db');
var User = db.store.define('user', {
  id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},

  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});
/*generate a table by default, but, I don't propose to do like this. 
User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
*/

/*
User.sync({force: true}).then((rs) =>{
  
});
*/
module.exports = User;
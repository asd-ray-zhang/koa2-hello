var Sequelize = require('Sequelize');
var sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  //storage: 'path/to/database.sqlite'
});

// Or you can simply use a connection uri
//var sequelize = new Sequelize('mysql://user:pass@example.com:5432/dbname');

module.exports = {Sequelize: Sequelize, store:　sequelize};

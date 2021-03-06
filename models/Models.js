const fs = require('fs');
var db = require('../config/db');
class Models{
    constructor(){
        let files = fs.readdirSync(__dirname);
        let js_files = files.filter((f) => {
            return f.endsWith('.js');
        }, files);

        module.exports = {};

        for (let f of js_files) {
            console.log(`import model from file ${f}...`);
            if ('Models.js' == f){//filter Models
                continue;
            }
            let name = f.substring(0, f.length - 3);
            module.exports[name] = require(__dirname + '/' + f);
        }
    }
}

new Models();

 module.exports.sync = () => {
    db.sync();
};

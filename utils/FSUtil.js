var fs = require('fs');

var readDir = function (path){
  return new Promise(function (resolve, reject){
    fs.readdir(path, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};

class FSUtil{

    async readdir(path){
        return await readDir(path);
    }
}

module.exports = new FSUtil(); 

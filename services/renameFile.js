const fs = require('fs');

const renameFile = (input) => {
    try {
        const [rn, pathToFile, newFilename] = input.split(' ');
        const path = pathToFile
        const newPathArr = path.split('/')
        newPathArr.pop()
        newPathArr.push(newFilename)
        const newPathString = newPathArr.join('/')
        fs.renameSync(pathToFile, newPathString);
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = {renameFile}
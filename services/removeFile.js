const fs = require('fs');

const removeFile = (input) => {
    try {
        const [command, pathToFile] = input.split(' ');
        fs.unlinkSync(pathToFile);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {removeFile}
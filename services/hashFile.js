const crypto = require('crypto');
const fs = require('fs');

const hashFile = (input) => {
    try {
        const [cmd, pathToFile] = input.split(' ');
        const contentBuffer = fs.readFileSync(pathToFile);
        const hash = crypto.createHash('sha256');
        hash.update(contentBuffer);
        const hex = hash.digest('hex');
        console.log(hex);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { hashFile };

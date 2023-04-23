const fs = require('fs');
const zlib = require('zlib');

const decompressFile = (input) => {
    try {
        let arr = input.split(' ');
        let result = [];

        for (let el of arr) {
            if (el[0] === '/') {
                result.push(el);
            } else {
                result[result.length - 1] = result[result.length - 1] + ' ' + el;
            }
        }
        const [pathToFile, pathToNewFile] = result;
        const createReadStream = fs.createReadStream(pathToFile);
        const createWriteStream = fs.createWriteStream(pathToNewFile);
        const unzip = zlib.createUnzip();
        createReadStream.pipe(unzip).pipe(createWriteStream);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { decompressFile };

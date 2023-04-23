const fs = require('fs');
const zlib = require('zlib');


const compressFile = (input) => {
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
        const readableStream = fs.createReadStream(pathToFile);
        const writableStream = fs.createWriteStream(`${pathToNewFile}.gz`);

        const gzip = zlib.createGzip();
        readableStream
            .pipe(gzip)
            .pipe(writableStream);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { compressFile };

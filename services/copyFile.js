const fs = require('fs');

const copyFile = (input) => {
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
        const writableStream = fs.createWriteStream(pathToNewFile);
        readableStream.on('data', (data) => {
            writableStream.write(data.toString());
        });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { copyFile };

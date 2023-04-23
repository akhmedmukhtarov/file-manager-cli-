const fs = require('fs');

const readContentOfFile = (input) => {
    try {
        const [cat, ...rest] = input.split(' ');
        const pathToFile = rest.join(' ');

        const readableStream = fs.createReadStream(pathToFile);
        readableStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { readContentOfFile };

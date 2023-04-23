const fs = require('fs');

const addNewFile = (input) => {
    try {
        const [add, ...rest] = input.split(' ');
        const pathToFile = rest.join(' ');
        fs.openSync(pathToFile, 'a')
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { addNewFile };

const cp = require('child_process');
const { goToSpecificFolder } = require('./goToSpecificFolder');
const { getContentOfDirectory } = require('./getContentOfDirectory');
const { readContentOfFile } = require('./readContentOfFile');
const { addNewFile } = require('./addNewFile');
const { renameFile } = require('./renameFile');
const { copyFile } = require('./copyFile');
const { moveFile } = require('./moveFile');
const { removeFile } = require('./removeFile');
const { getOsInfo } = require('./getOsInfo');
const { hashFile } = require('./hashFile');
const { compressFile } = require('./compressFile');
const { decompressFile } = require('./decompressFile');

const commanHandler = (input, username) => {
    const [cmd, ...rest] = input.split(' ');
    try {
        if (input === '.exit') {
            process.emit('SIGINT');
        } else if (input === 'up') {
            process.chdir('..');
        } else if (cmd === 'cd') {
            goToSpecificFolder(input);
        } else if (input === 'ls') {
            getContentOfDirectory();
        } else if (cmd === 'cat') {
            readContentOfFile(input);
        } else if (cmd === 'rn') {
            renameFile(input);
        } else if (cmd === 'cp') {
            copyFile(input);
        } else if (cmd === 'rm') {
            removeFile(input);
        } else if (cmd === 'mv') {
            moveFile(input);
        } else if (cmd === 'os') {
            getOsInfo(input);
        } else if (cmd === 'hash') {
            hashFile(input);
        } else if (cmd === 'add') {
            addNewFile(input);
        } else if (cmd === 'decompress') {
            decompressFile(input);
        }else if (cmd === 'compress') {
            compressFile(input);
        } else {
            console.log('Invalid input');
        }
        console.log(`You are currently in ${process.cwd()}`);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { commanHandler };

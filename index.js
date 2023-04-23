const cp = require('child_process');
const path = require('path');
const { meetUser } = require('./services/meetUser.js');
const { commanHandler } = require('./services/commandHandler.js');

const username = !!process.argv.slice(2).length && process.argv.slice(2)[0].split('=')[1];


meetUser(username);

process.stdin.on('data', (chunk) => {
    const data = chunk.toString('utf-8').trim()
    commanHandler(data)
});

process.stdin.on('end', ()=> {
    console.log('bye');
})

process.on('SIGINT', ()=> {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit()
})
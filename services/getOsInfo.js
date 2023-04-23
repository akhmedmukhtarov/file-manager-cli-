const os = require('os');

const getOsInfo = (input)=> {
    const [cmd, arg] = input.split(' ')
    if(arg === '--EOL'){
        const EOL = JSON.stringify(os.EOL)
        console.log(EOL);
    }else if(arg === '--cpus'){
        const cpus = os.cpus()
        console.log(cpus);
    }else if(arg === '--cpus'){
        const cpus = os.cpus()
        console.log(cpus);
    }else if(arg === '--homedir'){
        const homedir = os.homedir()
        console.log(homedir);
    }else if(arg === '--username'){
        const info = os.userInfo()
        console.log(info.username);
    }else if(arg === '--architecture'){
        const info = os.arch()
        console.log(info);
    }
}

module.exports = {getOsInfo}
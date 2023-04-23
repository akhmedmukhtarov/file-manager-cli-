const meetUser = (username)=>{
    if(!username){
        throw new Error('Username should be set. Start program as "npm run start -- --username=your_username"')
    }else{
        console.log(`Welcome to the File Manager, ${username}!`);
        console.log(`You are currently in ${process.cwd()}`);

    }
}

module.exports = {meetUser}
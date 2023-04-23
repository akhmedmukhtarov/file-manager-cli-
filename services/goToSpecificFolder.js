const goToSpecificFolder = (input) => {
    try {
        const [cd, ...rest] = input.split(' ');
        const directory = rest.join(' ');
        process.chdir(directory);
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = { goToSpecificFolder };

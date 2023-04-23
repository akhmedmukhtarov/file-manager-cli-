const fs = require('fs');
const getContentOfDirectory = () => {
    try {
        const currentDir = process.cwd();
        const contents = fs.readdirSync(currentDir).sort((a, b) => a.toLowerCase() - b.toLowerCase());
        const sortedContents = contents.sort((a, b) => a - b);
        let directories = [];
        let files = [];
        for (const content of sortedContents) {
            if (fs.lstatSync(currentDir + `/${content}`).isDirectory()) {
                directories.push({
                    Name: content,
                    Type: 'directory',
                });
            } else if (fs.lstatSync(currentDir + `/${content}`).isFile()) {
                files.push({
                    Name: content,
                    Type: 'file',
                });
            }
        }
        const result = [...directories, ...files];
        console.table(result);
    } catch (error) {
        console.log(error.message);
    }
};
module.exports = { getContentOfDirectory };

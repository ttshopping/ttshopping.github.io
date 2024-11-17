const fsExtra = require('fs-extra');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);

async function getFiles(dir) {
    let subdirs = await readdir(dir, { withFileTypes: true });
    let files = await Promise.all(subdirs.map(async (subdir) => {
        const res = path.resolve(dir, subdir.name);
        return subdir.isDirectory() ? getFiles(res) : res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
}

async function modifyHtmlFiles(paths) {
    for (const file of paths) {
        if (['.html', '.css', '.txt', '.js'].includes(path.extname(file))) {
            let content = await readFile(file, 'utf8');
            content = content.replace(/\/_nuxt\//g, '/public/');
            await writeFile(file, content, 'utf8');
        }
    }
}

fsExtra.removeSync(path.resolve('docs'));
fsExtra.copySync(path.resolve('.output/public/'), path.resolve('docs/'), { overwrite: true, move: false });

getFiles(path.resolve('docs')).then(res => {
    modifyHtmlFiles(res).then(() => {
        const oldDir = path.resolve('docs/_nuxt')
        const newDir = path.resolve('docs/public')
        if (fs.existsSync(oldDir)) {
            fs.renameSync(oldDir, newDir)
        }
    })
})

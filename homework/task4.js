const paths = [
    'package.json',
    'config/webpack.config.js',
    'src/index.js',
    'src/components/ui/Button.jsx',
    'src/components/ui/Card.jsx',
    'src/hooks/useFetch.js',
    'src/assets/logo.svg',
];

function buildFileTree(paths){
    const fileTree = paths.reduce((acc, path) => {
        const pathParts = path.split('/');
        cursor = acc
        pathParts.forEach((part, i) => {
            const isFile = i === pathParts.length - 1 ? true : false;
            if (isFile) {
                cursor[part] = null;
            } 
            else {
                if (!cursor[part]) {
                    cursor[part] = {};
                }
                cursor = cursor[part];
            }

        });
        
        return acc;
    }, {});

    return fileTree;
}

console.log(JSON.stringify(buildFileTree(paths), null, 2));
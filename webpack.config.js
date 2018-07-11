const path = require('path')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}

const path = require('path')

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}

module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    modules:[
        {
            test: /\.css$/,
            loaders:['style','css']
        },
        {
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    }
}
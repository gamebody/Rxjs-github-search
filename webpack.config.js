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
        filename: '[name].js',
        publicPath: 'assets'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.(png|jpg)$/, loader: 'url'}
        ],
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    resolve: {
        extentions: ['','.js']
    }
}
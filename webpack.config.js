module.exports = {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8010',
      'webpack/hot/only-dev-server',
      './index.jsx',
    ],
    output: {
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                // tell webpack to use babel for all *.jsx files
                test: /\.jsx$/,
                loaders: ['react-hot', 'babel-loader']
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
};

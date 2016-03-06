module.exports = {
    devtool: "eval",
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
                // tell webpack to use babel for all *.jsx and *.js files
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /\/node_modules\/|\/lib\//
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
};

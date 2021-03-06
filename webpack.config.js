const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devtool: isDev ? 'eval-source-map' : 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif|ttf)$/,
                use: ['file-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        liveReload: false,
        writeToDisk: false,
        stats: {
            modules: false,
            version: false
        }
    }
};

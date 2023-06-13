const path  = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = () => {
    return {
        mode: 'production',
        performance: {
             hints: false 
        },
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }  
                ]
            }]
        },
        optimization: {
            minimizer: [
              new CssMinimizerPlugin(),
            ],
            minimize: true,
          },
        plugins: [
            new MiniCssExtractPlugin()      
        ],
        devtool:'source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public')
            },
            historyApiFallback: true,
            devMiddleware: {
                publicPath: '/dist/'
            }
        } 
    };
};
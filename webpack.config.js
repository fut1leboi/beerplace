const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd= !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].min.${ext}`;

const optimization = () =>{
    const configObj = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if(isProd){
        configObj.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return configObj;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './assets/js/main.js',
    output: {
        filename: `./assets/js/${filename('js')}`,
        path: path.resolve(__dirname, 'public'),
        clean: true
    },
    devServer:{
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public'),
          },
        open: true,
        compress: true,
        hot: true,
        port: 3000
    },
    optimization: optimization(),

    plugins:[
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new MiniCssExtractPlugin({
            filename: `./assets/css/${filename('css')}`,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'src/assets/img/') , to: path.resolve(__dirname, 'public/assets/img/')},
                {from: path.resolve(__dirname, 'src/assets/fonts/') , to: path.resolve(__dirname, 'public/assets/fonts/')},
            ]
        })
    ],
    devtool: isProd ? false : 'source-map',
    module:{
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: false,
                  },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
                {
                    loader: "sass-loader",
                    options: {
                        webpackImporter: false,
                      },
                }
            ],
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,

                use: ['babel-loader'],
            },
        ]
    }
}
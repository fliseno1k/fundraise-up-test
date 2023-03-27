const prod = process.env.NODE_ENV === 'production';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: {
            localIdentName: '[hash:base64:5]',
        },
        sourceMap: true,
    },
};

const CSSLoader = {
    loader: 'css-loader',
    options: {
        modules: false,
        sourceMap: true,
    },
};

const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        sourceMap: true,
        postcssOptions: {
            plugins: [
                [
                    'autoprefixer',
                    { browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'] },
                ],
            ],
        },
    },
};

module.exports = {
    mode: prod ? 'production' : 'development',
    devtool: prod ? undefined : 'source-map',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist/'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
                use: 'ts-loader',
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader'],
            },
            {
                test: /\.module\.scss$/,
                use: ['style-loader', CSSModuleLoader, postCSSLoader, 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
        }),
    ],
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
    },
    devServer: {
        hot: true,
    },
};

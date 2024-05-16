const { useBabelRc, addWebpackModuleRule, override } = require('customize-cra');
const CustomWebpack = require('./webpack.config.prod');
const path = require('path');

module.exports = override(
    // useBabelRc(),
    CustomWebpack,
    addWebpackModuleRule({
        // scss: sass-loader -> css-loader -> style-loader
        test: /\.scss$/,
        use: [
            { loader: "style-loader" },
            { 
                loader: "css-loader",
                options: {
                    sourceMap: false
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: false,
                    sassOptions: {
                        includePaths: [path.resolve(__dirname, "src/assets/sass/")]
                    }
                }
            }
        ]
    })
);
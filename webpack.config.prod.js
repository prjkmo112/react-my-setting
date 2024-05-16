const { addWebpackAlias, addWebpackModuleRule } = require('customize-cra');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');


module.exports = function override(config, env) {
    // 커스텀 Webpack 설정
    config.resolve = {
        ...config.resolve, // 기존 resolve 유지
        plugins: [
            ...(config.resolve.plugins||[]), // 기존 plugins 배열 유지
            new TsconfigPathsPlugin()
        ],
        alias: {
            ...config.resolve.alias,
            Sass: path.resolve(__dirname, "src/assets/sass/")
        }
    }

    // add dotenv
    config.plugins = [
        ...(config.plugins||[]),
        new Dotenv({ path: "./.env" })
    ]

    return config;
}
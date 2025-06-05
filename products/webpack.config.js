const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            /**
             * This string must be identical to the remote URL 
             * In container webpack config 
             */
            name: 'products',
            // Always use remoteEntry.js
            filename: 'remoteEntry.js',
            /**
             * Choosing what to export from products.
             * ProductsIndex matches the import statement in src/bootstrap.js
             * in the container app
             * Alias because the name in products might be only
             * meaningful in the products context
             */
            exposes: {
                './ProductsIndex': './src/index'
            },
            /**
             * Shared module
             * Container can choose to use faker dependency from 
             * either cart or products 
            */
            shared: ['faker'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};
const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

// mode - default is production. if you want to run in development, you must add this key value (mode: development)
// entry - an entrypoint for webpack to access your application
// output - the file where the code should be outputted after webpack has completed compiling
// path - node module allowing the application to create a file in a specific path wherever it's hosted.
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    }
}
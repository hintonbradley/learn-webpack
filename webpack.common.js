
// mode - default is production. if you want to run in development, you must add this key value (mode: development)
// entry - an entrypoint for webpack to access your application
// output - the file where the code should be outputted after webpack has completed compiling
// path - node module allowing the application to create a file in a specific path wherever it's hosted.
module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            
            {
                test: /\html$/,
                use: ["html-loader"]
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
}
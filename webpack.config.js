var path = require("path");
var HtmlWebpackPlugin =  require("html-webpack-plugin");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index_bundle.js" 
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: "babel-loader" }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html"
    })]
}
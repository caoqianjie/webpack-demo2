module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer:{
        contentBase: './public',//本地服务器所加载的页面所在的目录
        colors: true,
        inline: true,
        historyApiFallback: true//不跳转
    },
    module:{
        loaders:[
            {
                test: /\.json$/,
                loader:'json'//json-loader中的loader可以省略
            },
            {
                test: /\.js$/,
                loader:'babel',
                exclude: /node_modules/
                /*query:{
                    presets: ['es2015','react']
                }//或者在.babelrc文件中配置预设*/
            },
            {
                test: /\.css/,
                loader: 'style!css'
            }
        ]
    }
};
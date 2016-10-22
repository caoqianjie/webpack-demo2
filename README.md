# webpack-demo2
learn webpack by demo2
## webpack同时编译了main.js 和 Greeter.js俩个文件 （命令行式的）
需要运行`npm run build`
## 用配置文件式的
1. 创建webpack.config.js文件
2. 基本的入口，出口配置
> __dirname”是node.js中的一个形参，它指向当前执行脚本所在的目录。   

主需要运行·`node_modules/.bin/webpack`就可以了,也可以打包文件
3. 配置`start` scripts
`start: webpack`
以后只要执行 `npm start` 就可以了
> 注：package.json中的脚本部分已经默认在命令前添加了node_modules/.bin路径，所以无论是全局还是局部安装的Webpack，你都不需要写前面那指明详细的路径了。

npm的start是一个特殊的脚本名称，它的特殊性表现在，在命令行中使用npm start就可以执行相关命令，如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}如npm run build
## webpack的强大功能
- 生成sources maps(使调试更容易)    
开发总是离不开调试，如果可以更加方便的调试当然就能提高开发效率，不过打包后的文件有时候你是不容易找到出错了的地方对应的源代码的位置的，Source Maps就是来帮我们解决这个问题的。
通过简单的配置后，Webpack在打包时可以为我们生成的source maps，这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。


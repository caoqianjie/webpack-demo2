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
### 生成sources maps(使调试更容易)    
开发总是离不开调试，如果可以更加方便的调试当然就能提高开发效率，不过打包后的文件有时候你是不容易找到出错了的地方对应的源代码的位置的，Source Maps就是来帮我们解决这个问题的。
通过简单的配置后，Webpack在打包时可以为我们生成的source maps，这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。
在webpack的配置文件中配置source maps，需要配置**devtool**，它有以下四种不同的配置选项，各具优缺点，描述如下：

- source-map   
- cheap-module-source-map  
- eval-source-map  
- cheap-module-eval-source-map   

上述选项由上到下打包速度越来越快，不过同时也具有越来越多的负面作用，较快的构建速度的后果就是对打包后的文件的的执行有一定影响。

在学习阶段以及在小到中性的项目上，eval-source-map是一个很好的选项，不过记得只在开发阶段使用它

> cheap-module-eval-source-map方法构建速度更快，但是不利于调试，推荐在大型项目考虑da时间成本是使用。

### 使用webpack构建本地服务器
其实Webpack提供一个可选的本地开发服务器，这个本地服务器基于node.js构建，可以实现你想要的这些功能，不过它是一个单独的组件，在webpack中进行配置之前需要单独安装它作为项目依赖
`npm install --save-dev webpack-dev-server`
devServer作为webpack配置项的一项，具有以下几个配置项：
1. contentBase  默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
2. port 设置默认监听端口，如果省略，默认为"8080"
3. inline 设置为true，当源文件改变时会自动刷新页面
4. colors 设置为true，使终端输出的文件为彩色的
5. historyApiFallback 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
### Loaders
Loaders是webpack中最让人激动人心的功能之一了。通过使用不同的loader，webpack通过调用外部的脚本或工具可以对各种各样的格式的文件进行处理，比如说分析JSON文件并把它转换为JavaScript文件，或者说把下一代的JS文件（ES6，ES7)转换为现代浏览器可以识别的JS文件。或者说对React的开发而言，合适的Loaders可以把React的JSX文件转换为JS文件。

Loaders需要单独安装并且需要在webpack.config.js下的modules关键字下进行配置，Loaders的配置选项包括以下几方面：

- test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
- loader：loader的名称（必须）
- include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
- query：为loaders提供额外的设置选项（可选）
### Babel
Babel其实是一个编译JavaScript的平台，它的强大之处表现在可以通过编译帮你达到以下目的：

- 下一代的JavaScript标准（ES6，ES7），这些标准目前并未被当前的浏览器完全的支持；
- 使用基于JavaScript进行了拓展的语言，比如React的JSX
#### Babel的安装与配置
Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，不过webpack把它们整合在一起使用，但是对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析Es6的babel-preset-es2015包和解析JSX的babel-preset-react包）。    
一次性安装`npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react`
#### Babel的配置选项
Babel其实可以完全在webpack.config.js中进行配置，但是考虑到babel具有非常多的配置选项，在单一的webpack.config.js文件中进行配置往往使得这个文件显得太复杂，因此一些开发者支持把babel的配置选项放在一个单独的名为 ".babelrc" 的配置文件中。我们现在的babel的配置并不算复杂，不过之后我们会再加一些东西，因此现在我们就提取出相关部分，分两个配置文件进行配置（webpack会自动调用.babelrc里的babel配置选项）   
> 到目前为止，我们已经知道了，对于模块，Webpack能提供非常强大的处理功能，那那些是模块呢。

### 一切皆模块 
Webpack有一个不可不说的优点，它把所有的文件都可以当做模块处理，包括你的JavaScript代码，也包括CSS和fonts以及图片等等等，只有通过合适的loaders，它们都可以被当做模块被处理。

#### CSS
webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，
- css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能
- style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。

> 注：感叹号的作用在于使同一文件能够使用不同类型的loader

用require可以直接在js文件中导入css文件
> 通常情况下，css会和js打包到同一个文件中，并不会打包为一个单独的css文件，不过通过合适的配置webpack也可以把css打包为单独的文件的。
 不过这也只是webpack把css当做模块而已，咱们继续看看一个真的CSS模块的实践。
 
#### CSS module
 在过去的一些年里，JavaScript通过一些新的语言特性，更好的工具以及更好的实践方法（比如说模块化）发展得非常迅速。模块使得开发者把复杂的代码转化为小的，干净的，依赖声明明确的单元，且基于优化工具，依赖管理和加载管理可以自动完成。
 不过前端的另外一部分，CSS发展就相对慢一些，大多的样式表却依旧是巨大且充满了全局类名，这使得维护和修改都非常困难和复杂。

 最近有一个叫做 CSS modules 的技术就意在把JS的模块化思想带入CSS中来，通过CSS模块，所有的类名，动画名默认都只作用于当前模块。Webpack从一开始就对CSS模块化提供了支持，在CSS loader中进行配置后，你所需要做的一切就是把”modules“传递都所需要的地方，然后就可以直接把CSS的类名传递到组件的代码中，且这样做只对当前组件有效，不必担心在不同的模块中具有相同的类名可能会造成的问题。具体的代码如下:
 ```{
          test: /\.css$/,
          loader: 'style!css?modules'//跟前面相比就在后面加上了?modules
     }
  ```
 






const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const purgecss = require()

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    // 输出文件目录
    outputDir: 'dist', // 默认dist
    // 用于嵌套生成的静态资产（js,css,img,fonts）目录
    assetsDir: 'static',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: 'index.html', // Default: 'index.html'
    filenameHashing: true,
    // 构建多页时使用
    pages: undefined,
    // eslint-loader是否在保存的时候检查
    lintOnSave: true,
    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    transpileDependencies: [],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true, //consoledrop_debugger:false,
                            pure_funcs: ['console.log'], //移除console
                        },
                    },
                }),
            ]
        }
    },
    // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
        } else {
            // 为开发环境修改配置...
            config.mode = 'development'
        }
        // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
        config.optimization.splitChunks({
            cacheGroups: {},
        })
        // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
        config.module
            .rule('eslint')
            .exclude.add('/Users/Mac/Downloads/FE/community_built-in/src/lib')
            .end()
        config.module
            .rule('scss')
            .test(/\.scss$/)
            .use('scss-loader')
            .loader('scss-loader')
            .end()
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .tap(options =>
                Object.assign(options, {
                    limit: 1,
                }),
            )
        // config.module
        //     .rule('images')
        //     .use('image-webpack-loader')
        //     .loader('image-webpack-loader')
        //     .options({
        //         mozjpeg: {
        //             progressive: true,
        //             quality: 65
        //         },
        //         optipng: {
        //             enabled: false
        //         },
        //         pngquant: {
        //             quality: [0.65, 0.9],
        //             speed: 4
        //         },
        //         gifsicle: {
        //             interlaced: false
        //         },
        //         webp: {
        //             quality: 75
        //         }
        // });
        // config.module
        //     .rule('images')
        //     .test('/\.(png|jpe?g|gif|webp)(\?.*)?$/')
        //     .use('url-loader')
        //     .loader('url-loader')
        //     .tap(options => {
        //         // 修改它的选项...
        //         options.limit = 40000;
        //         return options
        //     }).end();
        // config.module
        //     .rule('url-loader')
        //     .test('/\.(png|jpe?g|gif|webp)(\?.*)?$/')
        //     .use('url-loader')
        //     .loader('file-loader')
        //     .tap(options => {
        //         // 修改它的选项...
        //         options.name = 'static/img/[name].[hash:8].[ext]';
        //         options.limit = 40000;
        //         return options
        //     }).end();

        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('base', resolve('baseConfig'))
            .set('public', resolve('public'))
            .set('common', resolve('src/common'))
        config.resolve.extensions.merge(['.js', '.jsx', '.vue', '.json']).end()
        config.resolve.symlinks(true)
    },
    // css相关配置
    css: {
        // 是否开启支持 foo.module.css 样式
        modules: false,
        // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
        extract: false,
        // 是否构建样式地图，false 将提高构建速度
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
            },
        },
    },
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // proxy: null,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:1688',
                changeOrigin: true, // 允许websockets跨域
                // ws: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
        // 代理转发配置，用于调试环境
        before: app => {},
    },

    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1,
    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // 第三方插件配置
    pluginOptions: {
        // new webpack.DefinePlugin()
        foo: {
            // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
            vueName: 'Vue.js',
        },
    },
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.sass` 这个文件
                // 注意：在 sass-loader v7 中，这个选项名是 "data"
                prependData: `@import "~@/variables.sass"`,
            },
            // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
            // 因为 `scss` 语法在内部也是由 sass-loader 处理的
            // 但是在配置 `data` 选项的时候
            // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
            // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
            scss: {
                prependData: `@import "~@/variables.scss";`,
            },
            // 给 less-loader 传递 Less.js 相关选项
            less: {
                // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
                // `primary` is global variables fields name
                globalVars: {
                    primary: '#fff',
                },
            },
        },
    },
}

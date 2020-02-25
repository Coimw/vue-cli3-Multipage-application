const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 打包分析工具，可选用
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// sentry 接入，可选用
// const SentryPlugin = require('@tencent/webpack-sentry-plugin');

const glob = require('glob')
const titles = require('./title.js')

// 统一配置多页
const pages = {}
glob.sync('./src/pages/**/index.js').forEach((filePath) => {
  let chunk = filePath.split('./src/pages/')[1].split('/index.js')[0]
  const chunkFirstName = chunk.split('/')[0]
  if (chunkFirstName === 'user') {
    chunk += '/index'
  }
  // console.log(chunk)
  pages[chunk] = {
    entry: filePath,
    template: 'public/index.html',
    title: titles[chunk],
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
})
console.log('process.env.NODE_ENV ==' + process.env.NODE_ENV)
module.exports = {
  // baseUrl: '/pcpages',
  pages,
  lintOnSave: true,
  outputDir: './dist',
  productionSourceMap: !(process.env.NODE_ENV === 'production'),
  devServer: {
    port: 83,
    proxy: {
      '/openplatform': {
        target: 'http://127.0.0.1:80',
        ws: true,
        changeOrigin: true
      }
    } // 配置开发环境 URL 便于本地开发调试
  },
  chainWebpack: (config) => {
    config.plugins.delete('named-chunks')
    config.externals({
      'CKEDITOR': 'window.CKEDITOR'
    })
  },
  configureWebpack: (config) => {
    // const plugins = [
    //   new UglifyJsPlugin({
    //     uglifyOptions: {
    //       compress: {
    //         drop_console: true
    //       }
    //     },
    //     sourceMap: true
    //   })
    // ]
    // splitChunk 配置
    const splitChunksConfig = {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
          minChunks: 2
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
    if (process.env.NODE_ENV === 'production') {
      // config.plugins = [...config.plugins, ...plugins];
      config.optimization.splitChunks = splitChunksConfig;
			
			//警告 webpack 的性能提示
			let performance = {
			  hints: 'warning',
			  //入口起点的最大体积
			  maxEntrypointSize: 800000,
			  //生成文件的最大体积
			  maxAssetSize: 800000,
			  //只给出 js 文件的性能提示
			  assetFilter: function (assetFilename) {
			    return assetFilename.endsWith('.js');
			  }
			};
			//设置生产去除打印信息console
			let compress = function () {
			  return process.env.VUE_APP_MODE === 'production' ?
			    [new UglifyPlugin({
			      uglifyOptions: {
			        warnings: false,
			        parallel : true,
			        compress: {
			          drop_console: true, //把console.log()注释掉
			          drop_debugger: false,
			          pure_funcs: ['console.log'] // 移除console
			        }
			      }
			    })] : [];
			};
			// 将每个依赖包打包成单独的js文件,优化打包chunk-vendors.js文件体积过大
			let optimization = {
			  runtimeChunk: 'single',
			  splitChunks: {
			    chunks: 'all',
			    maxInitialRequests: Infinity,
			    minSize: 30000,               // 依赖包超过30000bit将被单独打包
			    cacheGroups: {
			      vendor: {
			        test: /[\\/]node_modules[\\/]/,
			        name(module) {
			          // get the name. E.g. node_modules/packageName/not/this/part.js
			          // or node_modules/packageName
			          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
			          // npm package names are URL-safe, but some servers don't like @ symbols
			          return `npm.${packageName.replace('@', '')}`;
			        }
			      }
			    }
			  },
			  //设置生产去除打印信息console
			  minimizer: compress()
			};
			Object.assign(config, {
			  performance,
			  optimization
			});
    }
  }
}
